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

/***/ "./src/assets/api.js":
/*!***************************!*\
  !*** ./src/assets/api.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetUSDExchangeRate\": function() { return /* binding */ GetUSDExchangeRate; },\n/* harmony export */   \"GetETHExchangeRate\": function() { return /* binding */ GetETHExchangeRate; },\n/* harmony export */   \"GetEGLDExchangeRate\": function() { return /* binding */ GetEGLDExchangeRate; },\n/* harmony export */   \"GetExchangeRate\": function() { return /* binding */ GetExchangeRate; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar GetUSDExchangeRate = /*#__PURE__*/function () {\n  var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=ETH\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.USD;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function GetUSDExchangeRate() {\n    return _ref.apply(this, arguments);\n  };\n}();\n_c = GetUSDExchangeRate;\nvar GetETHExchangeRate = /*#__PURE__*/function () {\n  var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context2.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=USD\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.ETH;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function GetETHExchangeRate() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n_c2 = GetETHExchangeRate;\nvar GetEGLDExchangeRate = /*#__PURE__*/function () {\n  var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context3.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=EGLD\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.USD;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function GetEGLDExchangeRate() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n_c3 = GetEGLDExchangeRate;\nvar GetExchangeRate = /*#__PURE__*/function () {\n  var _ref4 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context4.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=EGLD\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.USD;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function GetExchangeRate() {\n    return _ref4.apply(this, arguments);\n  };\n}();\n_c4 = GetExchangeRate;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"GetUSDExchangeRate\");\n$RefreshReg$(_c2, \"GetETHExchangeRate\");\n$RefreshReg$(_c3, \"GetEGLDExchangeRate\");\n$RefreshReg$(_c4, \"GetExchangeRate\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFULEVBQWQ7QUFBQSxhQUpELEVBS0pGLElBTEksQ0FLQyxVQUFDRyxNQUFELEVBQVk7QUFDaEIscUJBQU9BLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCQyxHQUF6QjtBQUNELGFBUEksV0FRRSxVQUFDQyxLQUFELEVBQVc7QUFDaEIscUJBQU8sU0FBU0EsS0FBaEI7QUFDRCxhQVZJLENBRnNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZJLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7TUFBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9hcGkuanM/YjhiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR2V0VVNERXhjaGFuZ2VSYXRlID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogXCJHRVRcIiwgcmVkaXJlY3Q6IFwiZm9sbG93XCIgfTtcbiAgcmV0dXJuIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL2V4Y2hhbmdlLXJhdGVzP2N1cnJlbmN5PUVUSFwiLFxuICAgIHJlcXVlc3RPcHRpb25zXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmF0ZXMuVVNEO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIFwiZXJyb3JcIiwgZXJyb3I7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgR2V0RVRIRXhjaGFuZ2VSYXRlID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogXCJHRVRcIiwgcmVkaXJlY3Q6IFwiZm9sbG93XCIgfTtcbiAgcmV0dXJuIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL2V4Y2hhbmdlLXJhdGVzP2N1cnJlbmN5PVVTRFwiLFxuICAgIHJlcXVlc3RPcHRpb25zXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmF0ZXMuRVRIO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIFwiZXJyb3JcIiwgZXJyb3I7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgR2V0RUdMREV4Y2hhbmdlUmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgdmFyIHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6IFwiR0VUXCIsIHJlZGlyZWN0OiBcImZvbGxvd1wiIH07XG4gIHJldHVybiBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9leGNoYW5nZS1yYXRlcz9jdXJyZW5jeT1FR0xEXCIsXG4gICAgcmVxdWVzdE9wdGlvbnNcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yYXRlcy5VU0Q7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICByZXR1cm4gXCJlcnJvclwiLCBlcnJvcjtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBHZXRFeGNoYW5nZVJhdGUgPSBhc3luYyAoKSA9PiB7XG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiBcIkdFVFwiLCByZWRpcmVjdDogXCJmb2xsb3dcIiB9O1xuICByZXR1cm4gZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvZXhjaGFuZ2UtcmF0ZXM/Y3VycmVuY3k9RUdMRFwiLFxuICAgIHJlcXVlc3RPcHRpb25zXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmF0ZXMuVVNEO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIFwiZXJyb3JcIiwgZXJyb3I7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkdldFVTREV4Y2hhbmdlUmF0ZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwicmVkaXJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJkYXRhIiwicmF0ZXMiLCJVU0QiLCJlcnJvciIsIkdldEVUSEV4Y2hhbmdlUmF0ZSIsIkVUSCIsIkdldEVHTERFeGNoYW5nZVJhdGUiLCJHZXRFeGNoYW5nZVJhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/api.js\n");

/***/ })

});