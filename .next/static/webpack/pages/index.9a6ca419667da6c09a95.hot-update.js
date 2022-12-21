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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, symbol, walletName) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      tonExRate = _useState4[0],\n      setTonExRate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      scrtExRate = _useState5[0],\n      setScrtExRate = _useState5[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res)); // console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setTonExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetSCRTExchangeRate)().then(function (res) {\n      setScrtExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    var getScrtBal = /*#__PURE__*/function () {\n      var _ref4 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://proxy.atomscan.com/secret-lcd/cosmos/bank/v1beta1/balances/\".concat(checkAccount)).then(function (response) {\n                  var scrtBal = response.balances.amount;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(scrtBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function getScrtBal() {\n        return _ref4.apply(this, arguments);\n      };\n    }();\n\n    if (symbol === \"ETH\") {\n      getEthBalance();\n    }\n\n    if (symbol === \"EGLD\") {\n      getElrondBal();\n    }\n\n    if (symbol === \"TON\") {\n      getTonBal();\n    }\n\n    if (symbol === \"SCRT\") {\n      getScrtBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, symbol, ethExRate, egldExRate, tonExRate, walletName]);\n  return [balance];\n}\n\n_s(useBalance, \"XiLXsGJlGFO61BZ1hFAtruwgGMM=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy91c2VCYWxhbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9lLFNBQVNhLFVBQVQsQ0FDYkMsWUFEYSxFQUViQyxRQUZhLEVBR2JDLFlBSGEsRUFJYkMsTUFKYSxFQUtiQyxVQUxhLEVBTWI7QUFBQTs7QUFDQSxrQkFBOEJsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPbUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBa0NwQiwrQ0FBUSxFQUExQztBQUFBLE1BQU9xQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFvQ3RCLCtDQUFRLEVBQTVDO0FBQUEsTUFBT3VCLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQWtDeEIsK0NBQVEsRUFBMUM7QUFBQSxNQUFPeUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0MxQiwrQ0FBUSxFQUE1QztBQUFBLE1BQU8yQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLHNCQUE2QnJCLDhEQUFZLEVBQXpDO0FBQUEsTUFBUXNCLE9BQVIsaUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsT0FBakIsaUJBQWlCQSxPQUFqQjs7QUFFQTdCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSwrREFBa0IsR0FBR3NCLElBQXJCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ1YsTUFBQUEsWUFBWSxDQUFDVyxVQUFVLENBQUNELEdBQUQsQ0FBWCxDQUFaLENBRGlDLENBRWpDO0FBQ0QsS0FIRDtBQUlBdEIsSUFBQUEsZ0VBQW1CLEdBQUdxQixJQUF0QixDQUEyQixVQUFDQyxHQUFELEVBQVM7QUFDbENSLE1BQUFBLGFBQWEsQ0FBQ1MsVUFBVSxDQUFDRCxHQUFELENBQVgsQ0FBYixDQURrQyxDQUVsQztBQUNELEtBSEQ7QUFJQXJCLElBQUFBLCtEQUFrQixHQUFHb0IsSUFBckIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDTixNQUFBQSxZQUFZLENBQUNPLFVBQVUsQ0FBQ0QsR0FBRCxDQUFYLENBQVosQ0FEaUMsQ0FFakM7QUFDRCxLQUhEO0FBSUFwQixJQUFBQSxnRUFBbUIsR0FBR21CLElBQXRCLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNsQ0osTUFBQUEsYUFBYSxDQUFDSyxVQUFVLENBQUNELEdBQUQsQ0FBWCxDQUFiLENBRGtDLENBRWxDO0FBQ0QsS0FIRDtBQUlELEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEvQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJaUMsV0FBVyxHQUFHLEtBQWxCOztBQUVBLGFBQVNDLFVBQVQsR0FBc0I7QUFDcEIsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLFlBQUksQ0FBQ1AsT0FBRCxJQUFZLENBQUNoQixZQUFqQixFQUErQjtBQUM3QnVCLFVBQUFBLE9BQU8sQ0FBQyxJQUFJL0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQsWUFBSTtBQUNGLGNBQUlRLFlBQVksS0FBS1osZ0RBQXJCLEVBQW1DO0FBQ2pDNEIsWUFBQUEsT0FBTyxDQUFDUSxHQUFSLENBQ0dILFVBREgsQ0FDY25CLFlBRGQsRUFFR2UsSUFGSCxDQUVRLFVBQUNRLEtBQUQsRUFBVztBQUNmRixjQUFBQSxPQUFPLENBQUMsSUFBSS9CLDhDQUFKLENBQU9pQyxLQUFQLENBQUQsQ0FBUDtBQUNELGFBSkgsV0FLUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FILGNBQUFBLE9BQU8sQ0FBQyxJQUFJL0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNELGFBUkg7QUFTRCxXQVZELE1BVU87QUFDTCxnQkFBTXFDLFFBQVEsR0FBR3ZDLHNFQUFnQixDQUMvQlUsWUFEK0IsRUFFL0JnQixPQUYrQixFQUcvQmQsWUFIK0IsQ0FBakM7QUFLQTJCLFlBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxPQUFWLENBQ0dDLFNBREgsQ0FDYWhCLE9BRGIsRUFFR2lCLElBRkgsR0FHR2YsSUFISCxDQUdRLFVBQUNRLEtBQUQsRUFBVztBQUNmRixjQUFBQSxPQUFPLENBQUMsSUFBSS9CLDhDQUFKLENBQU9pQyxLQUFQLENBQUQsQ0FBUDtBQUNELGFBTEgsV0FNUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FILGNBQUFBLE9BQU8sQ0FBQyxJQUFJL0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNELGFBVEg7QUFVRDtBQUNGLFNBNUJELENBNEJFLE9BQU9rQyxLQUFQLEVBQWM7QUFDZEgsVUFBQUEsT0FBTyxDQUFDLElBQUkvQiw4Q0FBSixDQUFPLEdBQVAsQ0FBRCxDQUFQO0FBQ0Q7QUFDRixPQXJDTSxDQUFQO0FBc0NEOztBQUVELFFBQU15QyxhQUFhO0FBQUEsK1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRVosVUFBVSxFQURaOztBQUFBO0FBQ2RhLGdCQUFBQSxPQURjOztBQUVwQixvQkFBSSxDQUFDZCxXQUFMLEVBQWtCO0FBQ1ZlLGtCQUFBQSxHQURVLEdBQ0osSUFBSTVDLGlEQUFKLENBQWMsSUFBZCxFQUFvQjRDLEdBQXBCLENBQXdCLElBQUk1QyxpREFBSixDQUFjVSxRQUFkLENBQXhCLENBREk7QUFFVm1DLGtCQUFBQSxVQUZVLEdBRUcvQywyREFBbUIsQ0FDcEM2QyxPQURvQyxFQUVwQ0MsR0FGb0MsRUFHcEMsQ0FIb0MsRUFJcEM1Qyw0REFKb0MsQ0FGdEI7QUFRVitDLGtCQUFBQSxnQkFSVSxHQVFTRixVQUFVLEdBQUc3QixTQVJ0QjtBQVNoQkQsa0JBQUFBLFVBQVUsQ0FBQ2dDLGdCQUFELENBQVY7QUFDRDs7QUFabUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBYkwsYUFBYTtBQUFBO0FBQUE7QUFBQSxPQUFuQjs7QUFjQSxRQUFNTSxZQUFZO0FBQUEsZ1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2I3Qyw4Q0FBQSw4Q0FDdUNRLFlBRHZDLGVBRUhlLElBRkcsQ0FFRSxVQUFDd0IsUUFBRCxFQUFjO0FBQ2xCLHNCQUFNQyxPQUFPLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUFkLENBQW1CdEMsT0FBbkM7QUFDQSxzQkFBTThCLEdBQUcsR0FBRyxJQUFJNUMsaURBQUosQ0FBYyxJQUFkLEVBQW9CNEMsR0FBcEIsQ0FBd0IsSUFBSTVDLGlEQUFKLENBQWNVLFFBQWQsQ0FBeEIsQ0FBWjtBQUNBLHNCQUFNMkMsY0FBYyxHQUFHdkQsMkRBQW1CLENBQ3hDcUQsT0FEd0MsRUFFeENQLEdBRndDLEVBR3hDLENBSHdDLEVBSXhDNUMsNERBSndDLENBQTFDO0FBTUEsc0JBQU0rQyxnQkFBZ0IsR0FBR00sY0FBYyxHQUFHbkMsVUFBMUM7QUFDQUgsa0JBQUFBLFVBQVUsQ0FBQ2dDLGdCQUFELENBQVY7QUFDRCxpQkFiRyxXQWNHLFVBQUNPLEdBQUQsRUFBUztBQUNkbEIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaUIsR0FBWjtBQUNBdkMsa0JBQUFBLFVBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxpQkFqQkcsQ0FEYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaaUMsWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFsQjs7QUFvQkEsUUFBTU8sU0FBUztBQUFBLGdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNWcEQsOENBQUEsa0VBRXdEUSxZQUZ4RCxHQUlIZSxJQUpHLENBSUUsVUFBQ3dCLFFBQUQsRUFBYztBQUNsQixzQkFBTU0sTUFBTSxHQUFHTixRQUFRLENBQUNFLElBQVQsQ0FBY0ssTUFBN0I7QUFDQSxzQkFBTWIsR0FBRyxHQUFHLElBQUk1QyxpREFBSixDQUFjLElBQWQsRUFBb0I0QyxHQUFwQixDQUF3QixJQUFJNUMsaURBQUosQ0FBY1UsUUFBZCxDQUF4QixDQUFaO0FBQ0Esc0JBQU0yQyxjQUFjLEdBQUd2RCwyREFBbUIsQ0FDeEMwRCxNQUR3QyxFQUV4Q1osR0FGd0MsRUFHeEMsQ0FId0MsRUFJeEM1Qyw0REFKd0MsQ0FBMUM7QUFNQSxzQkFBTStDLGdCQUFnQixHQUFHTSxjQUFjLEdBQUdqQyxTQUExQztBQUNBTCxrQkFBQUEsVUFBVSxDQUFDZ0MsZ0JBQUQsQ0FBVjtBQUNELGlCQWZHLFdBZ0JHLFVBQUNPLEdBQUQsRUFBUztBQUNkbEIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaUIsR0FBWjtBQUNBdkMsa0JBQUFBLFVBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxpQkFuQkcsQ0FEVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUd0MsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQXNCQSxRQUFNRyxVQUFVO0FBQUEsZ1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1h2RCw4Q0FBQSw4RUFFb0VRLFlBRnBFLEdBSUhlLElBSkcsQ0FJRSxVQUFDd0IsUUFBRCxFQUFjO0FBQ2xCLHNCQUFNUyxPQUFPLEdBQUdULFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkMsTUFBbEM7QUFDQSxzQkFBTWpCLEdBQUcsR0FBRyxJQUFJNUMsaURBQUosQ0FBYyxJQUFkLEVBQW9CNEMsR0FBcEIsQ0FBd0IsSUFBSTVDLGlEQUFKLENBQWNVLFFBQWQsQ0FBeEIsQ0FBWjtBQUNBLHNCQUFNMkMsY0FBYyxHQUFHdkQsMkRBQW1CLENBQ3hDNkQsT0FEd0MsRUFFeENmLEdBRndDLEVBR3hDLENBSHdDLEVBSXhDNUMsNERBSndDLENBQTFDO0FBTUEsc0JBQU0rQyxnQkFBZ0IsR0FBR00sY0FBYyxHQUFHakMsU0FBMUM7QUFDQUwsa0JBQUFBLFVBQVUsQ0FBQ2dDLGdCQUFELENBQVY7QUFDRCxpQkFmRyxXQWdCRyxVQUFDTyxHQUFELEVBQVM7QUFDZGxCLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWlCLEdBQVo7QUFDQXZDLGtCQUFBQSxVQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0QsaUJBbkJHLENBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVjJDLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBc0JBLFFBQUk5QyxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQjhCLE1BQUFBLGFBQWE7QUFDZDs7QUFDRCxRQUFJOUIsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckJvQyxNQUFBQSxZQUFZO0FBQ2I7O0FBQ0QsUUFBSXBDLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCMkMsTUFBQUEsU0FBUztBQUNWOztBQUNELFFBQUkzQyxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQjhDLE1BQUFBLFVBQVU7QUFDWDs7QUFDRCxXQUFPLFlBQU07QUFDWDdCLE1BQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0QsS0FGRDtBQUdELEdBeklRLEVBeUlOLENBQ0RwQixZQURDLEVBRURnQixPQUZDLEVBR0RmLFFBSEMsRUFJRGMsT0FKQyxFQUtEYixZQUxDLEVBTURDLE1BTkMsRUFPREksU0FQQyxFQVFERSxVQVJDLEVBU0RFLFNBVEMsRUFVRFAsVUFWQyxDQXpJTSxDQUFUO0FBc0pBLFNBQU8sQ0FBQ0MsT0FBRCxDQUFQO0FBQ0Q7O0dBeEx1Qk47VUFZT04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvdXNlQmFsYW5jZS5qcz8yNGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgWkVST19BRERSRVNTLCB3ZWIzQk5Ub0Zsb2F0U3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldEVSQzIwQ29udHJhY3QgfSBmcm9tIFwiLi4vc3RvcmUvY29udHJhY3RTdG9yZVwiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEJOIGZyb20gXCJibi5qc1wiO1xyXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgR2V0VVNERXhjaGFuZ2VSYXRlLFxyXG4gIEdldEVHTERFeGNoYW5nZVJhdGUsXHJcbiAgR2V0VE9ORXhjaGFuZ2VSYXRlLFxyXG4gIEdldFNDUlRFeGNoYW5nZVJhdGVcclxufSBmcm9tIFwiLi4vYXNzZXRzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmFsYW5jZShcclxuICB0b2tlbkFkZHJlc3MsXHJcbiAgZGVjaW1hbHMsXHJcbiAgY2hlY2tBY2NvdW50LFxyXG4gIHN5bWJvbCxcclxuICB3YWxsZXROYW1lXHJcbikge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtldGhFeFJhdGUsIHNldEV0aEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlZ2xkRXhSYXRlLCBzZXRFZ2xkRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3RvbkV4UmF0ZSwgc2V0VG9uRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NjcnRFeFJhdGUsIHNldFNjcnRFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgR2V0VVNERXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEV0aEV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInVzZFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBHZXRFR0xERXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEVnbGRFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0VE9ORXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFRvbkV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV0aFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBHZXRTQ1JURXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFNjcnRFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGlmICghbGlicmFyeSB8fCAhdG9rZW5BZGRyZXNzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICh0b2tlbkFkZHJlc3MgPT09IFpFUk9fQUREUkVTUykge1xyXG4gICAgICAgICAgICBsaWJyYXJ5LmV0aFxyXG4gICAgICAgICAgICAgIC5nZXRCYWxhbmNlKGNoZWNrQWNjb3VudClcclxuICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRFUkMyMENvbnRyYWN0KFxyXG4gICAgICAgICAgICAgIHRva2VuQWRkcmVzcyxcclxuICAgICAgICAgICAgICBsaWJyYXJ5LFxyXG4gICAgICAgICAgICAgIGNoZWNrQWNjb3VudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb250cmFjdD8ubWV0aG9kc1xyXG4gICAgICAgICAgICAgIC5iYWxhbmNlT2YoYWNjb3VudClcclxuICAgICAgICAgICAgICAuY2FsbCgpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEV0aEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV0aEJsbmMgPSBhd2FpdCBnZXRCYWxhbmNlKCk7XHJcbiAgICAgIGlmICghaXNDYW5jZWxsZWQpIHtcclxuICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICBjb25zdCBkZWNpbWFsQmFsID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgIGV0aEJsbmMsXHJcbiAgICAgICAgICBwb3csXHJcbiAgICAgICAgICA0LFxyXG4gICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsICogZXRoRXhSYXRlO1xyXG4gICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRFbHJvbmRCYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9nYXRld2F5LmVscm9uZC5jb20vYWRkcmVzcy8ke2NoZWNrQWNjb3VudH0vYmFsYW5jZWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlZ2xkQmFsID0gcmVzcG9uc2UuZGF0YS5kYXRhLmJhbGFuY2U7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgZWdsZEJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIGVnbGRFeFJhdGU7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRvbkJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgYGh0dHBzOi8vdG9uY2VudGVyLmNvbS9hcGkvdjIvZ2V0QWRkcmVzc0JhbGFuY2U/YWRkcmVzcz0ke2NoZWNrQWNjb3VudH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9uQmFsID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgdG9uQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogdG9uRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRTY3J0QmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9wcm94eS5hdG9tc2Nhbi5jb20vc2VjcmV0LWxjZC9jb3Ntb3MvYmFuay92MWJldGExL2JhbGFuY2VzLyR7Y2hlY2tBY2NvdW50fWBcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzY3J0QmFsID0gcmVzcG9uc2UuYmFsYW5jZXMuYW1vdW50O1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIHNjcnRCYWwsXHJcbiAgICAgICAgICAgIHBvdyxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbGFuY2UgKiB0b25FeFJhdGU7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmIChzeW1ib2wgPT09IFwiRVRIXCIpIHtcclxuICAgICAgZ2V0RXRoQmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN5bWJvbCA9PT0gXCJFR0xEXCIpIHtcclxuICAgICAgZ2V0RWxyb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIlRPTlwiKSB7XHJcbiAgICAgIGdldFRvbkJhbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN5bWJvbCA9PT0gXCJTQ1JUXCIpIHtcclxuICAgICAgZ2V0U2NydEJhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9LCBbXHJcbiAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICBsaWJyYXJ5LFxyXG4gICAgZGVjaW1hbHMsXHJcbiAgICBhY2NvdW50LFxyXG4gICAgY2hlY2tBY2NvdW50LFxyXG4gICAgc3ltYm9sLFxyXG4gICAgZXRoRXhSYXRlLFxyXG4gICAgZWdsZEV4UmF0ZSxcclxuICAgIHRvbkV4UmF0ZSxcclxuICAgIHdhbGxldE5hbWVcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIFtiYWxhbmNlXTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJaRVJPX0FERFJFU1MiLCJ3ZWIzQk5Ub0Zsb2F0U3RyaW5nIiwiZ2V0RVJDMjBDb250cmFjdCIsIkJpZ051bWJlciIsIkJOIiwidXNlV2ViM1JlYWN0IiwiYXhpb3MiLCJHZXRVU0RFeGNoYW5nZVJhdGUiLCJHZXRFR0xERXhjaGFuZ2VSYXRlIiwiR2V0VE9ORXhjaGFuZ2VSYXRlIiwiR2V0U0NSVEV4Y2hhbmdlUmF0ZSIsInVzZUJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJkZWNpbWFscyIsImNoZWNrQWNjb3VudCIsInN5bWJvbCIsIndhbGxldE5hbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImV0aEV4UmF0ZSIsInNldEV0aEV4UmF0ZSIsImVnbGRFeFJhdGUiLCJzZXRFZ2xkRXhSYXRlIiwidG9uRXhSYXRlIiwic2V0VG9uRXhSYXRlIiwic2NydEV4UmF0ZSIsInNldFNjcnRFeFJhdGUiLCJhY2NvdW50IiwibGlicmFyeSIsInRoZW4iLCJyZXMiLCJwYXJzZUZsb2F0IiwiaXNDYW5jZWxsZWQiLCJnZXRCYWxhbmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJldGgiLCJ2YWx1ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbnRyYWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJnZXRFdGhCYWxhbmNlIiwiZXRoQmxuYyIsInBvdyIsImRlY2ltYWxCYWwiLCJST1VORF9ET1dOIiwiY29udmVydGVkQmFsYW5jZSIsImdldEVscm9uZEJhbCIsImdldCIsInJlc3BvbnNlIiwiZWdsZEJhbCIsImRhdGEiLCJkZWNpbWFsQmFsYW5jZSIsImVyciIsImdldFRvbkJhbCIsInRvbkJhbCIsInJlc3VsdCIsImdldFNjcnRCYWwiLCJzY3J0QmFsIiwiYmFsYW5jZXMiLCJhbW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});