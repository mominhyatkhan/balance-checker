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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, name) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res));\n      console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n    GetExchangeRate().then(function (res) {\n      setEgldExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN); // console.log(\"eth value\", usdExRate);\n\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=Ef_mlXHnufWO3-vvopflR_NpIFMiidvp_xt20Qf8usMBBKzB\").then(function (response) {\n                  console.log(response);\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    if (name === \"Ethereum\") {\n      getEthBalance();\n    }\n\n    if (name === \"Elrond\") {\n      getElrondBal();\n    }\n\n    if (name === \"The Open Network\") {\n      getTondBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, name, ethExRate, egldExRate]);\n  return [balance];\n}\n\n_s(useBalance, \"vNngFuGO2Kp/PJBSmLSkBYHQ+i0=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQXBCLENBQXdCLElBQUl2QyxpREFBSixDQUFjUyxRQUFkLENBQXhCLENBQVo7QUFDQSxzQkFBTXVDLGNBQWMsR0FBR2xELDJEQUFtQixDQUN4Q3FELE1BRHdDLEVBRXhDWixHQUZ3QyxFQUd4QyxDQUh3QyxFQUl4Q3ZDLDREQUp3QyxDQUExQztBQU1BLHNCQUFNMEMsZ0JBQWdCLEdBQUdNLGNBQWMsR0FBR2hDLFVBQTFDO0FBQ0FILGtCQUFBQSxVQUFVLENBQUM2QixnQkFBRCxDQUFWO0FBQ0QsaUJBZEcsV0FlRyxVQUFDTyxHQUFELEVBQVM7QUFDZDFCLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXlCLEdBQVo7QUFDQXBDLGtCQUFBQSxVQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0QsaUJBbEJHLENBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVHFDLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFxQkEsUUFBSXZDLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3ZCMEIsTUFBQUEsYUFBYTtBQUNkOztBQUNELFFBQUkxQixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQmdDLE1BQUFBLFlBQVk7QUFDYjs7QUFDRCxRQUFJaEMsSUFBSSxLQUFLLGtCQUFiLEVBQWlDO0FBQy9CMEMsTUFBQUEsVUFBVTtBQUNYOztBQUNELFdBQU8sWUFBTTtBQUNYM0IsTUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDRCxLQUZEO0FBR0QsR0FoSFEsRUFnSE4sQ0FDRGxCLFlBREMsRUFFRFcsT0FGQyxFQUdEVixRQUhDLEVBSURTLE9BSkMsRUFLRFIsWUFMQyxFQU1EQyxJQU5DLEVBT0RHLFNBUEMsRUFRREUsVUFSQyxDQWhITSxDQUFUO0FBMkhBLFNBQU8sQ0FBQ0osT0FBRCxDQUFQO0FBQ0Q7O0dBakp1Qkw7VUFJT0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvdXNlQmFsYW5jZS5qcz8yNGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgWkVST19BRERSRVNTLCB3ZWIzQk5Ub0Zsb2F0U3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldEVSQzIwQ29udHJhY3QgfSBmcm9tIFwiLi4vc3RvcmUvY29udHJhY3RTdG9yZVwiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEJOIGZyb20gXCJibi5qc1wiO1xyXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgR2V0VVNERXhjaGFuZ2VSYXRlLFxyXG4gIEdldEVHTERFeGNoYW5nZVJhdGUsXHJcbiAgR2V0VE9ORXhjaGFuZ2VSYXRlXHJcbn0gZnJvbSBcIi4uL2Fzc2V0cy9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhbGFuY2UodG9rZW5BZGRyZXNzLCBkZWNpbWFscywgY2hlY2tBY2NvdW50LCBuYW1lKSB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2V0aEV4UmF0ZSwgc2V0RXRoRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2VnbGRFeFJhdGUsIHNldEVnbGRFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgR2V0VVNERXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEV0aEV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVzZFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBHZXRFR0xERXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEVnbGRFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0RXhjaGFuZ2VSYXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEVnbGRFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGlmICghbGlicmFyeSB8fCAhdG9rZW5BZGRyZXNzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICh0b2tlbkFkZHJlc3MgPT09IFpFUk9fQUREUkVTUykge1xyXG4gICAgICAgICAgICBsaWJyYXJ5LmV0aFxyXG4gICAgICAgICAgICAgIC5nZXRCYWxhbmNlKGNoZWNrQWNjb3VudClcclxuICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRFUkMyMENvbnRyYWN0KFxyXG4gICAgICAgICAgICAgIHRva2VuQWRkcmVzcyxcclxuICAgICAgICAgICAgICBsaWJyYXJ5LFxyXG4gICAgICAgICAgICAgIGNoZWNrQWNjb3VudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb250cmFjdD8ubWV0aG9kc1xyXG4gICAgICAgICAgICAgIC5iYWxhbmNlT2YoYWNjb3VudClcclxuICAgICAgICAgICAgICAuY2FsbCgpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEV0aEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV0aEJsbmMgPSBhd2FpdCBnZXRCYWxhbmNlKCk7XHJcbiAgICAgIGlmICghaXNDYW5jZWxsZWQpIHtcclxuICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICBjb25zdCBkZWNpbWFsQmFsID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgIGV0aEJsbmMsXHJcbiAgICAgICAgICBwb3csXHJcbiAgICAgICAgICA0LFxyXG4gICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXRoIHZhbHVlXCIsIHVzZEV4UmF0ZSk7XHJcbiAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWwgKiBldGhFeFJhdGU7XHJcbiAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEVscm9uZEJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2dhdGV3YXkuZWxyb25kLmNvbS9hZGRyZXNzLyR7Y2hlY2tBY2NvdW50fS9iYWxhbmNlYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVnbGRCYWwgPSByZXNwb25zZS5kYXRhLmRhdGEuYmFsYW5jZTtcclxuICAgICAgICAgIGNvbnN0IHBvdyA9IG5ldyBCaWdOdW1iZXIoXCIxMFwiKS5wb3cobmV3IEJpZ051bWJlcihkZWNpbWFscykpO1xyXG4gICAgICAgICAgY29uc3QgZGVjaW1hbEJhbGFuY2UgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgICBlZ2xkQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogZWdsZEV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VG9uQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vdG9uY2VudGVyLmNvbS9hcGkvdjIvZ2V0QWRkcmVzc0JhbGFuY2U/YWRkcmVzcz1FZl9tbFhIbnVmV08zLXZ2b3BmbFJfTnBJRk1paWR2cF94dDIwUWY4dXNNQkJLekJgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgY29uc3QgdG9uQmFsID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgdG9uQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogZWdsZEV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKG5hbWUgPT09IFwiRXRoZXJldW1cIikge1xyXG4gICAgICBnZXRFdGhCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gXCJFbHJvbmRcIikge1xyXG4gICAgICBnZXRFbHJvbmRCYWwoKTtcclxuICAgIH1cclxuICAgIGlmIChuYW1lID09PSBcIlRoZSBPcGVuIE5ldHdvcmtcIikge1xyXG4gICAgICBnZXRUb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gIH0sIFtcclxuICAgIHRva2VuQWRkcmVzcyxcclxuICAgIGxpYnJhcnksXHJcbiAgICBkZWNpbWFscyxcclxuICAgIGFjY291bnQsXHJcbiAgICBjaGVja0FjY291bnQsXHJcbiAgICBuYW1lLFxyXG4gICAgZXRoRXhSYXRlLFxyXG4gICAgZWdsZEV4UmF0ZSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIFtiYWxhbmNlXTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJaRVJPX0FERFJFU1MiLCJ3ZWIzQk5Ub0Zsb2F0U3RyaW5nIiwiZ2V0RVJDMjBDb250cmFjdCIsIkJpZ051bWJlciIsIkJOIiwidXNlV2ViM1JlYWN0IiwiYXhpb3MiLCJHZXRVU0RFeGNoYW5nZVJhdGUiLCJHZXRFR0xERXhjaGFuZ2VSYXRlIiwiR2V0VE9ORXhjaGFuZ2VSYXRlIiwidXNlQmFsYW5jZSIsInRva2VuQWRkcmVzcyIsImRlY2ltYWxzIiwiY2hlY2tBY2NvdW50IiwibmFtZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZXRoRXhSYXRlIiwic2V0RXRoRXhSYXRlIiwiZWdsZEV4UmF0ZSIsInNldEVnbGRFeFJhdGUiLCJhY2NvdW50IiwibGlicmFyeSIsInRoZW4iLCJyZXMiLCJwYXJzZUZsb2F0IiwiY29uc29sZSIsImxvZyIsIkdldEV4Y2hhbmdlUmF0ZSIsImlzQ2FuY2VsbGVkIiwiZ2V0QmFsYW5jZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXRoIiwidmFsdWUiLCJlcnJvciIsImNvbnRyYWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJnZXRFdGhCYWxhbmNlIiwiZXRoQmxuYyIsInBvdyIsImRlY2ltYWxCYWwiLCJST1VORF9ET1dOIiwiY29udmVydGVkQmFsYW5jZSIsImdldEVscm9uZEJhbCIsImdldCIsInJlc3BvbnNlIiwiZWdsZEJhbCIsImRhdGEiLCJkZWNpbWFsQmFsYW5jZSIsImVyciIsImdldFRvbkJhbCIsInRvbkJhbCIsInJlc3VsdCIsImdldFRvbmRCYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});