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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, symbol) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      tonExRate = _useState4[0],\n      setTonExRate = _useState4[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res)); // console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setTonExRate(parseFloat(res)); // console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=\".concat(checkAccount)).then(function (response) {\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    if (symbol === \"ETH\") {\n      getEthBalance();\n    }\n\n    if (symbol === \"EGLD\") {\n      getElrondBal();\n    }\n\n    if (symbol === \"TON\") {\n      getTonBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, symbol, ethExRate, egldExRate, tonExRate]);\n  return [balance];\n}\n\n_s(useBalance, \"h3n9B4d+h/gPzgDSn6DAnQfBJTs=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0JBQU0yQyxnQkFBZ0IsR0FBR00sY0FBYyxHQUFHL0IsU0FBMUM7QUFDQUwsa0JBQUFBLFVBQVUsQ0FBQzhCLGdCQUFELENBQVY7QUFDRCxpQkFmRyxXQWdCRyxVQUFDTyxHQUFELEVBQVM7QUFDZGxCLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWlCLEdBQVo7QUFDQXJDLGtCQUFBQSxVQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0QsaUJBbkJHLENBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVHNDLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFzQkEsUUFBSXhDLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCMkIsTUFBQUEsYUFBYTtBQUNkOztBQUNELFFBQUkzQixNQUFNLEtBQUssTUFBZixFQUF3QjtBQUN0QmlDLE1BQUFBLFlBQVk7QUFDYjs7QUFDRCxRQUFJakMsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEJ3QyxNQUFBQSxTQUFTO0FBQ1Y7O0FBQ0QsV0FBTyxZQUFNO0FBQ1gxQixNQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNELEtBRkQ7QUFHRCxHQWhIUSxFQWdITixDQUNEakIsWUFEQyxFQUVEYSxPQUZDLEVBR0RaLFFBSEMsRUFJRFcsT0FKQyxFQUtEVixZQUxDLEVBTURDLE1BTkMsRUFPREcsU0FQQyxFQVFERSxVQVJDLEVBU0RFLFNBVEMsQ0FoSE0sQ0FBVDtBQTRIQSxTQUFPLENBQUNOLE9BQUQsQ0FBUDtBQUNEOztHQXhKdUJMO1VBVU9MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hY3Rpb25zL3VzZUJhbGFuY2UuanM/MjRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFpFUk9fQUREUkVTUywgd2ViM0JOVG9GbG9hdFN0cmluZyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRFUkMyMENvbnRyYWN0IH0gZnJvbSBcIi4uL3N0b3JlL2NvbnRyYWN0U3RvcmVcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBCTiBmcm9tIFwiYm4uanNcIjtcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdldFVTREV4Y2hhbmdlUmF0ZSxcclxuICBHZXRFR0xERXhjaGFuZ2VSYXRlLFxyXG4gIEdldFRPTkV4Y2hhbmdlUmF0ZSxcclxufSBmcm9tIFwiLi4vYXNzZXRzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmFsYW5jZShcclxuICB0b2tlbkFkZHJlc3MsXHJcbiAgZGVjaW1hbHMsXHJcbiAgY2hlY2tBY2NvdW50LFxyXG4gIHN5bWJvbFxyXG4pIHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXRoRXhSYXRlLCBzZXRFdGhFeFJhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZWdsZEV4UmF0ZSwgc2V0RWdsZEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b25FeFJhdGUsIHNldFRvbkV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBHZXRVU0RFeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RXRoRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidXNkXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICAgIEdldEVHTERFeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RWdsZEV4UmF0ZShwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV0aFwiLCBwYXJzZUZsb2F0KHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBHZXRUT05FeGNoYW5nZVJhdGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0VG9uRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIXRva2VuQWRkcmVzcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAodG9rZW5BZGRyZXNzID09PSBaRVJPX0FERFJFU1MpIHtcclxuICAgICAgICAgICAgbGlicmFyeS5ldGhcclxuICAgICAgICAgICAgICAuZ2V0QmFsYW5jZShjaGVja0FjY291bnQpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RVJDMjBDb250cmFjdChcclxuICAgICAgICAgICAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgbGlicmFyeSxcclxuICAgICAgICAgICAgICBjaGVja0FjY291bnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29udHJhY3Q/Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAuYmFsYW5jZU9mKGFjY291bnQpXHJcbiAgICAgICAgICAgICAgLmNhbGwoKVxyXG4gICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4odmFsdWUpKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRFdGhCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBldGhCbG5jID0gYXdhaXQgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbEJhbCA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICBldGhCbG5jLFxyXG4gICAgICAgICAgcG93LFxyXG4gICAgICAgICAgNCxcclxuICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbCAqIGV0aEV4UmF0ZTtcclxuICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RWxyb25kQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vZ2F0ZXdheS5lbHJvbmQuY29tL2FkZHJlc3MvJHtjaGVja0FjY291bnR9L2JhbGFuY2VgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWdsZEJhbCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIGVnbGRCYWwsXHJcbiAgICAgICAgICAgIHBvdyxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRCYWxhbmNlID0gZGVjaW1hbEJhbGFuY2UgKiBlZ2xkRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb25CYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcclxuICAgICAgICAgIGBodHRwczovL3RvbmNlbnRlci5jb20vYXBpL3YyL2dldEFkZHJlc3NCYWxhbmNlP2FkZHJlc3M9JHtjaGVja0FjY291bnR9YFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvbkJhbCA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIHRvbkJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIHRvbkV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHN5bWJvbCA9PT0gXCJFVEhcIikge1xyXG4gICAgICBnZXRFdGhCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIkVHTERcIiApIHtcclxuICAgICAgZ2V0RWxyb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3ltYm9sID09PSBcIlRPTlwiKSB7XHJcbiAgICAgIGdldFRvbkJhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9LCBbXHJcbiAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICBsaWJyYXJ5LFxyXG4gICAgZGVjaW1hbHMsXHJcbiAgICBhY2NvdW50LFxyXG4gICAgY2hlY2tBY2NvdW50LFxyXG4gICAgc3ltYm9sLFxyXG4gICAgZXRoRXhSYXRlLFxyXG4gICAgZWdsZEV4UmF0ZSxcclxuICAgIHRvbkV4UmF0ZSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIFtiYWxhbmNlXTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJaRVJPX0FERFJFU1MiLCJ3ZWIzQk5Ub0Zsb2F0U3RyaW5nIiwiZ2V0RVJDMjBDb250cmFjdCIsIkJpZ051bWJlciIsIkJOIiwidXNlV2ViM1JlYWN0IiwiYXhpb3MiLCJHZXRVU0RFeGNoYW5nZVJhdGUiLCJHZXRFR0xERXhjaGFuZ2VSYXRlIiwiR2V0VE9ORXhjaGFuZ2VSYXRlIiwidXNlQmFsYW5jZSIsInRva2VuQWRkcmVzcyIsImRlY2ltYWxzIiwiY2hlY2tBY2NvdW50Iiwic3ltYm9sIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJldGhFeFJhdGUiLCJzZXRFdGhFeFJhdGUiLCJlZ2xkRXhSYXRlIiwic2V0RWdsZEV4UmF0ZSIsInRvbkV4UmF0ZSIsInNldFRvbkV4UmF0ZSIsImFjY291bnQiLCJsaWJyYXJ5IiwidGhlbiIsInJlcyIsInBhcnNlRmxvYXQiLCJpc0NhbmNlbGxlZCIsImdldEJhbGFuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV0aCIsInZhbHVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29udHJhY3QiLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsImdldEV0aEJhbGFuY2UiLCJldGhCbG5jIiwicG93IiwiZGVjaW1hbEJhbCIsIlJPVU5EX0RPV04iLCJjb252ZXJ0ZWRCYWxhbmNlIiwiZ2V0RWxyb25kQmFsIiwiZ2V0IiwicmVzcG9uc2UiLCJlZ2xkQmFsIiwiZGF0YSIsImRlY2ltYWxCYWxhbmNlIiwiZXJyIiwiZ2V0VG9uQmFsIiwidG9uQmFsIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});