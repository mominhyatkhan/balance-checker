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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./src/components/wallet/connectors.js\");\n/* harmony import */ var _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/token-list.json */ \"./src/assets/token-list.json\");\n/* harmony import */ var _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wallet-address.json */ \"./src/assets/wallet-address.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/useBalance */ \"./src/actions/useBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/momin/Balance-Checker/balance-checker/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[0]),\n      selectedToken = _useState[0],\n      setSelectedToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[0]),\n      selectedWallet = _useState2[0],\n      setSelectedWallet = _useState2[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      account = _useWeb3React.account;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"),\n      checkAccount = _useState3[0],\n      setCheckAccount = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setCheckAccount(selectedWallet.address);\n  }, [selectedWallet]);\n\n  var submitHandler = function submitHandler(e) {\n    e.preventDefault();\n  };\n\n  var _useBalance = (0,_actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default)(selectedToken.address, selectedToken.decimals, checkAccount, selectedToken.name),\n      _useBalance2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useBalance, 1),\n      balance = _useBalance2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"block\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          children: \"Wallet Balance Checker\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"input-box\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_2__.injected);\n          },\n          children: \"Connect to Wallet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          color: \"green\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: [\"Your Wallet : \", account]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n          children: \"No wallet is connected\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {\n          className: account ? \"isValid\" : \"is\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select Validator Wallet Address :\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          onSubmit: submitHandler,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            onChange: function onChange(e) {\n              return setSelectedWallet(_assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__[e.target.value]);\n            },\n            children: _assets_wallet_address_json__WEBPACK_IMPORTED_MODULE_4__.map(function (wallet, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                value: index,\n                children: wallet.name\n              }, wallet.address, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \"Select the Token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n          onChange: function onChange(e) {\n            return setSelectedToken(_assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__[e.target.value]);\n          },\n          children: _assets_token_list_json__WEBPACK_IMPORTED_MODULE_3__.map(function (token, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              value: index,\n              children: token.name\n            }, token.address, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"Balance : $\".concat(balance)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n          style: balance ? {\n            color: \"rgb(57, 107, 0)\"\n          } : {\n            color: \"red\"\n          },\n          children: balance ? \"Address matched\" : \"Try with different token\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"IoY+AevF3BFiGIy6UiM+B2XRj94=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React, _actions_useBalance__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsa0JBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLG1CQUFPVCxnQkFBZ0IsQ0FBQ1Asb0RBQVMsQ0FBQ2dCLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQVYsQ0FBdkI7QUFBQSxXQUFsQjtBQUFBLG9CQUNHdkIsd0RBQUEsQ0FBYyxVQUFDMkIsS0FBRCxFQUFRRCxLQUFSO0FBQUEsZ0NBQ2I7QUFBUSxtQkFBSyxFQUFFQSxLQUFmO0FBQUEsd0JBQ0dDLEtBQUssQ0FBQ1I7QUFEVCxlQUEyQlEsS0FBSyxDQUFDYixPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJGLGVBK0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0JGLGVBZ0NFO0FBQUEsaUNBQ0U7QUFBQSwyQ0FBbUJNLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENGLGVBbUNFO0FBQ0UsZUFBSyxFQUFFQSxPQUFPLEdBQUc7QUFBRVEsWUFBQUEsS0FBSyxFQUFFO0FBQVQsV0FBSCxHQUFrQztBQUFFQSxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQURsRDtBQUFBLG9CQUdHUixPQUFPLEdBQUcsaUJBQUgsR0FBdUI7QUFIakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztHQXZFdUJmO1VBSVFQLDREQVVaTTs7O0tBZElDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3dhbGxldC9jb25uZWN0b3JzXCI7XG5pbXBvcnQgVG9rZW5MaXN0IGZyb20gXCIuLi9hc3NldHMvdG9rZW4tbGlzdC5qc29uXCI7XG5pbXBvcnQgV2FsbGV0cyBmcm9tIFwiLi4vYXNzZXRzL3dhbGxldC1hZGRyZXNzLmpzb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VCYWxhbmNlIGZyb20gXCIuLi9hY3Rpb25zL3VzZUJhbGFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkVG9rZW4sIHNldFNlbGVjdGVkVG9rZW5dID0gdXNlU3RhdGUoVG9rZW5MaXN0WzBdKTtcbiAgY29uc3QgW3NlbGVjdGVkV2FsbGV0LCBzZXRTZWxlY3RlZFdhbGxldF0gPSB1c2VTdGF0ZShXYWxsZXRzWzBdKTtcblxuICBjb25zdCB7IGFjdGl2YXRlLCBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgY29uc3QgW2NoZWNrQWNjb3VudCwgc2V0Q2hlY2tBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2hlY2tBY2NvdW50KHNlbGVjdGVkV2FsbGV0LmFkZHJlc3MpO1xuICB9LCBbc2VsZWN0ZWRXYWxsZXRdKTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG4gIGNvbnN0IFtiYWxhbmNlXSA9IHVzZUJhbGFuY2UoXG4gICAgc2VsZWN0ZWRUb2tlbi5hZGRyZXNzLFxuICAgIHNlbGVjdGVkVG9rZW4uZGVjaW1hbHMsXG4gICAgY2hlY2tBY2NvdW50LFxuICAgIHNlbGVjdGVkVG9rZW4ubmFtZVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5XYWxsZXQgQmFsYW5jZSBDaGVja2VyPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhY3RpdmF0ZShpbmplY3RlZCl9PkNvbm5lY3QgdG8gV2FsbGV0PC9idXR0b24+XG4gICAgICAgICAgPGhyIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICAgICAgPGk+WW91ciBXYWxsZXQgOiB7YWNjb3VudH08L2k+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpPk5vIHdhbGxldCBpcyBjb25uZWN0ZWQ8L2k+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXthY2NvdW50ID8gXCJpc1ZhbGlkXCIgOiBcImlzXCJ9IC8+XG4gICAgICAgICAgey8qIDxiciAvPiAqL31cbiAgICAgICAgICA8bGFiZWw+U2VsZWN0IFZhbGlkYXRvciBXYWxsZXQgQWRkcmVzcyA6PC9sYWJlbD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRXYWxsZXQoV2FsbGV0c1tlLnRhcmdldC52YWx1ZV0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7V2FsbGV0cy5tYXAoKHdhbGxldCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0ga2V5PXt3YWxsZXQuYWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICB7d2FsbGV0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsYWJlbD5TZWxlY3QgdGhlIFRva2VuPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRUb2tlbihUb2tlbkxpc3RbZS50YXJnZXQudmFsdWVdKX0+XG4gICAgICAgICAgICB7VG9rZW5MaXN0Lm1hcCgodG9rZW4sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBrZXk9e3Rva2VuLmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgIHt0b2tlbi5uYW1lfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxoMj57YEJhbGFuY2UgOiAkJHtiYWxhbmNlfWB9PC9oMj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17YmFsYW5jZSA/IHsgY29sb3I6IFwicmdiKDU3LCAxMDcsIDApXCIgfSA6IHsgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YmFsYW5jZSA/IFwiQWRkcmVzcyBtYXRjaGVkXCIgOiBcIlRyeSB3aXRoIGRpZmZlcmVudCB0b2tlblwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VXZWIzUmVhY3QiLCJpbmplY3RlZCIsIlRva2VuTGlzdCIsIldhbGxldHMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUJhbGFuY2UiLCJIb21lIiwic2VsZWN0ZWRUb2tlbiIsInNldFNlbGVjdGVkVG9rZW4iLCJzZWxlY3RlZFdhbGxldCIsInNldFNlbGVjdGVkV2FsbGV0IiwiYWN0aXZhdGUiLCJhY2NvdW50IiwiY2hlY2tBY2NvdW50Iiwic2V0Q2hlY2tBY2NvdW50IiwiYWRkcmVzcyIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkZWNpbWFscyIsIm5hbWUiLCJiYWxhbmNlIiwiY29udGFpbmVyIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ3YWxsZXQiLCJpbmRleCIsInRva2VuIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});