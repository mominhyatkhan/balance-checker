import { useState, useEffect } from "react";
import { ZERO_ADDRESS, web3BNToFloatString } from "../utils";
import { getERC20Contract } from "../store/contractStore";
import BigNumber from "bignumber.js";
import BN from "bn.js";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import {
  GetUSDExchangeRate,
  GetEGLDExchangeRate,
} from "../assets/api";

export default function useBalance(tokenAddress, decimals, checkAccount, name) {
  const [balance, setBalance] = useState(0);
  const [ethExRate, setEthExRate] = useState();
  const [egldExRate, setEgldExRate] = useState();
  const { account, library } = useWeb3React();

  useEffect(() => {
    GetUSDExchangeRate().then((res) => {
      setEthExRate(parseFloat(res));
      console.log("usd", parseFloat(res));
    });
    GetEGLDExchangeRate().then((res) => {
      setEgldExRate(parseFloat(res));
      console.log("eth", parseFloat(res));
    });
  }, []);

  useEffect(() => {
    let isCancelled = false;

    function getBalance() {
      return new Promise((resolve) => {
        if (!library || !tokenAddress) {
          resolve(new BN("0"));
          return;
        }

        try {
          if (tokenAddress === ZERO_ADDRESS) {
            library.eth
              .getBalance(checkAccount)
              .then((value) => {
                resolve(new BN(value));
              })
              .catch((error) => {
                console.log(error);
                resolve(new BN("0"));
              });
          } else {
            const contract = getERC20Contract(
              tokenAddress,
              library,
              checkAccount
            );
            contract?.methods
              .balanceOf(account)
              .call()
              .then((value) => {
                resolve(new BN(value));
              })
              .catch((error) => {
                console.log(error);
                resolve(new BN("0"));
              });
          }
        } catch (error) {
          resolve(new BN("0"));
        }
      });
    }

    const getEthBalance = async () => {
      const ethBlnc = await getBalance();
      if (!isCancelled) {
        const pow = new BigNumber("10").pow(new BigNumber(decimals));
        const decimalBal = web3BNToFloatString(
          ethBlnc,
          pow,
          4,
          BigNumber.ROUND_DOWN
        );
        // console.log("eth value", usdExRate);
        const convertedBalance = decimalBal * ethExRate;
        setBalance(convertedBalance);
      }
    };
    const getElrondBal = async () => {
      await axios
        .get(`https://gateway.elrond.com/address/${checkAccount}/balance`)
        .then((response) => {
          const egldBal = response.data.data.balance;
          const pow = new BigNumber("10").pow(new BigNumber(decimals));
          const decimalBalance = web3BNToFloatString(
            egldBal,
            pow,
            4,
            BigNumber.ROUND_DOWN
          );
          const convertedBalance = decimalBalance * egldExRate;
          setBalance(convertedBalance);
        })
        .catch((err) => {
          console.log(err);
          setBalance(0);
        });
    };
    if (name === "Ethereum") {
      getEthBalance();
    }
    if (name === "Elrond") {
      getElrondBal();
    }
    return () => {
      isCancelled = true;
    };
  }, [
    tokenAddress,
    library,
    decimals,
    account,
    checkAccount,
    name,
    ethExRate,
    egldExRate,
  ]);

  return [balance];
}
