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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./src/components/wallet/connectors.js\");\n/* harmony import */ var _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/token-list.json */ \"./src/assets/token-list.json\");\n/* harmony import */ var _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wallet-address.json */ \"./src/assets/wallet-address.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/useBalance */ \"./src/actions/useBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/momin/Balance-Checker/balance-checker/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[0]),\n      selectedToken = _useState[0],\n      setSelectedToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[0]),\n      selectedWallet = _useState2[0],\n      setSelectedWallet = _useState2[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      account = _useWeb3React.account;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"),\n      checkAccount = _useState3[0],\n      setCheckAccount = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setCheckAccount(selectedWallet.address);\n  }, [selectedWallet]);\n\n  var submitHandler = function submitHandler(e) {\n    e.preventDefault();\n  };\n\n  var _useBalance = (0,_actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default)(selectedToken.address, selectedToken.decimals, checkAccount, selectedToken.name),\n      _useBalance2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useBalance, 1),\n      balance = _useBalance2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"block\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          children: \"Wallet Balance Checker\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"input-box\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__.injected);\n          },\n          children: \"Connect to Wallet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"isNotValid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: [\"Your Wallet : \", account]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: \"No wallet is connected\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"isNotValid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select Validator Wallet Address :\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          onSubmit: submitHandler,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            onChange: function onChange(e) {\n              return setSelectedWallet(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[e.target.value]);\n            },\n            children: _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__.map(function (wallet, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                value: index,\n                children: wallet.name\n              }, wallet.address, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select the Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n          onChange: function onChange(e) {\n            return setSelectedToken(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[e.target.value]);\n          },\n          children: _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__.map(function (token, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              value: index,\n              children: token.name\n            }, token.address, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"Balance : $\".concat(balance)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n          children: balance ? \"Address matched\" : \"Try with different token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"IoY+AevF3BFiGIy6UiM+B2XRj94=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React, _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxnQkF0QkYsZUF1QkU7QUFBUSxrQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsbUJBQU9ULGdCQUFnQixDQUFDUCxvREFBUyxDQUFDZ0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBVixDQUF2QjtBQUFBLFdBQWxCO0FBQUEsb0JBQ0d2Qix3REFBQSxDQUFjLFVBQUMyQixLQUFELEVBQVFELEtBQVI7QUFBQSxnQ0FDYjtBQUFRLG1CQUFLLEVBQUVBLEtBQWY7QUFBQSx3QkFDR0MsS0FBSyxDQUFDUjtBQURULGVBQTJCUSxLQUFLLENBQUNiLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkYsZUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkYsZUErQkU7QUFBQSxpQ0FDRTtBQUFBLDJDQUFtQk0sT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQkYsZUFrQ0U7QUFBQSxvQkFFR0EsT0FBTyxHQUFHLGlCQUFILEdBQXVCO0FBRmpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERDs7R0FyRXVCZjtVQUlRUCw0REFVWk07OztLQWRJQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgaW5qZWN0ZWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy93YWxsZXQvY29ubmVjdG9yc1wiO1xuaW1wb3J0IFRva2VuTGlzdCBmcm9tIFwiLi4vYXNzZXRzL3Rva2VuLWxpc3QuanNvblwiO1xuaW1wb3J0IFdhbGxldHMgZnJvbSBcIi4uL2Fzc2V0cy93YWxsZXQtYWRkcmVzcy5qc29uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQmFsYW5jZSBmcm9tIFwiLi4vYWN0aW9ucy91c2VCYWxhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRva2VuLCBzZXRTZWxlY3RlZFRva2VuXSA9IHVzZVN0YXRlKFRva2VuTGlzdFswXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFdhbGxldCwgc2V0U2VsZWN0ZWRXYWxsZXRdID0gdXNlU3RhdGUoV2FsbGV0c1swXSk7XG5cbiAgY29uc3QgeyBhY3RpdmF0ZSwgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gIGNvbnN0IFtjaGVja0FjY291bnQsIHNldENoZWNrQWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENoZWNrQWNjb3VudChzZWxlY3RlZFdhbGxldC5hZGRyZXNzKTtcbiAgfSwgW3NlbGVjdGVkV2FsbGV0XSk7XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuICBjb25zdCBbYmFsYW5jZV0gPSB1c2VCYWxhbmNlKFxuICAgIHNlbGVjdGVkVG9rZW4uYWRkcmVzcyxcbiAgICBzZWxlY3RlZFRva2VuLmRlY2ltYWxzLFxuICAgIGNoZWNrQWNjb3VudCxcbiAgICBzZWxlY3RlZFRva2VuLm5hbWVcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+V2FsbGV0IEJhbGFuY2UgQ2hlY2tlcjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWN0aXZhdGUoaW5qZWN0ZWQpfT5Db25uZWN0IHRvIFdhbGxldDwvYnV0dG9uPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9e2FjY291bnQgPyBcImlzVmFsaWRcIiA6IFwiaXNOb3RWYWxpZFwifSAgLz5cbiAgICAgICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgICAgIDxpPllvdXIgV2FsbGV0IDoge2FjY291bnR9PC9pPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aT5ObyB3YWxsZXQgaXMgY29ubmVjdGVkPC9pPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT17YWNjb3VudCA/IFwiaXNWYWxpZFwiIDogXCJpc05vdFZhbGlkXCJ9IC8+XG4gICAgICAgICAgPGxhYmVsPlNlbGVjdCBWYWxpZGF0b3IgV2FsbGV0IEFkZHJlc3MgOjwvbGFiZWw+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkV2FsbGV0KFdhbGxldHNbZS50YXJnZXQudmFsdWVdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1dhbGxldHMubWFwKCh3YWxsZXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGtleT17d2FsbGV0LmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAge3dhbGxldC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWw+U2VsZWN0IHRoZSBUb2tlbjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkVG9rZW4oVG9rZW5MaXN0W2UudGFyZ2V0LnZhbHVlXSl9PlxuICAgICAgICAgICAge1Rva2VuTGlzdC5tYXAoKHRva2VuLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0ga2V5PXt0b2tlbi5hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICB7dG9rZW4ubmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aDI+e2BCYWxhbmNlIDogJCR7YmFsYW5jZX1gfTwvaDI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtiYWxhbmNlID8gXCJBZGRyZXNzIG1hdGNoZWRcIiA6IFwiVHJ5IHdpdGggZGlmZmVyZW50IHRva2VuXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVdlYjNSZWFjdCIsImluamVjdGVkIiwiVG9rZW5MaXN0IiwiV2FsbGV0cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQmFsYW5jZSIsIkhvbWUiLCJzZWxlY3RlZFRva2VuIiwic2V0U2VsZWN0ZWRUb2tlbiIsInNlbGVjdGVkV2FsbGV0Iiwic2V0U2VsZWN0ZWRXYWxsZXQiLCJhY3RpdmF0ZSIsImFjY291bnQiLCJjaGVja0FjY291bnQiLCJzZXRDaGVja0FjY291bnQiLCJhZGRyZXNzIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRlY2ltYWxzIiwibmFtZSIsImJhbGFuY2UiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIndhbGxldCIsImluZGV4IiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});