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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./src/components/wallet/connectors.js\");\n/* harmony import */ var _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/token-list.json */ \"./src/assets/token-list.json\");\n/* harmony import */ var _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wallet-address.json */ \"./src/assets/wallet-address.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/useBalance */ \"./src/actions/useBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/momin/Balance-Checker/balance-checker/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[1]),\n      selectedToken = _useState[0],\n      setSelectedToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[0]),\n      selectedWallet = _useState2[0],\n      setSelectedWallet = _useState2[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      account = _useWeb3React.account;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"),\n      checkAccount = _useState3[0],\n      setCheckAccount = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setCheckAccount(selectedWallet.address);\n  }, [selectedWallet]);\n\n  var submitHandler = function submitHandler(e) {\n    e.preventDefault();\n  };\n\n  var _useBalance = (0,_actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default)(selectedToken.address, selectedToken.decimals, checkAccount, selectedToken.symbol, selectedWallet.name),\n      _useBalance2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useBalance, 1),\n      balance = _useBalance2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"block\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          children: \"Wallet Balance Checker\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"input-box\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__.injected);\n          },\n          children: \"Connect to Wallet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"isNotValid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: [\"Your Wallet :\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n            className: account ? \"isValid\" : \"isNotValid\",\n            children: account\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          className: account ? \"isValid\" : \"isNotValid\",\n          children: \"No Wallet is connected\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"isNotValid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select Validator Wallet Address :\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          onSubmit: submitHandler,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            onChange: function onChange(e) {\n              return setSelectedWallet(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[e.target.value]);\n            },\n            children: _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__.map(function (wallet, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                value: index,\n                children: wallet.name\n              }, wallet.address, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select the Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n          onChange: function onChange(e) {\n            return setSelectedToken(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[e.target.value]);\n          },\n          children: _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__.map(function (token, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              value: index,\n              selected: true,\n              children: token.name\n            }, token.address, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"Balance : $\".concat(balance)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n          className: balance ? \"isValid\" : \"isNotValid\",\n          children: balance ? \"Address matched.\" : \"Please select the correct token.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"vVwKYmJZxDu9xZH+IItpGiSiIHg=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React, _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2FsbGV0L2Nvbm5lY3RvcnNcIjtcbmltcG9ydCBUb2tlbkxpc3QgZnJvbSBcIi4uL2Fzc2V0cy90b2tlbi1saXN0Lmpzb25cIjtcbmltcG9ydCBXYWxsZXRzIGZyb20gXCIuLi9hc3NldHMvd2FsbGV0LWFkZHJlc3MuanNvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUJhbGFuY2UgZnJvbSBcIi4uL2FjdGlvbnMvdXNlQmFsYW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VsZWN0ZWRUb2tlbiwgc2V0U2VsZWN0ZWRUb2tlbl0gPSB1c2VTdGF0ZShUb2tlbkxpc3RbMV0pO1xuICBjb25zdCBbc2VsZWN0ZWRXYWxsZXQsIHNldFNlbGVjdGVkV2FsbGV0XSA9IHVzZVN0YXRlKFdhbGxldHNbMF0pO1xuXG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCBbY2hlY2tBY2NvdW50LCBzZXRDaGVja0FjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDaGVja0FjY291bnQoc2VsZWN0ZWRXYWxsZXQuYWRkcmVzcyk7XG4gIH0sIFtzZWxlY3RlZFdhbGxldF0pO1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcbiAgY29uc3QgW2JhbGFuY2VdID0gdXNlQmFsYW5jZShcbiAgICBzZWxlY3RlZFRva2VuLmFkZHJlc3MsXG4gICAgc2VsZWN0ZWRUb2tlbi5kZWNpbWFscyxcbiAgICBjaGVja0FjY291bnQsXG4gICAgc2VsZWN0ZWRUb2tlbi5zeW1ib2wsXG4gICAgc2VsZWN0ZWRXYWxsZXQubmFtZVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5XYWxsZXQgQmFsYW5jZSBDaGVja2VyPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhY3RpdmF0ZShpbmplY3RlZCl9PkNvbm5lY3QgdG8gV2FsbGV0PC9idXR0b24+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT17YWNjb3VudCA/IFwiaXNWYWxpZFwiIDogXCJpc05vdFZhbGlkXCJ9IC8+XG4gICAgICAgICAge2FjY291bnQgPyAoXG4gICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgWW91ciBXYWxsZXQgOntcIiBcIn1cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXthY2NvdW50ID8gXCJpc1ZhbGlkXCIgOiBcImlzTm90VmFsaWRcIn0+e2FjY291bnR9PC9pPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2FjY291bnQgPyBcImlzVmFsaWRcIiA6IFwiaXNOb3RWYWxpZFwifT5cbiAgICAgICAgICAgICAgTm8gV2FsbGV0IGlzIGNvbm5lY3RlZFxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT17YWNjb3VudCA/IFwiaXNWYWxpZFwiIDogXCJpc05vdFZhbGlkXCJ9IC8+XG4gICAgICAgICAgPGxhYmVsPlNlbGVjdCBWYWxpZGF0b3IgV2FsbGV0IEFkZHJlc3MgOjwvbGFiZWw+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkV2FsbGV0KFdhbGxldHNbZS50YXJnZXQudmFsdWVdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1dhbGxldHMubWFwKCh3YWxsZXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGtleT17d2FsbGV0LmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAge3dhbGxldC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWw+U2VsZWN0IHRoZSBUb2tlbjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkVG9rZW4oVG9rZW5MaXN0W2UudGFyZ2V0LnZhbHVlXSl9PlxuICAgICAgICAgICAge1Rva2VuTGlzdC5tYXAoKHRva2VuLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0ga2V5PXt0b2tlbi5hZGRyZXNzfSBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgICB7dG9rZW4ubmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aDI+e2BCYWxhbmNlIDogJCR7YmFsYW5jZX1gfTwvaDI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2JhbGFuY2UgPyBcImlzVmFsaWRcIiA6IFwiaXNOb3RWYWxpZFwifT5cbiAgICAgICAgICAgIHtiYWxhbmNlID8gXCJBZGRyZXNzIG1hdGNoZWQuXCIgOiBcIlBsZWFzZSBzZWxlY3QgdGhlIGNvcnJlY3QgdG9rZW4uXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVdlYjNSZWFjdCIsImluamVjdGVkIiwiVG9rZW5MaXN0IiwiV2FsbGV0cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQmFsYW5jZSIsIkhvbWUiLCJzZWxlY3RlZFRva2VuIiwic2V0U2VsZWN0ZWRUb2tlbiIsInNlbGVjdGVkV2FsbGV0Iiwic2V0U2VsZWN0ZWRXYWxsZXQiLCJhY3RpdmF0ZSIsImFjY291bnQiLCJjaGVja0FjY291bnQiLCJzZXRDaGVja0FjY291bnQiLCJhZGRyZXNzIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRlY2ltYWxzIiwic3ltYm9sIiwibmFtZSIsImJhbGFuY2UiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIndhbGxldCIsImluZGV4IiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});