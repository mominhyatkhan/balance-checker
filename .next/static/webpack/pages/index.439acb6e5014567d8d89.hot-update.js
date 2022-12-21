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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, name) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res));\n      console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN); // console.log(\"eth value\", usdExRate);\n\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=Ef_mlXHnufWO3-vvopflR_NpIFMiidvp_xt20Qf8usMBBKzB\").then(function (response) {\n                  console.log(response);\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    if (name === \"Ethereum\") {\n      getEthBalance();\n    }\n\n    if (name === \"Elrond\") {\n      getElrondBal();\n    }\n\n    if (name === \"The Open Network\") {\n      getTondBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, name, ethExRate, egldExRate]);\n  return [balance];\n}\n\n_s(useBalance, \"vNngFuGO2Kp/PJBSmLSkBYHQ+i0=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy91c2VCYWxhbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNZLFVBQVQsQ0FBb0JDLFlBQXBCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsWUFBNUMsRUFBMERDLElBQTFELEVBQWdFO0FBQUE7O0FBQzdFLGtCQUE4QmhCLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9pQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFrQ2xCLCtDQUFRLEVBQTFDO0FBQUEsTUFBT21CLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQW9DcEIsK0NBQVEsRUFBNUM7QUFBQSxNQUFPcUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxzQkFBNkJmLDhEQUFZLEVBQXpDO0FBQUEsTUFBUWdCLE9BQVIsaUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsT0FBakIsaUJBQWlCQSxPQUFqQjs7QUFFQXZCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSwrREFBa0IsR0FBR2dCLElBQXJCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ04sTUFBQUEsWUFBWSxDQUFDTyxVQUFVLENBQUNELEdBQUQsQ0FBWCxDQUFaO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLFVBQVUsQ0FBQ0QsR0FBRCxDQUE3QjtBQUNELEtBSEQ7QUFJQWhCLElBQUFBLGdFQUFtQixHQUFHZSxJQUF0QixDQUEyQixVQUFDQyxHQUFELEVBQVM7QUFDbENKLE1BQUFBLGFBQWEsQ0FBQ0ssVUFBVSxDQUFDRCxHQUFELENBQVgsQ0FBYjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixVQUFVLENBQUNELEdBQUQsQ0FBN0I7QUFDRCxLQUhEO0FBSUFmLElBQUFBLCtEQUFrQixHQUFHYyxJQUFyQixDQUEwQixVQUFDQyxHQUFELEVBQVM7QUFDakNKLE1BQUFBLGFBQWEsQ0FBQ0ssVUFBVSxDQUFDRCxHQUFELENBQVgsQ0FBYjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixVQUFVLENBQUNELEdBQUQsQ0FBN0I7QUFDRCxLQUhEO0FBSUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBekIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTZCLFdBQVcsR0FBRyxLQUFsQjs7QUFFQSxhQUFTQyxVQUFULEdBQXNCO0FBQ3BCLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixZQUFJLENBQUNULE9BQUQsSUFBWSxDQUFDWCxZQUFqQixFQUErQjtBQUM3Qm9CLFVBQUFBLE9BQU8sQ0FBQyxJQUFJM0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQsWUFBSTtBQUNGLGNBQUlPLFlBQVksS0FBS1gsZ0RBQXJCLEVBQW1DO0FBQ2pDc0IsWUFBQUEsT0FBTyxDQUFDVSxHQUFSLENBQ0dILFVBREgsQ0FDY2hCLFlBRGQsRUFFR1UsSUFGSCxDQUVRLFVBQUNVLEtBQUQsRUFBVztBQUNmRixjQUFBQSxPQUFPLENBQUMsSUFBSTNCLDhDQUFKLENBQU82QixLQUFQLENBQUQsQ0FBUDtBQUNELGFBSkgsV0FLUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJSLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0FILGNBQUFBLE9BQU8sQ0FBQyxJQUFJM0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNELGFBUkg7QUFTRCxXQVZELE1BVU87QUFDTCxnQkFBTStCLFFBQVEsR0FBR2pDLHNFQUFnQixDQUMvQlMsWUFEK0IsRUFFL0JXLE9BRitCLEVBRy9CVCxZQUgrQixDQUFqQztBQUtBc0IsWUFBQUEsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVDLE9BQVYsQ0FDR0MsU0FESCxDQUNhaEIsT0FEYixFQUVHaUIsSUFGSCxHQUdHZixJQUhILENBR1EsVUFBQ1UsS0FBRCxFQUFXO0FBQ2ZGLGNBQUFBLE9BQU8sQ0FBQyxJQUFJM0IsOENBQUosQ0FBTzZCLEtBQVAsQ0FBRCxDQUFQO0FBQ0QsYUFMSCxXQU1TLFVBQUNDLEtBQUQsRUFBVztBQUNoQlIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQUgsY0FBQUEsT0FBTyxDQUFDLElBQUkzQiw4Q0FBSixDQUFPLEdBQVAsQ0FBRCxDQUFQO0FBQ0QsYUFUSDtBQVVEO0FBQ0YsU0E1QkQsQ0E0QkUsT0FBTzhCLEtBQVAsRUFBYztBQUNkSCxVQUFBQSxPQUFPLENBQUMsSUFBSTNCLDhDQUFKLENBQU8sR0FBUCxDQUFELENBQVA7QUFDRDtBQUNGLE9BckNNLENBQVA7QUFzQ0Q7O0FBRUQsUUFBTW1DLGFBQWE7QUFBQSwrVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNFVixVQUFVLEVBRFo7O0FBQUE7QUFDZFcsZ0JBQUFBLE9BRGM7O0FBRXBCLG9CQUFJLENBQUNaLFdBQUwsRUFBa0I7QUFDVmEsa0JBQUFBLEdBRFUsR0FDSixJQUFJdEMsaURBQUosQ0FBYyxJQUFkLEVBQW9Cc0MsR0FBcEIsQ0FBd0IsSUFBSXRDLGlEQUFKLENBQWNTLFFBQWQsQ0FBeEIsQ0FESTtBQUVWOEIsa0JBQUFBLFVBRlUsR0FFR3pDLDJEQUFtQixDQUNwQ3VDLE9BRG9DLEVBRXBDQyxHQUZvQyxFQUdwQyxDQUhvQyxFQUlwQ3RDLDREQUpvQyxDQUZ0QixFQVFoQjs7QUFDTXlDLGtCQUFBQSxnQkFUVSxHQVNTRixVQUFVLEdBQUd6QixTQVR0QjtBQVVoQkQsa0JBQUFBLFVBQVUsQ0FBQzRCLGdCQUFELENBQVY7QUFDRDs7QUFibUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBYkwsYUFBYTtBQUFBO0FBQUE7QUFBQSxPQUFuQjs7QUFlQSxRQUFNTSxZQUFZO0FBQUEsZ1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2J2Qyw4Q0FBQSw4Q0FDdUNPLFlBRHZDLGVBRUhVLElBRkcsQ0FFRSxVQUFDd0IsUUFBRCxFQUFjO0FBQ2xCLHNCQUFNQyxPQUFPLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUFkLENBQW1CbEMsT0FBbkM7QUFDQSxzQkFBTTBCLEdBQUcsR0FBRyxJQUFJdEMsaURBQUosQ0FBYyxJQUFkLEVBQW9Cc0MsR0FBcEIsQ0FBd0IsSUFBSXRDLGlEQUFKLENBQWNTLFFBQWQsQ0FBeEIsQ0FBWjtBQUNBLHNCQUFNc0MsY0FBYyxHQUFHakQsMkRBQW1CLENBQ3hDK0MsT0FEd0MsRUFFeENQLEdBRndDLEVBR3hDLENBSHdDLEVBSXhDdEMsNERBSndDLENBQTFDO0FBTUEsc0JBQU15QyxnQkFBZ0IsR0FBR00sY0FBYyxHQUFHL0IsVUFBMUM7QUFDQUgsa0JBQUFBLFVBQVUsQ0FBQzRCLGdCQUFELENBQVY7QUFDRCxpQkFiRyxXQWNHLFVBQUNPLEdBQUQsRUFBUztBQUNkekIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZd0IsR0FBWjtBQUNBbkMsa0JBQUFBLFVBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxpQkFqQkcsQ0FEYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaNkIsWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFsQjs7QUFvQkEsUUFBTU8sU0FBUztBQUFBLGdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNWOUMsOENBQUEsNEdBRUhpQixJQUZHLENBRUUsVUFBQ3dCLFFBQUQsRUFBYztBQUNsQnJCLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9CLFFBQVo7QUFDQSxzQkFBTU0sTUFBTSxHQUFHTixRQUFRLENBQUNFLElBQVQsQ0FBY0ssTUFBN0I7QUFDQSxzQkFBTWIsR0FBRyxHQUFHLElBQUl0QyxpREFBSixDQUFjLElBQWQsRUFBb0JzQyxHQUFwQixDQUF3QixJQUFJdEMsaURBQUosQ0FBY1MsUUFBZCxDQUF4QixDQUFaO0FBQ0Esc0JBQU1zQyxjQUFjLEdBQUdqRCwyREFBbUIsQ0FDeENvRCxNQUR3QyxFQUV4Q1osR0FGd0MsRUFHeEMsQ0FId0MsRUFJeEN0Qyw0REFKd0MsQ0FBMUM7QUFNQSxzQkFBTXlDLGdCQUFnQixHQUFHTSxjQUFjLEdBQUcvQixVQUExQztBQUNBSCxrQkFBQUEsVUFBVSxDQUFDNEIsZ0JBQUQsQ0FBVjtBQUNELGlCQWRHLFdBZUcsVUFBQ08sR0FBRCxFQUFTO0FBQ2R6QixrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl3QixHQUFaO0FBQ0FuQyxrQkFBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVjtBQUNELGlCQWxCRyxDQURVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRvQyxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBcUJBLFFBQUl0QyxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUN2QnlCLE1BQUFBLGFBQWE7QUFDZDs7QUFDRCxRQUFJekIsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckIrQixNQUFBQSxZQUFZO0FBQ2I7O0FBQ0QsUUFBSS9CLElBQUksS0FBSyxrQkFBYixFQUFpQztBQUMvQnlDLE1BQUFBLFVBQVU7QUFDWDs7QUFDRCxXQUFPLFlBQU07QUFDWDNCLE1BQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0QsS0FGRDtBQUdELEdBaEhRLEVBZ0hOLENBQ0RqQixZQURDLEVBRURXLE9BRkMsRUFHRFYsUUFIQyxFQUlEUyxPQUpDLEVBS0RSLFlBTEMsRUFNREMsSUFOQyxFQU9ERyxTQVBDLEVBUURFLFVBUkMsQ0FoSE0sQ0FBVDtBQTJIQSxTQUFPLENBQUNKLE9BQUQsQ0FBUDtBQUNEOztHQWpKdUJMO1VBSU9MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hY3Rpb25zL3VzZUJhbGFuY2UuanM/MjRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFpFUk9fQUREUkVTUywgd2ViM0JOVG9GbG9hdFN0cmluZyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRFUkMyMENvbnRyYWN0IH0gZnJvbSBcIi4uL3N0b3JlL2NvbnRyYWN0U3RvcmVcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBCTiBmcm9tIFwiYm4uanNcIjtcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdldFVTREV4Y2hhbmdlUmF0ZSxcclxuICBHZXRFR0xERXhjaGFuZ2VSYXRlLFxyXG4gIEdldFRPTkV4Y2hhbmdlUmF0ZVxyXG59IGZyb20gXCIuLi9hc3NldHMvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYWxhbmNlKHRva2VuQWRkcmVzcywgZGVjaW1hbHMsIGNoZWNrQWNjb3VudCwgbmFtZSkge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtldGhFeFJhdGUsIHNldEV0aEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlZ2xkRXhSYXRlLCBzZXRFZ2xkRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEdldFVTREV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFdGhFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2RcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0RUdMREV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFZ2xkRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICAgIEdldFRPTkV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFZ2xkRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIXRva2VuQWRkcmVzcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAodG9rZW5BZGRyZXNzID09PSBaRVJPX0FERFJFU1MpIHtcclxuICAgICAgICAgICAgbGlicmFyeS5ldGhcclxuICAgICAgICAgICAgICAuZ2V0QmFsYW5jZShjaGVja0FjY291bnQpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RVJDMjBDb250cmFjdChcclxuICAgICAgICAgICAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgbGlicmFyeSxcclxuICAgICAgICAgICAgICBjaGVja0FjY291bnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29udHJhY3Q/Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAuYmFsYW5jZU9mKGFjY291bnQpXHJcbiAgICAgICAgICAgICAgLmNhbGwoKVxyXG4gICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4odmFsdWUpKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEJOKFwiMFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRFdGhCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBldGhCbG5jID0gYXdhaXQgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbEJhbCA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICBldGhCbG5jLFxyXG4gICAgICAgICAgcG93LFxyXG4gICAgICAgICAgNCxcclxuICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV0aCB2YWx1ZVwiLCB1c2RFeFJhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsICogZXRoRXhSYXRlO1xyXG4gICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRFbHJvbmRCYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9nYXRld2F5LmVscm9uZC5jb20vYWRkcmVzcy8ke2NoZWNrQWNjb3VudH0vYmFsYW5jZWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlZ2xkQmFsID0gcmVzcG9uc2UuZGF0YS5kYXRhLmJhbGFuY2U7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgZWdsZEJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIGVnbGRFeFJhdGU7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRvbkJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL3RvbmNlbnRlci5jb20vYXBpL3YyL2dldEFkZHJlc3NCYWxhbmNlP2FkZHJlc3M9RWZfbWxYSG51ZldPMy12dm9wZmxSX05wSUZNaWlkdnBfeHQyMFFmOHVzTUJCS3pCYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIGNvbnN0IHRvbkJhbCA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgcG93ID0gbmV3IEJpZ051bWJlcihcIjEwXCIpLnBvdyhuZXcgQmlnTnVtYmVyKGRlY2ltYWxzKSk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsQmFsYW5jZSA9IHdlYjNCTlRvRmxvYXRTdHJpbmcoXHJcbiAgICAgICAgICAgIHRvbkJhbCxcclxuICAgICAgICAgICAgcG93LFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuUk9VTkRfRE9XTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEJhbGFuY2UgPSBkZWNpbWFsQmFsYW5jZSAqIGVnbGRFeFJhdGU7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKGNvbnZlcnRlZEJhbGFuY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRCYWxhbmNlKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmIChuYW1lID09PSBcIkV0aGVyZXVtXCIpIHtcclxuICAgICAgZ2V0RXRoQmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUgPT09IFwiRWxyb25kXCIpIHtcclxuICAgICAgZ2V0RWxyb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gXCJUaGUgT3BlbiBOZXR3b3JrXCIpIHtcclxuICAgICAgZ2V0VG9uZEJhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9LCBbXHJcbiAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICBsaWJyYXJ5LFxyXG4gICAgZGVjaW1hbHMsXHJcbiAgICBhY2NvdW50LFxyXG4gICAgY2hlY2tBY2NvdW50LFxyXG4gICAgbmFtZSxcclxuICAgIGV0aEV4UmF0ZSxcclxuICAgIGVnbGRFeFJhdGUsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBbYmFsYW5jZV07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiWkVST19BRERSRVNTIiwid2ViM0JOVG9GbG9hdFN0cmluZyIsImdldEVSQzIwQ29udHJhY3QiLCJCaWdOdW1iZXIiLCJCTiIsInVzZVdlYjNSZWFjdCIsImF4aW9zIiwiR2V0VVNERXhjaGFuZ2VSYXRlIiwiR2V0RUdMREV4Y2hhbmdlUmF0ZSIsIkdldFRPTkV4Y2hhbmdlUmF0ZSIsInVzZUJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJkZWNpbWFscyIsImNoZWNrQWNjb3VudCIsIm5hbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImV0aEV4UmF0ZSIsInNldEV0aEV4UmF0ZSIsImVnbGRFeFJhdGUiLCJzZXRFZ2xkRXhSYXRlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJ0aGVuIiwicmVzIiwicGFyc2VGbG9hdCIsImNvbnNvbGUiLCJsb2ciLCJpc0NhbmNlbGxlZCIsImdldEJhbGFuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV0aCIsInZhbHVlIiwiZXJyb3IiLCJjb250cmFjdCIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiZ2V0RXRoQmFsYW5jZSIsImV0aEJsbmMiLCJwb3ciLCJkZWNpbWFsQmFsIiwiUk9VTkRfRE9XTiIsImNvbnZlcnRlZEJhbGFuY2UiLCJnZXRFbHJvbmRCYWwiLCJnZXQiLCJyZXNwb25zZSIsImVnbGRCYWwiLCJkYXRhIiwiZGVjaW1hbEJhbGFuY2UiLCJlcnIiLCJnZXRUb25CYWwiLCJ0b25CYWwiLCJyZXN1bHQiLCJnZXRUb25kQmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});