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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, symbol, walletName) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      tonExRate = _useState4[0],\n      setTonExRate = _useState4[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res)); // console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setTonExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    var getScrtBal = /*#__PURE__*/function () {\n      var _ref4 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://proxy.atomscan.com/secret-lcd/cosmos/bank/v1beta1/balances/\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function getScrtBal() {\n        return _ref4.apply(this, arguments);\n      };\n    }();\n\n    if (symbol === \"ETH\") {\n      getEthBalance();\n    }\n\n    if (symbol === \"EGLD\") {\n      getElrondBal();\n    }\n\n    if (symbol === \"TON\") {\n      getTonBal();\n    }\n\n    if (symbol === \"TON\") {\n      getTonBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, symbol, ethExRate, egldExRate, tonExRate, walletName]);\n  return [balance];\n}\n\n_s(useBalance, \"h3n9B4d+h/gPzgDSn6DAnQfBJTs=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUg7O0FBQUEsc0JBQVZ5QyxVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQXNCQSxRQUFJNUMsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEI0QixNQUFBQSxhQUFhO0FBQ2Q7O0FBQ0QsUUFBSTVCLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCa0MsTUFBQUEsWUFBWTtBQUNiOztBQUNELFFBQUlsQyxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQnlDLE1BQUFBLFNBQVM7QUFDVjs7QUFDRCxRQUFJekMsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEJ5QyxNQUFBQSxTQUFTO0FBQ1Y7O0FBQ0QsV0FBTyxZQUFNO0FBQ1gxQixNQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNELEtBRkQ7QUFHRCxHQXpJUSxFQXlJTixDQUNEbEIsWUFEQyxFQUVEYyxPQUZDLEVBR0RiLFFBSEMsRUFJRFksT0FKQyxFQUtEWCxZQUxDLEVBTURDLE1BTkMsRUFPREksU0FQQyxFQVFERSxVQVJDLEVBU0RFLFNBVEMsRUFVRFAsVUFWQyxDQXpJTSxDQUFUO0FBc0pBLFNBQU8sQ0FBQ0MsT0FBRCxDQUFQO0FBQ0Q7O0dBbkx1Qk47VUFXT0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvdXNlQmFsYW5jZS5qcz8yNGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgWkVST19BRERSRVNTLCB3ZWIzQk5Ub0Zsb2F0U3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldEVSQzIwQ29udHJhY3QgfSBmcm9tIFwiLi4vc3RvcmUvY29udHJhY3RTdG9yZVwiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEJOIGZyb20gXCJibi5qc1wiO1xyXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgR2V0VVNERXhjaGFuZ2VSYXRlLFxyXG4gIEdldEVHTERFeGNoYW5nZVJhdGUsXHJcbiAgR2V0VE9ORXhjaGFuZ2VSYXRlLFxyXG59IGZyb20gXCIuLi9hc3NldHMvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYWxhbmNlKFxyXG4gIHRva2VuQWRkcmVzcyxcclxuICBkZWNpbWFscyxcclxuICBjaGVja0FjY291bnQsXHJcbiAgc3ltYm9sLFxyXG4gIHdhbGxldE5hbWVcclxuKSB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2V0aEV4UmF0ZSwgc2V0RXRoRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2VnbGRFeFJhdGUsIHNldEVnbGRFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdG9uRXhSYXRlLCBzZXRUb25FeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgR2V0VVNERXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEV0aEV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInVzZFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBHZXRFR0xERXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEVnbGRFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0VE9ORXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFRvbkV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV0aFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsaWJyYXJ5IHx8ICF0b2tlbkFkZHJlc3MpIHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHRva2VuQWRkcmVzcyA9PT0gWkVST19BRERSRVNTKSB7XHJcbiAgICAgICAgICAgIGxpYnJhcnkuZXRoXHJcbiAgICAgICAgICAgICAgLmdldEJhbGFuY2UoY2hlY2tBY2NvdW50KVxyXG4gICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4odmFsdWUpKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldEVSQzIwQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgdG9rZW5BZGRyZXNzLFxyXG4gICAgICAgICAgICAgIGxpYnJhcnksXHJcbiAgICAgICAgICAgICAgY2hlY2tBY2NvdW50XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0Py5tZXRob2RzXHJcbiAgICAgICAgICAgICAgLmJhbGFuY2VPZihhY2NvdW50KVxyXG4gICAgICAgICAgICAgIC5jYWxsKClcclxuICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RXRoQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZXRoQmxuYyA9IGF3YWl0IGdldEJhbGFuY2UoKTtcclxuICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xyXG4gICAgICAgIGNvbnN0IHBvdyA9IG5ldyBCaWdOdW1iZXIoXCIxMFwiKS5wb3cobmV3IEJpZ051bWJlcihkZWNpbWFscykpO1xyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxCYWwgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgZXRoQmxuYyxcclxuICAgICAgICAgIHBvdyxcclxuICAgICAgICAgIDQsXHJcbiAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWwgKiBldGhFeFJhdGU7XHJcbiAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEVscm9uZEJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2dhdGV3YXkuZWxyb25kLmNvbS9hZGRyZXNzLyR7Y2hlY2tBY2NvdW50fS9iYWxhbmNlYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVnbGRCYWwgPSByZXNwb25zZS5kYXRhLmRhdGEuYmFsYW5jZTtcclxuICAgICAgICAgIGNvbnN0IHBvdyA9IG5ldyBCaWdOdW1iZXIoXCIxMFwiKS5wb3cobmV3IEJpZ051bWJlcihkZWNpbWFscykpO1xyXG4gICAgICAgICAgY29uc3QgZGVjaW1hbEJhbGFuY2UgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgICBlZ2xkQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogZWdsZEV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VG9uQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly90b25jZW50ZXIuY29tL2FwaS92Mi9nZXRBZGRyZXNzQmFsYW5jZT9hZGRyZXNzPSR7Y2hlY2tBY2NvdW50fWBcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b25CYWwgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcclxuICAgICAgICAgIGNvbnN0IHBvdyA9IG5ldyBCaWdOdW1iZXIoXCIxMFwiKS5wb3cobmV3IEJpZ051bWJlcihkZWNpbWFscykpO1xyXG4gICAgICAgICAgY29uc3QgZGVjaW1hbEJhbGFuY2UgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgICB0b25CYWwsXHJcbiAgICAgICAgICAgIHBvdyxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbGFuY2UgKiB0b25FeFJhdGU7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFNjcnRCYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcclxuICAgICAgICAgIGBodHRwczovL3Byb3h5LmF0b21zY2FuLmNvbS9zZWNyZXQtbGNkL2Nvc21vcy9iYW5rL3YxYmV0YTEvYmFsYW5jZXMvJHtjaGVja0FjY291bnR9YFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvbkJhbCA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIHRvbkJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIHRvbkV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHN5bWJvbCA9PT0gXCJFVEhcIikge1xyXG4gICAgICBnZXRFdGhCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIkVHTERcIikge1xyXG4gICAgICBnZXRFbHJvbmRCYWwoKTtcclxuICAgIH1cclxuICAgIGlmIChzeW1ib2wgPT09IFwiVE9OXCIpIHtcclxuICAgICAgZ2V0VG9uQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIlRPTlwiKSB7XHJcbiAgICAgIGdldFRvbkJhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9LCBbXHJcbiAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICBsaWJyYXJ5LFxyXG4gICAgZGVjaW1hbHMsXHJcbiAgICBhY2NvdW50LFxyXG4gICAgY2hlY2tBY2NvdW50LFxyXG4gICAgc3ltYm9sLFxyXG4gICAgZXRoRXhSYXRlLFxyXG4gICAgZWdsZEV4UmF0ZSxcclxuICAgIHRvbkV4UmF0ZSxcclxuICAgIHdhbGxldE5hbWVcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIFtiYWxhbmNlXTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJaRVJPX0FERFJFU1MiLCJ3ZWIzQk5Ub0Zsb2F0U3RyaW5nIiwiZ2V0RVJDMjBDb250cmFjdCIsIkJpZ051bWJlciIsIkJOIiwidXNlV2ViM1JlYWN0IiwiYXhpb3MiLCJHZXRVU0RFeGNoYW5nZVJhdGUiLCJHZXRFR0xERXhjaGFuZ2VSYXRlIiwiR2V0VE9ORXhjaGFuZ2VSYXRlIiwidXNlQmFsYW5jZSIsInRva2VuQWRkcmVzcyIsImRlY2ltYWxzIiwiY2hlY2tBY2NvdW50Iiwic3ltYm9sIiwid2FsbGV0TmFtZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZXRoRXhSYXRlIiwic2V0RXRoRXhSYXRlIiwiZWdsZEV4UmF0ZSIsInNldEVnbGRFeFJhdGUiLCJ0b25FeFJhdGUiLCJzZXRUb25FeFJhdGUiLCJhY2NvdW50IiwibGlicmFyeSIsInRoZW4iLCJyZXMiLCJwYXJzZUZsb2F0IiwiaXNDYW5jZWxsZWQiLCJnZXRCYWxhbmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJldGgiLCJ2YWx1ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbnRyYWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJnZXRFdGhCYWxhbmNlIiwiZXRoQmxuYyIsInBvdyIsImRlY2ltYWxCYWwiLCJST1VORF9ET1dOIiwiY29udmVydGVkQmFsYW5jZSIsImdldEVscm9uZEJhbCIsImdldCIsInJlc3BvbnNlIiwiZWdsZEJhbCIsImRhdGEiLCJkZWNpbWFsQmFsYW5jZSIsImVyciIsImdldFRvbkJhbCIsInRvbkJhbCIsInJlc3VsdCIsImdldFNjcnRCYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});