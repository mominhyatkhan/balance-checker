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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, symbol, walletName) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      tonExRate = _useState4[0],\n      setTonExRate = _useState4[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res)); // console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setTonExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    var getScrtBal = /*#__PURE__*/function () {\n      var _ref4 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://proxy.atomscan.com/secret-lcd/cosmos/bank/v1beta1/balances/\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function getScrtBal() {\n        return _ref4.apply(this, arguments);\n      };\n    }();\n\n    if (symbol === \"ETH\") {\n      getEthBalance();\n    }\n\n    if (symbol === \"EGLD\") {\n      getElrondBal();\n    }\n\n    if (symbol === \"TON\") {\n      getTonBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, symbol, ethExRate, egldExRate, tonExRate, walletName]);\n  return [balance];\n}\n\n_s(useBalance, \"h3n9B4d+h/gPzgDSn6DAnQfBJTs=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUg7O0FBQUEsc0JBQVZ5QyxVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQXNCQSxRQUFJNUMsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEI0QixNQUFBQSxhQUFhO0FBQ2Q7O0FBQ0QsUUFBSTVCLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCa0MsTUFBQUEsWUFBWTtBQUNiOztBQUNELFFBQUlsQyxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQnlDLE1BQUFBLFNBQVM7QUFDVjs7QUFDRCxXQUFPLFlBQU07QUFDWDFCLE1BQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0QsS0FGRDtBQUdELEdBdElRLEVBc0lOLENBQ0RsQixZQURDLEVBRURjLE9BRkMsRUFHRGIsUUFIQyxFQUlEWSxPQUpDLEVBS0RYLFlBTEMsRUFNREMsTUFOQyxFQU9ESSxTQVBDLEVBUURFLFVBUkMsRUFTREUsU0FUQyxFQVVEUCxVQVZDLENBdElNLENBQVQ7QUFtSkEsU0FBTyxDQUFDQyxPQUFELENBQVA7QUFDRDs7R0FoTHVCTjtVQVdPTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWN0aW9ucy91c2VCYWxhbmNlLmpzPzI0ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBaRVJPX0FERFJFU1MsIHdlYjNCTlRvRmxvYXRTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgZ2V0RVJDMjBDb250cmFjdCB9IGZyb20gXCIuLi9zdG9yZS9jb250cmFjdFN0b3JlXCI7XHJcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xyXG5pbXBvcnQgQk4gZnJvbSBcImJuLmpzXCI7XHJcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBHZXRVU0RFeGNoYW5nZVJhdGUsXHJcbiAgR2V0RUdMREV4Y2hhbmdlUmF0ZSxcclxuICBHZXRUT05FeGNoYW5nZVJhdGUsXHJcbn0gZnJvbSBcIi4uL2Fzc2V0cy9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhbGFuY2UoXHJcbiAgdG9rZW5BZGRyZXNzLFxyXG4gIGRlY2ltYWxzLFxyXG4gIGNoZWNrQWNjb3VudCxcclxuICBzeW1ib2wsXHJcbiAgd2FsbGV0TmFtZVxyXG4pIHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXRoRXhSYXRlLCBzZXRFdGhFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZWdsZEV4UmF0ZSwgc2V0RWdsZEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b25FeFJhdGUsIHNldFRvbkV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBHZXRVU0RFeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RXRoRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidXNkXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICAgIEdldEVHTERFeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RWdsZEV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV0aFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBHZXRUT05FeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0VG9uRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIXRva2VuQWRkcmVzcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAodG9rZW5BZGRyZXNzID09PSBaRVJPX0FERFJFU1MpIHtcclxuICAgICAgICAgICAgbGlicmFyeS5ldGhcclxuICAgICAgICAgICAgICAuZ2V0QmFsYW5jZShjaGVja0FjY291bnQpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RVJDMjBDb250cmFjdChcclxuICAgICAgICAgICAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgbGlicmFyeSxcclxuICAgICAgICAgICAgICBjaGVja0FjY291bnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29udHJhY3Q/Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAuYmFsYW5jZU9mKGFjY291bnQpXHJcbiAgICAgICAgICAgICAgLmNhbGwoKVxyXG4gICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4odmFsdWUpKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRFdGhCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBldGhCbG5jID0gYXdhaXQgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbEJhbCA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICBldGhCbG5jLFxyXG4gICAgICAgICAgcG93LFxyXG4gICAgICAgICAgNCxcclxuICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbCAqIGV0aEV4UmF0ZTtcclxuICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RWxyb25kQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vZ2F0ZXdheS5lbHJvbmQuY29tL2FkZHJlc3MvJHtjaGVja0FjY291bnR9L2JhbGFuY2VgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWdsZEJhbCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIGVnbGRCYWwsXHJcbiAgICAgICAgICAgIHBvdyxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbGFuY2UgKiBlZ2xkRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb25CYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcclxuICAgICAgICAgIGBodHRwczovL3RvbmNlbnRlci5jb20vYXBpL3YyL2dldEFkZHJlc3NCYWxhbmNlP2FkZHJlc3M9JHtjaGVja0FjY291bnR9YFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvbkJhbCA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIHRvbkJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIHRvbkV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0U2NydEJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgYGh0dHBzOi8vcHJveHkuYXRvbXNjYW4uY29tL3NlY3JldC1sY2QvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy8ke2NoZWNrQWNjb3VudH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9uQmFsID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgdG9uQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogdG9uRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIkVUSFwiKSB7XHJcbiAgICAgIGdldEV0aEJhbGFuY2UoKTtcclxuICAgIH1cclxuICAgIGlmIChzeW1ib2wgPT09IFwiRUdMRFwiKSB7XHJcbiAgICAgIGdldEVscm9uZEJhbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN5bWJvbCA9PT0gXCJUT05cIikge1xyXG4gICAgICBnZXRUb25CYWwoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgfSwgW1xyXG4gICAgdG9rZW5BZGRyZXNzLFxyXG4gICAgbGlicmFyeSxcclxuICAgIGRlY2ltYWxzLFxyXG4gICAgYWNjb3VudCxcclxuICAgIGNoZWNrQWNjb3VudCxcclxuICAgIHN5bWJvbCxcclxuICAgIGV0aEV4UmF0ZSxcclxuICAgIGVnbGRFeFJhdGUsXHJcbiAgICB0b25FeFJhdGUsXHJcbiAgICB3YWxsZXROYW1lXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBbYmFsYW5jZV07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiWkVST19BRERSRVNTIiwid2ViM0JOVG9GbG9hdFN0cmluZyIsImdldEVSQzIwQ29udHJhY3QiLCJCaWdOdW1iZXIiLCJCTiIsInVzZVdlYjNSZWFjdCIsImF4aW9zIiwiR2V0VVNERXhjaGFuZ2VSYXRlIiwiR2V0RUdMREV4Y2hhbmdlUmF0ZSIsIkdldFRPTkV4Y2hhbmdlUmF0ZSIsInVzZUJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJkZWNpbWFscyIsImNoZWNrQWNjb3VudCIsInN5bWJvbCIsIndhbGxldE5hbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImV0aEV4UmF0ZSIsInNldEV0aEV4UmF0ZSIsImVnbGRFeFJhdGUiLCJzZXRFZ2xkRXhSYXRlIiwidG9uRXhSYXRlIiwic2V0VG9uRXhSYXRlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJ0aGVuIiwicmVzIiwicGFyc2VGbG9hdCIsImlzQ2FuY2VsbGVkIiwiZ2V0QmFsYW5jZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXRoIiwidmFsdWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb250cmFjdCIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiZ2V0RXRoQmFsYW5jZSIsImV0aEJsbmMiLCJwb3ciLCJkZWNpbWFsQmFsIiwiUk9VTkRfRE9XTiIsImNvbnZlcnRlZEJhbGFuY2UiLCJnZXRFbHJvbmRCYWwiLCJnZXQiLCJyZXNwb25zZSIsImVnbGRCYWwiLCJkYXRhIiwiZGVjaW1hbEJhbGFuY2UiLCJlcnIiLCJnZXRUb25CYWwiLCJ0b25CYWwiLCJyZXN1bHQiLCJnZXRTY3J0QmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});