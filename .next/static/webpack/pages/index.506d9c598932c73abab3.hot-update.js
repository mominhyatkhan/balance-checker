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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, name) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res));\n      console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN); // console.log(\"eth value\", usdExRate);\n\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=Ef_mlXHnufWO3-vvopflR_NpIFMiidvp_xt20Qf8usMBBKzB\").then(function (response) {\n                  console.log(response);\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    if (name === \"Ethereum\") {\n      getEthBalance();\n    }\n\n    if (name === \"Elrond\") {\n      getElrondBal();\n    }\n\n    if (name === \"The Open Network\") {\n      getElrondBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, name, ethExRate, egldExRate]);\n  return [balance];\n}\n\n_s(useBalance, \"vNngFuGO2Kp/PJBSmLSkBYHQ+i0=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxHQUFHL0IsVUFBMUM7QUFDQUgsa0JBQUFBLFVBQVUsQ0FBQzRCLGdCQUFELENBQVY7QUFDRCxpQkFkRyxXQWVHLFVBQUNPLEdBQUQsRUFBUztBQUNkekIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZd0IsR0FBWjtBQUNBbkMsa0JBQUFBLFVBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxpQkFsQkcsQ0FEVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUb0MsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQXFCQSxRQUFJdEMsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDdkJ5QixNQUFBQSxhQUFhO0FBQ2Q7O0FBQ0QsUUFBSXpCLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCK0IsTUFBQUEsWUFBWTtBQUNiOztBQUNELFFBQUkvQixJQUFJLEtBQUssa0JBQWIsRUFBaUM7QUFDL0IrQixNQUFBQSxZQUFZO0FBQ2I7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hqQixNQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNELEtBRkQ7QUFHRCxHQWhIUSxFQWdITixDQUNEakIsWUFEQyxFQUVEVyxPQUZDLEVBR0RWLFFBSEMsRUFJRFMsT0FKQyxFQUtEUixZQUxDLEVBTURDLElBTkMsRUFPREcsU0FQQyxFQVFERSxVQVJDLENBaEhNLENBQVQ7QUEySEEsU0FBTyxDQUFDSixPQUFELENBQVA7QUFDRDs7R0E3SXVCTDtVQUlPSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWN0aW9ucy91c2VCYWxhbmNlLmpzPzI0ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBaRVJPX0FERFJFU1MsIHdlYjNCTlRvRmxvYXRTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgZ2V0RVJDMjBDb250cmFjdCB9IGZyb20gXCIuLi9zdG9yZS9jb250cmFjdFN0b3JlXCI7XHJcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xyXG5pbXBvcnQgQk4gZnJvbSBcImJuLmpzXCI7XHJcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBHZXRVU0RFeGNoYW5nZVJhdGUsXHJcbiAgR2V0RUdMREV4Y2hhbmdlUmF0ZSxcclxufSBmcm9tIFwiLi4vYXNzZXRzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmFsYW5jZSh0b2tlbkFkZHJlc3MsIGRlY2ltYWxzLCBjaGVja0FjY291bnQsIG5hbWUpIHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXRoRXhSYXRlLCBzZXRFdGhFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZWdsZEV4UmF0ZSwgc2V0RWdsZEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBHZXRVU0RFeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RXRoRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXNkXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICAgIEdldEVHTERFeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RWdsZEV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImV0aFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsaWJyYXJ5IHx8ICF0b2tlbkFkZHJlc3MpIHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHRva2VuQWRkcmVzcyA9PT0gWkVST19BRERSRVNTKSB7XHJcbiAgICAgICAgICAgIGxpYnJhcnkuZXRoXHJcbiAgICAgICAgICAgICAgLmdldEJhbGFuY2UoY2hlY2tBY2NvdW50KVxyXG4gICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4odmFsdWUpKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldEVSQzIwQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgdG9rZW5BZGRyZXNzLFxyXG4gICAgICAgICAgICAgIGxpYnJhcnksXHJcbiAgICAgICAgICAgICAgY2hlY2tBY2NvdW50XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0Py5tZXRob2RzXHJcbiAgICAgICAgICAgICAgLmJhbGFuY2VPZihhY2NvdW50KVxyXG4gICAgICAgICAgICAgIC5jYWxsKClcclxuICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RXRoQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZXRoQmxuYyA9IGF3YWl0IGdldEJhbGFuY2UoKTtcclxuICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xyXG4gICAgICAgIGNvbnN0IHBvdyA9IG5ldyBCaWdOdW1iZXIoXCIxMFwiKS5wb3cobmV3IEJpZ051bWJlcihkZWNpbWFscykpO1xyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxCYWwgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgZXRoQmxuYyxcclxuICAgICAgICAgIHBvdyxcclxuICAgICAgICAgIDQsXHJcbiAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJldGggdmFsdWVcIiwgdXNkRXhSYXRlKTtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbCAqIGV0aEV4UmF0ZTtcclxuICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RWxyb25kQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vZ2F0ZXdheS5lbHJvbmQuY29tL2FkZHJlc3MvJHtjaGVja0FjY291bnR9L2JhbGFuY2VgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWdsZEJhbCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIGVnbGRCYWwsXHJcbiAgICAgICAgICAgIHBvdyxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbGFuY2UgKiBlZ2xkRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb25CYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly90b25jZW50ZXIuY29tL2FwaS92Mi9nZXRBZGRyZXNzQmFsYW5jZT9hZGRyZXNzPUVmX21sWEhudWZXTzMtdnZvcGZsUl9OcElGTWlpZHZwX3h0MjBRZjh1c01CQkt6QmApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICBjb25zdCBlZ2xkQmFsID0gcmVzcG9uc2UuZGF0YS5kYXRhLmJhbGFuY2U7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgZWdsZEJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIGVnbGRFeFJhdGU7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmIChuYW1lID09PSBcIkV0aGVyZXVtXCIpIHtcclxuICAgICAgZ2V0RXRoQmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUgPT09IFwiRWxyb25kXCIpIHtcclxuICAgICAgZ2V0RWxyb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gXCJUaGUgT3BlbiBOZXR3b3JrXCIpIHtcclxuICAgICAgZ2V0RWxyb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gIH0sIFtcclxuICAgIHRva2VuQWRkcmVzcyxcclxuICAgIGxpYnJhcnksXHJcbiAgICBkZWNpbWFscyxcclxuICAgIGFjY291bnQsXHJcbiAgICBjaGVja0FjY291bnQsXHJcbiAgICBuYW1lLFxyXG4gICAgZXRoRXhSYXRlLFxyXG4gICAgZWdsZEV4UmF0ZSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIFtiYWxhbmNlXTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJaRVJPX0FERFJFU1MiLCJ3ZWIzQk5Ub0Zsb2F0U3RyaW5nIiwiZ2V0RVJDMjBDb250cmFjdCIsIkJpZ051bWJlciIsIkJOIiwidXNlV2ViM1JlYWN0IiwiYXhpb3MiLCJHZXRVU0RFeGNoYW5nZVJhdGUiLCJHZXRFR0xERXhjaGFuZ2VSYXRlIiwidXNlQmFsYW5jZSIsInRva2VuQWRkcmVzcyIsImRlY2ltYWxzIiwiY2hlY2tBY2NvdW50IiwibmFtZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZXRoRXhSYXRlIiwic2V0RXRoRXhSYXRlIiwiZWdsZEV4UmF0ZSIsInNldEVnbGRFeFJhdGUiLCJhY2NvdW50IiwibGlicmFyeSIsInRoZW4iLCJyZXMiLCJwYXJzZUZsb2F0IiwiY29uc29sZSIsImxvZyIsImlzQ2FuY2VsbGVkIiwiZ2V0QmFsYW5jZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXRoIiwidmFsdWUiLCJlcnJvciIsImNvbnRyYWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJnZXRFdGhCYWxhbmNlIiwiZXRoQmxuYyIsInBvdyIsImRlY2ltYWxCYWwiLCJST1VORF9ET1dOIiwiY29udmVydGVkQmFsYW5jZSIsImdldEVscm9uZEJhbCIsImdldCIsInJlc3BvbnNlIiwiZWdsZEJhbCIsImRhdGEiLCJkZWNpbWFsQmFsYW5jZSIsImVyciIsImdldFRvbkJhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});