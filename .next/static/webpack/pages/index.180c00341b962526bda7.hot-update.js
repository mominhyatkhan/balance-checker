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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetUSDExchangeRate\": function() { return /* binding */ GetUSDExchangeRate; },\n/* harmony export */   \"GetETHExchangeRate\": function() { return /* binding */ GetETHExchangeRate; },\n/* harmony export */   \"GetEGLDExchangeRate\": function() { return /* binding */ GetEGLDExchangeRate; },\n/* harmony export */   \"GetTONExchangeRate\": function() { return /* binding */ GetTONExchangeRate; },\n/* harmony export */   \"GetSCRTExchangeRate\": function() { return /* binding */ GetSCRTExchangeRate; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar GetUSDExchangeRate = /*#__PURE__*/function () {\n  var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=ETH\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.USD;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function GetUSDExchangeRate() {\n    return _ref.apply(this, arguments);\n  };\n}();\n_c = GetUSDExchangeRate;\nvar GetETHExchangeRate = /*#__PURE__*/function () {\n  var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context2.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=USD\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.ETH;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function GetETHExchangeRate() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n_c2 = GetETHExchangeRate;\nvar GetEGLDExchangeRate = /*#__PURE__*/function () {\n  var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context3.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=EGLD\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.USD;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function GetEGLDExchangeRate() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n_c3 = GetEGLDExchangeRate;\nvar GetTONExchangeRate = /*#__PURE__*/function () {\n  var _ref4 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context4.abrupt(\"return\", fetch(\"https://api.coinbase.com/v2/exchange-rates?currency=TON\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.rates.USD;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function GetTONExchangeRate() {\n    return _ref4.apply(this, arguments);\n  };\n}();\n_c4 = GetTONExchangeRate;\nvar GetSCRTExchangeRate = /*#__PURE__*/function () {\n  var _ref5 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {\n    var requestOptions;\n    return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            requestOptions = {\n              method: \"GET\",\n              redirect: \"follow\"\n            };\n            return _context5.abrupt(\"return\", fetch(\"https://api.binance.com/api/v3/ticker/price?symbol=SCRTUSDT\", requestOptions).then(function (response) {\n              return response.json();\n            }).then(function (result) {\n              return result.data.data.c;\n            })[\"catch\"](function (error) {\n              return \"error\", error;\n            }));\n\n          case 2:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function GetSCRTExchangeRate() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n_c5 = GetSCRTExchangeRate;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"GetUSDExchangeRate\");\n$RefreshReg$(_c2, \"GetETHExchangeRate\");\n$RefreshReg$(_c3, \"GetEGLDExchangeRate\");\n$RefreshReg$(_c4, \"GetTONExchangeRate\");\n$RefreshReg$(_c5, \"GetSCRTExchangeRate\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFULEVBQWQ7QUFBQSxhQUpELEVBS0pGLElBTEksQ0FLQyxVQUFDRyxNQUFELEVBQVk7QUFDaEIscUJBQU9BLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCQyxHQUF6QjtBQUNELGFBUEksV0FRRSxVQUFDQyxLQUFELEVBQVc7QUFDaEIscUJBQU8sU0FBU0EsS0FBaEI7QUFDRCxhQVZJLENBRnlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCSSxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7TUFBTUE7QUFlTixJQUFNQyxtQkFBbUI7QUFBQSw0VUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JoQixZQUFBQSxjQUQ2QixHQUNaO0FBQUVDLGNBQUFBLE1BQU0sRUFBRSxLQUFWO0FBQWlCQyxjQUFBQSxRQUFRLEVBQUU7QUFBM0IsYUFEWTtBQUFBLDhDQUUxQkMsS0FBSyxDQUNWLDZEQURVLEVBRVZILGNBRlUsQ0FBTCxDQUlKSSxJQUpJLENBSUMsVUFBQ0MsUUFBRDtBQUFBLHFCQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLGFBSkQsRUFLSkYsSUFMSSxDQUtDLFVBQUNHLE1BQUQsRUFBWTtBQUNoQixxQkFBT0EsTUFBTSxDQUFDQyxJQUFQLENBQVlBLElBQVosQ0FBaUJTLENBQXhCO0FBQ0QsYUFQSSxXQVFFLFVBQUNOLEtBQUQsRUFBVztBQUNoQixxQkFBTyxTQUFTQSxLQUFoQjtBQUNELGFBVkksQ0FGMEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbkJLLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QjtNQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2FwaS5qcz9iOGJhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHZXRVU0RFeGNoYW5nZVJhdGUgPSBhc3luYyAoKSA9PiB7XG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiBcIkdFVFwiLCByZWRpcmVjdDogXCJmb2xsb3dcIiB9O1xuICByZXR1cm4gZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvZXhjaGFuZ2UtcmF0ZXM/Y3VycmVuY3k9RVRIXCIsXG4gICAgcmVxdWVzdE9wdGlvbnNcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yYXRlcy5VU0Q7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICByZXR1cm4gXCJlcnJvclwiLCBlcnJvcjtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBHZXRFVEhFeGNoYW5nZVJhdGUgPSBhc3luYyAoKSA9PiB7XG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiBcIkdFVFwiLCByZWRpcmVjdDogXCJmb2xsb3dcIiB9O1xuICByZXR1cm4gZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvZXhjaGFuZ2UtcmF0ZXM/Y3VycmVuY3k9VVNEXCIsXG4gICAgcmVxdWVzdE9wdGlvbnNcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yYXRlcy5FVEg7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICByZXR1cm4gXCJlcnJvclwiLCBlcnJvcjtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBHZXRFR0xERXhjaGFuZ2VSYXRlID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogXCJHRVRcIiwgcmVkaXJlY3Q6IFwiZm9sbG93XCIgfTtcbiAgcmV0dXJuIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL2V4Y2hhbmdlLXJhdGVzP2N1cnJlbmN5PUVHTERcIixcbiAgICByZXF1ZXN0T3B0aW9uc1xuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJhdGVzLlVTRDtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHJldHVybiBcImVycm9yXCIsIGVycm9yO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEdldFRPTkV4Y2hhbmdlUmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgdmFyIHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6IFwiR0VUXCIsIHJlZGlyZWN0OiBcImZvbGxvd1wiIH07XG4gIHJldHVybiBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9leGNoYW5nZS1yYXRlcz9jdXJyZW5jeT1UT05cIixcbiAgICByZXF1ZXN0T3B0aW9uc1xuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnJhdGVzLlVTRDtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHJldHVybiBcImVycm9yXCIsIGVycm9yO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEdldFNDUlRFeGNoYW5nZVJhdGUgPSBhc3luYyAoKSA9PiB7XG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiBcIkdFVFwiLCByZWRpcmVjdDogXCJmb2xsb3dcIiB9O1xuICByZXR1cm4gZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS5iaW5hbmNlLmNvbS9hcGkvdjMvdGlja2VyL3ByaWNlP3N5bWJvbD1TQ1JUVVNEVFwiLFxuICAgIHJlcXVlc3RPcHRpb25zXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZGF0YS5jO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIFwiZXJyb3JcIiwgZXJyb3I7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkdldFVTREV4Y2hhbmdlUmF0ZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwicmVkaXJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJkYXRhIiwicmF0ZXMiLCJVU0QiLCJlcnJvciIsIkdldEVUSEV4Y2hhbmdlUmF0ZSIsIkVUSCIsIkdldEVHTERFeGNoYW5nZVJhdGUiLCJHZXRUT05FeGNoYW5nZVJhdGUiLCJHZXRTQ1JURXhjaGFuZ2VSYXRlIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/api.js\n");

/***/ })

});