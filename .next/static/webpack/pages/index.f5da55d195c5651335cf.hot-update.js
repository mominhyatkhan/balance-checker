"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/actions/useBalance.js":
/*!***********************************!*\
  !*** ./src/actions/useBalance.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, symbol, walletName) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      tonExRate = _useState4[0],\n      setTonExRate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      scrtExRate = _useState5[0],\n      setScrtExRate = _useState5[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res)); // console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setTonExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetSCRTExchangeRate)().then(function (res) {\n      setScrtExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    var getScrtBal = /*#__PURE__*/function () {\n      var _ref4 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://proxy.atomscan.com/secret-lcd/cosmos/bank/v1beta1/balances/\".concat(checkAccount)).then(function (response) {\n                  console.log(response);\n                  var scrtBal = response.data.balances[balances.length - 1].amount;\n                  console.log(scrtBal);\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(5));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(scrtBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * scrtExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function getScrtBal() {\n        return _ref4.apply(this, arguments);\n      };\n    }();\n\n    if (symbol === \"ETH\") {\n      getEthBalance();\n    }\n\n    if (symbol === \"EGLD\") {\n      getElrondBal();\n    }\n\n    if (symbol === \"TON\") {\n      getTonBal();\n    }\n\n    if (symbol === \"SCRT\") {\n      getScrtBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, symbol, ethExRate, egldExRate, tonExRate, walletName]);\n  return [balance];\n}\n\n_s(useBalance, \"XiLXsGJlGFO61BZ1hFAtruwgGMM=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFpFUk9fQUREUkVTUywgd2ViM0JOVG9GbG9hdFN0cmluZyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRFUkMyMENvbnRyYWN0IH0gZnJvbSBcIi4uL3N0b3JlL2NvbnRyYWN0U3RvcmVcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBCTiBmcm9tIFwiYm4uanNcIjtcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdldFVTREV4Y2hhbmdlUmF0ZSxcclxuICBHZXRFR0xERXhjaGFuZ2VSYXRlLFxyXG4gIEdldFRPTkV4Y2hhbmdlUmF0ZSxcclxuICBHZXRTQ1JURXhjaGFuZ2VSYXRlXHJcbn0gZnJvbSBcIi4uL2Fzc2V0cy9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhbGFuY2UoXHJcbiAgdG9rZW5BZGRyZXNzLFxyXG4gIGRlY2ltYWxzLFxyXG4gIGNoZWNrQWNjb3VudCxcclxuICBzeW1ib2wsXHJcbiAgd2FsbGV0TmFtZVxyXG4pIHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXRoRXhSYXRlLCBzZXRFdGhFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZWdsZEV4UmF0ZSwgc2V0RWdsZEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b25FeFJhdGUsIHNldFRvbkV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzY3J0RXhSYXRlLCBzZXRTY3J0RXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEdldFVTREV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFdGhFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2RcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0RUdMREV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFZ2xkRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICAgIEdldFRPTkV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRUb25FeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0U0NSVEV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRTY3J0RXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIXRva2VuQWRkcmVzcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAodG9rZW5BZGRyZXNzID09PSBaRVJPX0FERFJFU1MpIHtcclxuICAgICAgICAgICAgbGlicmFyeS5ldGhcclxuICAgICAgICAgICAgICAuZ2V0QmFsYW5jZShjaGVja0FjY291bnQpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RVJDMjBDb250cmFjdChcclxuICAgICAgICAgICAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgbGlicmFyeSxcclxuICAgICAgICAgICAgICBjaGVja0FjY291bnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29udHJhY3Q/Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAuYmFsYW5jZU9mKGFjY291bnQpXHJcbiAgICAgICAgICAgICAgLmNhbGwoKVxyXG4gICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4odmFsdWUpKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRFdGhCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBldGhCbG5jID0gYXdhaXQgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbEJhbCA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICBldGhCbG5jLFxyXG4gICAgICAgICAgcG93LFxyXG4gICAgICAgICAgNCxcclxuICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbCAqIGV0aEV4UmF0ZTtcclxuICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RWxyb25kQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vZ2F0ZXdheS5lbHJvbmQuY29tL2FkZHJlc3MvJHtjaGVja0FjY291bnR9L2JhbGFuY2VgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWdsZEJhbCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIGVnbGRCYWwsXHJcbiAgICAgICAgICAgIHBvdyxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbGFuY2UgKiBlZ2xkRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb25CYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcclxuICAgICAgICAgIGBodHRwczovL3RvbmNlbnRlci5jb20vYXBpL3YyL2dldEFkZHJlc3NCYWxhbmNlP2FkZHJlc3M9JHtjaGVja0FjY291bnR9YFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvbkJhbCA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIHRvbkJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIHRvbkV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0U2NydEJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgYGh0dHBzOi8vcHJveHkuYXRvbXNjYW4uY29tL3NlY3JldC1sY2QvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy8ke2NoZWNrQWNjb3VudH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgY29uc3Qgc2NydEJhbCA9IHJlc3BvbnNlLmRhdGEuYmFsYW5jZXNbYmFsYW5jZXMubGVuZ3RoIC0gMV0uYW1vdW50O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coc2NydEJhbCk7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoNSkpO1xyXG4gICAgICAgICAgY29uc3QgZGVjaW1hbEJhbGFuY2UgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgICBzY3J0QmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogc2NydEV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHN5bWJvbCA9PT0gXCJFVEhcIikge1xyXG4gICAgICBnZXRFdGhCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIkVHTERcIikge1xyXG4gICAgICBnZXRFbHJvbmRCYWwoKTtcclxuICAgIH1cclxuICAgIGlmIChzeW1ib2wgPT09IFwiVE9OXCIpIHtcclxuICAgICAgZ2V0VG9uQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIlNDUlRcIikge1xyXG4gICAgICBnZXRTY3J0QmFsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gIH0sIFtcclxuICAgIHRva2VuQWRkcmVzcyxcclxuICAgIGxpYnJhcnksXHJcbiAgICBkZWNpbWFscyxcclxuICAgIGFjY291bnQsXHJcbiAgICBjaGVja0FjY291bnQsXHJcbiAgICBzeW1ib2wsXHJcbiAgICBldGhFeFJhdGUsXHJcbiAgICBlZ2xkRXhSYXRlLFxyXG4gICAgdG9uRXhSYXRlLFxyXG4gICAgd2FsbGV0TmFtZVxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gW2JhbGFuY2VdO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlpFUk9fQUREUkVTUyIsIndlYjNCTlRvRmxvYXRTdHJpbmciLCJnZXRFUkMyMENvbnRyYWN0IiwiQmlnTnVtYmVyIiwiQk4iLCJ1c2VXZWIzUmVhY3QiLCJheGlvcyIsIkdldFVTREV4Y2hhbmdlUmF0ZSIsIkdldEVHTERFeGNoYW5nZVJhdGUiLCJHZXRUT05FeGNoYW5nZVJhdGUiLCJHZXRTQ1JURXhjaGFuZ2VSYXRlIiwidXNlQmFsYW5jZSIsInRva2VuQWRkcmVzcyIsImRlY2ltYWxzIiwiY2hlY2tBY2NvdW50Iiwic3ltYm9sIiwid2FsbGV0TmFtZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZXRoRXhSYXRlIiwic2V0RXRoRXhSYXRlIiwiZWdsZEV4UmF0ZSIsInNldEVnbGRFeFJhdGUiLCJ0b25FeFJhdGUiLCJzZXRUb25FeFJhdGUiLCJzY3J0RXhSYXRlIiwic2V0U2NydEV4UmF0ZSIsImFjY291bnQiLCJsaWJyYXJ5IiwidGhlbiIsInJlcyIsInBhcnNlRmxvYXQiLCJpc0NhbmNlbGxlZCIsImdldEJhbGFuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV0aCIsInZhbHVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29udHJhY3QiLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsImdldEV0aEJhbGFuY2UiLCJldGhCbG5jIiwicG93IiwiZGVjaW1hbEJhbCIsIlJPVU5EX0RPV04iLCJjb252ZXJ0ZWRCYWxhbmNlIiwiZ2V0RWxyb25kQmFsIiwiZ2V0IiwicmVzcG9uc2UiLCJlZ2xkQmFsIiwiZGF0YSIsImRlY2ltYWxCYWxhbmNlIiwiZXJyIiwiZ2V0VG9uQmFsIiwidG9uQmFsIiwicmVzdWx0IiwiZ2V0U2NydEJhbCIsInNjcnRCYWwiLCJiYWxhbmNlcyIsImxlbmd0aCIsImFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});