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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./src/components/wallet/connectors.js\");\n/* harmony import */ var _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/token-list.json */ \"./src/assets/token-list.json\");\n/* harmony import */ var _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wallet-address.json */ \"./src/assets/wallet-address.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/useBalance */ \"./src/actions/useBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/momin/Balance-Checker/balance-checker/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[0]),\n      selectedToken = _useState[0],\n      setSelectedToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[0]),\n      selectedWallet = _useState2[0],\n      setSelectedWallet = _useState2[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      account = _useWeb3React.account;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"),\n      checkAccount = _useState3[0],\n      setCheckAccount = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setCheckAccount(selectedWallet.address);\n  }, [selectedWallet]);\n\n  var submitHandler = function submitHandler(e) {\n    e.preventDefault();\n  };\n\n  var _useBalance = (0,_actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default)(selectedToken.address, selectedToken.decimals, checkAccount, selectedToken.name),\n      _useBalance2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useBalance, 1),\n      balance = _useBalance2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"block\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          children: \"Wallet Balance Checker\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"input-box\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__.injected);\n          },\n          children: \"Connect to Wallet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"isNotValid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: [\"Your Wallet : \", account]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: \"No Wallet is connected\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"isNotValid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select Validator Wallet Address :\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          onSubmit: submitHandler,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            onChange: function onChange(e) {\n              return setSelectedWallet(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[e.target.value]);\n            },\n            children: _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__.map(function (wallet, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                value: index,\n                children: wallet.name\n              }, wallet.address, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select the Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n          onChange: function onChange(e) {\n            return setSelectedToken(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[e.target.value]);\n          },\n          children: _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__.map(function (token, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              value: index,\n              children: token.name\n            }, token.address, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"Balance : $\".concat(balance)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n          className: balance ? \"isValid\" : \"isNotValid\",\n          children: balance ? \"Address matched\" : \"Try with different token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"IoY+AevF3BFiGIy6UiM+B2XRj94=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React, _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxnQkF0QkYsZUF1QkU7QUFBUSxrQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsbUJBQU9ULGdCQUFnQixDQUFDUCxvREFBUyxDQUFDZ0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBVixDQUF2QjtBQUFBLFdBQWxCO0FBQUEsb0JBQ0d2Qix3REFBQSxDQUFjLFVBQUMyQixLQUFELEVBQVFELEtBQVI7QUFBQSxnQ0FDYjtBQUFRLG1CQUFLLEVBQUVBLEtBQWY7QUFBQSx3QkFDR0MsS0FBSyxDQUFDUjtBQURULGVBQTJCUSxLQUFLLENBQUNiLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkYsZUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkYsZUErQkU7QUFBQSxpQ0FDRTtBQUFBLDJDQUFtQk0sT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQkYsZUFrQ0U7QUFDRSxtQkFBUyxFQUFFQSxPQUFPLEdBQUcsU0FBSCxHQUFlLFlBRG5DO0FBQUEsb0JBR0dBLE9BQU8sR0FBRyxpQkFBSCxHQUF1QjtBQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQ7O0dBdEV1QmY7VUFJUVAsNERBVVpNOzs7S0FkSUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2FsbGV0L2Nvbm5lY3RvcnNcIjtcbmltcG9ydCBUb2tlbkxpc3QgZnJvbSBcIi4uL2Fzc2V0cy90b2tlbi1saXN0Lmpzb25cIjtcbmltcG9ydCBXYWxsZXRzIGZyb20gXCIuLi9hc3NldHMvd2FsbGV0LWFkZHJlc3MuanNvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUJhbGFuY2UgZnJvbSBcIi4uL2FjdGlvbnMvdXNlQmFsYW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VsZWN0ZWRUb2tlbiwgc2V0U2VsZWN0ZWRUb2tlbl0gPSB1c2VTdGF0ZShUb2tlbkxpc3RbMF0pO1xuICBjb25zdCBbc2VsZWN0ZWRXYWxsZXQsIHNldFNlbGVjdGVkV2FsbGV0XSA9IHVzZVN0YXRlKFdhbGxldHNbMF0pO1xuXG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCBbY2hlY2tBY2NvdW50LCBzZXRDaGVja0FjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDaGVja0FjY291bnQoc2VsZWN0ZWRXYWxsZXQuYWRkcmVzcyk7XG4gIH0sIFtzZWxlY3RlZFdhbGxldF0pO1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcbiAgY29uc3QgW2JhbGFuY2VdID0gdXNlQmFsYW5jZShcbiAgICBzZWxlY3RlZFRva2VuLmFkZHJlc3MsXG4gICAgc2VsZWN0ZWRUb2tlbi5kZWNpbWFscyxcbiAgICBjaGVja0FjY291bnQsXG4gICAgc2VsZWN0ZWRUb2tlbi5uYW1lXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPldhbGxldCBCYWxhbmNlIENoZWNrZXI8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFjdGl2YXRlKGluamVjdGVkKX0+Q29ubmVjdCB0byBXYWxsZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXthY2NvdW50ID8gXCJpc1ZhbGlkXCIgOiBcImlzTm90VmFsaWRcIn0gIC8+XG4gICAgICAgICAge2FjY291bnQgPyAoXG4gICAgICAgICAgICA8aT5Zb3VyIFdhbGxldCA6IHthY2NvdW50fTwvaT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGk+Tm8gV2FsbGV0IGlzIGNvbm5lY3RlZDwvaT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxociBjbGFzc05hbWU9e2FjY291bnQgPyBcImlzVmFsaWRcIiA6IFwiaXNOb3RWYWxpZFwifSAvPlxuICAgICAgICAgIDxsYWJlbD5TZWxlY3QgVmFsaWRhdG9yIFdhbGxldCBBZGRyZXNzIDo8L2xhYmVsPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFdhbGxldChXYWxsZXRzW2UudGFyZ2V0LnZhbHVlXSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtXYWxsZXRzLm1hcCgod2FsbGV0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBrZXk9e3dhbGxldC5hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgIHt3YWxsZXQubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsPlNlbGVjdCB0aGUgVG9rZW48L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFRva2VuKFRva2VuTGlzdFtlLnRhcmdldC52YWx1ZV0pfT5cbiAgICAgICAgICAgIHtUb2tlbkxpc3QubWFwKCh0b2tlbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGtleT17dG9rZW4uYWRkcmVzc30+XG4gICAgICAgICAgICAgICAge3Rva2VuLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGgyPntgQmFsYW5jZSA6ICQke2JhbGFuY2V9YH08L2gyPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YmFsYW5jZSA/IFwiaXNWYWxpZFwiIDogXCJpc05vdFZhbGlkXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2JhbGFuY2UgPyBcIkFkZHJlc3MgbWF0Y2hlZFwiIDogXCJUcnkgd2l0aCBkaWZmZXJlbnQgdG9rZW5cIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlV2ViM1JlYWN0IiwiaW5qZWN0ZWQiLCJUb2tlbkxpc3QiLCJXYWxsZXRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VCYWxhbmNlIiwiSG9tZSIsInNlbGVjdGVkVG9rZW4iLCJzZXRTZWxlY3RlZFRva2VuIiwic2VsZWN0ZWRXYWxsZXQiLCJzZXRTZWxlY3RlZFdhbGxldCIsImFjdGl2YXRlIiwiYWNjb3VudCIsImNoZWNrQWNjb3VudCIsInNldENoZWNrQWNjb3VudCIsImFkZHJlc3MiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGVjaW1hbHMiLCJuYW1lIiwiYmFsYW5jZSIsImNvbnRhaW5lciIsInRhcmdldCIsInZhbHVlIiwibWFwIiwid2FsbGV0IiwiaW5kZXgiLCJ0b2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});