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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBalance; }\n/* harmony export */ });\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store_contractStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/contractStore */ \"./src/store/contractStore.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ \"./node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/api */ \"./src/assets/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction useBalance(tokenAddress, decimals, checkAccount, name) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      ethExRate = _useState2[0],\n      setEthExRate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      egldExRate = _useState3[0],\n      setEgldExRate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      tonExRate = _useState4[0],\n      setTonExRate = _useState4[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      account = _useWeb3React.account,\n      library = _useWeb3React.library;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetUSDExchangeRate)().then(function (res) {\n      setEthExRate(parseFloat(res));\n      console.log(\"usd\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetEGLDExchangeRate)().then(function (res) {\n      setEgldExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n    (0,_assets_api__WEBPACK_IMPORTED_MODULE_8__.GetTONExchangeRate)().then(function (res) {\n      setTonExRate(parseFloat(res));\n      console.log(\"eth\", parseFloat(res));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var isCancelled = false;\n\n    function getBalance() {\n      return new Promise(function (resolve) {\n        if (!library || !tokenAddress) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n          return;\n        }\n\n        try {\n          if (tokenAddress === _utils__WEBPACK_IMPORTED_MODULE_3__.ZERO_ADDRESS) {\n            library.eth.getBalance(checkAccount).then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          } else {\n            var contract = (0,_store_contractStore__WEBPACK_IMPORTED_MODULE_4__.getERC20Contract)(tokenAddress, library, checkAccount);\n            contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call().then(function (value) {\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(value));\n            })[\"catch\"](function (error) {\n              console.log(error);\n              resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n            });\n          }\n        } catch (error) {\n          resolve(new (bn_js__WEBPACK_IMPORTED_MODULE_6___default())(\"0\"));\n        }\n      });\n    }\n\n    var getEthBalance = /*#__PURE__*/function () {\n      var _ref = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ethBlnc, pow, decimalBal, convertedBalance;\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getBalance();\n\n              case 2:\n                ethBlnc = _context.sent;\n\n                if (!isCancelled) {\n                  pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  decimalBal = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(ethBlnc, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN); // console.log(\"eth value\", usdExRate);\n\n                  convertedBalance = decimalBal * ethExRate;\n                  setBalance(convertedBalance);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getEthBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getElrondBal = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://gateway.elrond.com/address/\".concat(checkAccount, \"/balance\")).then(function (response) {\n                  var egldBal = response.data.data.balance;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(egldBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * egldExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getElrondBal() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var getTonBal = /*#__PURE__*/function () {\n      var _ref3 = (0,_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n        return _home_momin_Balance_Checker_balance_checker_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_9__.default.get(\"https://toncenter.com/api/v2/getAddressBalance?address=\".concat(checkAccount)).then(function (response) {\n                  console.log(response);\n                  var tonBal = response.data.result;\n                  var pow = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(\"10\").pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default(decimals));\n                  var decimalBalance = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.web3BNToFloatString)(tonBal, pow, 4, bignumber_js__WEBPACK_IMPORTED_MODULE_5__.default.ROUND_DOWN);\n                  var convertedBalance = decimalBalance * tonExRate;\n                  setBalance(convertedBalance);\n                })[\"catch\"](function (err) {\n                  console.log(err);\n                  setBalance(0);\n                });\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function getTonBal() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    if (name === \"ETH\") {\n      getEthBalance();\n    }\n\n    if (name === \"EGLD\") {\n      getElrondBal();\n    }\n\n    if (name === \"The Open Network\") {\n      getTondBal();\n    }\n\n    return function () {\n      isCancelled = true;\n    };\n  }, [tokenAddress, library, decimals, account, checkAccount, name, ethExRate, egldExRate]);\n  return [balance];\n}\n\n_s(useBalance, \"h3n9B4d+h/gPzgDSn6DAnQfBJTs=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy91c2VCYWxhbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNZLFVBQVQsQ0FBb0JDLFlBQXBCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsWUFBNUMsRUFBMERDLElBQTFELEVBQWdFO0FBQUE7O0FBQzdFLGtCQUE4QmhCLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9pQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFrQ2xCLCtDQUFRLEVBQTFDO0FBQUEsTUFBT21CLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQW9DcEIsK0NBQVEsRUFBNUM7QUFBQSxNQUFPcUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBa0N0QiwrQ0FBUSxFQUExQztBQUFBLE1BQU91QixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLHNCQUE2QmpCLDhEQUFZLEVBQXpDO0FBQUEsTUFBUWtCLE9BQVIsaUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsT0FBakIsaUJBQWlCQSxPQUFqQjs7QUFFQXpCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSwrREFBa0IsR0FBR2tCLElBQXJCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ1IsTUFBQUEsWUFBWSxDQUFDUyxVQUFVLENBQUNELEdBQUQsQ0FBWCxDQUFaO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLFVBQVUsQ0FBQ0QsR0FBRCxDQUE3QjtBQUNELEtBSEQ7QUFJQWxCLElBQUFBLGdFQUFtQixHQUFHaUIsSUFBdEIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xDTixNQUFBQSxhQUFhLENBQUNPLFVBQVUsQ0FBQ0QsR0FBRCxDQUFYLENBQWI7QUFDQUUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkYsVUFBVSxDQUFDRCxHQUFELENBQTdCO0FBQ0QsS0FIRDtBQUlBakIsSUFBQUEsK0RBQWtCLEdBQUdnQixJQUFyQixDQUEwQixVQUFDQyxHQUFELEVBQVM7QUFDakNKLE1BQUFBLFlBQVksQ0FBQ0ssVUFBVSxDQUFDRCxHQUFELENBQVgsQ0FBWjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixVQUFVLENBQUNELEdBQUQsQ0FBN0I7QUFDRCxLQUhEO0FBSUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBM0IsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSStCLFdBQVcsR0FBRyxLQUFsQjs7QUFFQSxhQUFTQyxVQUFULEdBQXNCO0FBQ3BCLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixZQUFJLENBQUNULE9BQUQsSUFBWSxDQUFDYixZQUFqQixFQUErQjtBQUM3QnNCLFVBQUFBLE9BQU8sQ0FBQyxJQUFJN0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQsWUFBSTtBQUNGLGNBQUlPLFlBQVksS0FBS1gsZ0RBQXJCLEVBQW1DO0FBQ2pDd0IsWUFBQUEsT0FBTyxDQUFDVSxHQUFSLENBQ0dILFVBREgsQ0FDY2xCLFlBRGQsRUFFR1ksSUFGSCxDQUVRLFVBQUNVLEtBQUQsRUFBVztBQUNmRixjQUFBQSxPQUFPLENBQUMsSUFBSTdCLDhDQUFKLENBQU8rQixLQUFQLENBQUQsQ0FBUDtBQUNELGFBSkgsV0FLUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJSLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0FILGNBQUFBLE9BQU8sQ0FBQyxJQUFJN0IsOENBQUosQ0FBTyxHQUFQLENBQUQsQ0FBUDtBQUNELGFBUkg7QUFTRCxXQVZELE1BVU87QUFDTCxnQkFBTWlDLFFBQVEsR0FBR25DLHNFQUFnQixDQUMvQlMsWUFEK0IsRUFFL0JhLE9BRitCLEVBRy9CWCxZQUgrQixDQUFqQztBQUtBd0IsWUFBQUEsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVDLE9BQVYsQ0FDR0MsU0FESCxDQUNhaEIsT0FEYixFQUVHaUIsSUFGSCxHQUdHZixJQUhILENBR1EsVUFBQ1UsS0FBRCxFQUFXO0FBQ2ZGLGNBQUFBLE9BQU8sQ0FBQyxJQUFJN0IsOENBQUosQ0FBTytCLEtBQVAsQ0FBRCxDQUFQO0FBQ0QsYUFMSCxXQU1TLFVBQUNDLEtBQUQsRUFBVztBQUNoQlIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQUgsY0FBQUEsT0FBTyxDQUFDLElBQUk3Qiw4Q0FBSixDQUFPLEdBQVAsQ0FBRCxDQUFQO0FBQ0QsYUFUSDtBQVVEO0FBQ0YsU0E1QkQsQ0E0QkUsT0FBT2dDLEtBQVAsRUFBYztBQUNkSCxVQUFBQSxPQUFPLENBQUMsSUFBSTdCLDhDQUFKLENBQU8sR0FBUCxDQUFELENBQVA7QUFDRDtBQUNGLE9BckNNLENBQVA7QUFzQ0Q7O0FBRUQsUUFBTXFDLGFBQWE7QUFBQSwrVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNFVixVQUFVLEVBRFo7O0FBQUE7QUFDZFcsZ0JBQUFBLE9BRGM7O0FBRXBCLG9CQUFJLENBQUNaLFdBQUwsRUFBa0I7QUFDVmEsa0JBQUFBLEdBRFUsR0FDSixJQUFJeEMsaURBQUosQ0FBYyxJQUFkLEVBQW9Cd0MsR0FBcEIsQ0FBd0IsSUFBSXhDLGlEQUFKLENBQWNTLFFBQWQsQ0FBeEIsQ0FESTtBQUVWZ0Msa0JBQUFBLFVBRlUsR0FFRzNDLDJEQUFtQixDQUNwQ3lDLE9BRG9DLEVBRXBDQyxHQUZvQyxFQUdwQyxDQUhvQyxFQUlwQ3hDLDREQUpvQyxDQUZ0QixFQVFoQjs7QUFDTTJDLGtCQUFBQSxnQkFUVSxHQVNTRixVQUFVLEdBQUczQixTQVR0QjtBQVVoQkQsa0JBQUFBLFVBQVUsQ0FBQzhCLGdCQUFELENBQVY7QUFDRDs7QUFibUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBYkwsYUFBYTtBQUFBO0FBQUE7QUFBQSxPQUFuQjs7QUFlQSxRQUFNTSxZQUFZO0FBQUEsZ1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2J6Qyw4Q0FBQSw4Q0FDdUNPLFlBRHZDLGVBRUhZLElBRkcsQ0FFRSxVQUFDd0IsUUFBRCxFQUFjO0FBQ2xCLHNCQUFNQyxPQUFPLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUFkLENBQW1CcEMsT0FBbkM7QUFDQSxzQkFBTTRCLEdBQUcsR0FBRyxJQUFJeEMsaURBQUosQ0FBYyxJQUFkLEVBQW9Cd0MsR0FBcEIsQ0FBd0IsSUFBSXhDLGlEQUFKLENBQWNTLFFBQWQsQ0FBeEIsQ0FBWjtBQUNBLHNCQUFNd0MsY0FBYyxHQUFHbkQsMkRBQW1CLENBQ3hDaUQsT0FEd0MsRUFFeENQLEdBRndDLEVBR3hDLENBSHdDLEVBSXhDeEMsNERBSndDLENBQTFDO0FBTUEsc0JBQU0yQyxnQkFBZ0IsR0FBR00sY0FBYyxHQUFHakMsVUFBMUM7QUFDQUgsa0JBQUFBLFVBQVUsQ0FBQzhCLGdCQUFELENBQVY7QUFDRCxpQkFiRyxXQWNHLFVBQUNPLEdBQUQsRUFBUztBQUNkekIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZd0IsR0FBWjtBQUNBckMsa0JBQUFBLFVBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxpQkFqQkcsQ0FEYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaK0IsWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFsQjs7QUFvQkEsUUFBTU8sU0FBUztBQUFBLGdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNWaEQsOENBQUEsa0VBQzJETyxZQUQzRCxHQUVIWSxJQUZHLENBRUUsVUFBQ3dCLFFBQUQsRUFBYztBQUNsQnJCLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9CLFFBQVo7QUFDQSxzQkFBTU0sTUFBTSxHQUFHTixRQUFRLENBQUNFLElBQVQsQ0FBY0ssTUFBN0I7QUFDQSxzQkFBTWIsR0FBRyxHQUFHLElBQUl4QyxpREFBSixDQUFjLElBQWQsRUFBb0J3QyxHQUFwQixDQUF3QixJQUFJeEMsaURBQUosQ0FBY1MsUUFBZCxDQUF4QixDQUFaO0FBQ0Esc0JBQU13QyxjQUFjLEdBQUduRCwyREFBbUIsQ0FDeENzRCxNQUR3QyxFQUV4Q1osR0FGd0MsRUFHeEMsQ0FId0MsRUFJeEN4Qyw0REFKd0MsQ0FBMUM7QUFNQSxzQkFBTTJDLGdCQUFnQixHQUFHTSxjQUFjLEdBQUcvQixTQUExQztBQUNBTCxrQkFBQUEsVUFBVSxDQUFDOEIsZ0JBQUQsQ0FBVjtBQUNELGlCQWRHLFdBZUcsVUFBQ08sR0FBRCxFQUFTO0FBQ2R6QixrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl3QixHQUFaO0FBQ0FyQyxrQkFBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVjtBQUNELGlCQWxCRyxDQURVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRzQyxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBcUJBLFFBQUl4QyxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUNsQjJCLE1BQUFBLGFBQWE7QUFDZDs7QUFDRCxRQUFJM0IsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJpQyxNQUFBQSxZQUFZO0FBQ2I7O0FBQ0QsUUFBSWpDLElBQUksS0FBSyxrQkFBYixFQUFpQztBQUMvQjJDLE1BQUFBLFVBQVU7QUFDWDs7QUFDRCxXQUFPLFlBQU07QUFDWDNCLE1BQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0QsS0FGRDtBQUdELEdBaEhRLEVBZ0hOLENBQ0RuQixZQURDLEVBRURhLE9BRkMsRUFHRFosUUFIQyxFQUlEVyxPQUpDLEVBS0RWLFlBTEMsRUFNREMsSUFOQyxFQU9ERyxTQVBDLEVBUURFLFVBUkMsQ0FoSE0sQ0FBVDtBQTJIQSxTQUFPLENBQUNKLE9BQUQsQ0FBUDtBQUNEOztHQWxKdUJMO1VBS09MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hY3Rpb25zL3VzZUJhbGFuY2UuanM/MjRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFpFUk9fQUREUkVTUywgd2ViM0JOVG9GbG9hdFN0cmluZyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRFUkMyMENvbnRyYWN0IH0gZnJvbSBcIi4uL3N0b3JlL2NvbnRyYWN0U3RvcmVcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBCTiBmcm9tIFwiYm4uanNcIjtcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdldFVTREV4Y2hhbmdlUmF0ZSxcclxuICBHZXRFR0xERXhjaGFuZ2VSYXRlLFxyXG4gIEdldFRPTkV4Y2hhbmdlUmF0ZVxyXG59IGZyb20gXCIuLi9hc3NldHMvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYWxhbmNlKHRva2VuQWRkcmVzcywgZGVjaW1hbHMsIGNoZWNrQWNjb3VudCwgbmFtZSkge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtldGhFeFJhdGUsIHNldEV0aEV4UmF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlZ2xkRXhSYXRlLCBzZXRFZ2xkRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3RvbkV4UmF0ZSwgc2V0VG9uRXhSYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEdldFVTREV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFdGhFeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2RcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gICAgR2V0RUdMREV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRFZ2xkRXhSYXRlKHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXRoXCIsIHBhcnNlRmxvYXQocmVzKSk7XHJcbiAgICB9KTtcclxuICAgIEdldFRPTkV4Y2hhbmdlUmF0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRUb25FeFJhdGUocGFyc2VGbG9hdChyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJldGhcIiwgcGFyc2VGbG9hdChyZXMpKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGlmICghbGlicmFyeSB8fCAhdG9rZW5BZGRyZXNzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICh0b2tlbkFkZHJlc3MgPT09IFpFUk9fQUREUkVTUykge1xyXG4gICAgICAgICAgICBsaWJyYXJ5LmV0aFxyXG4gICAgICAgICAgICAgIC5nZXRCYWxhbmNlKGNoZWNrQWNjb3VudClcclxuICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJOKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTihcIjBcIikpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRFUkMyMENvbnRyYWN0KFxyXG4gICAgICAgICAgICAgIHRva2VuQWRkcmVzcyxcclxuICAgICAgICAgICAgICBsaWJyYXJ5LFxyXG4gICAgICAgICAgICAgIGNoZWNrQWNjb3VudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb250cmFjdD8ubWV0aG9kc1xyXG4gICAgICAgICAgICAgIC5iYWxhbmNlT2YoYWNjb3VudClcclxuICAgICAgICAgICAgICAuY2FsbCgpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgQk4oXCIwXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEV0aEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV0aEJsbmMgPSBhd2FpdCBnZXRCYWxhbmNlKCk7XHJcbiAgICAgIGlmICghaXNDYW5jZWxsZWQpIHtcclxuICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICBjb25zdCBkZWNpbWFsQmFsID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgIGV0aEJsbmMsXHJcbiAgICAgICAgICBwb3csXHJcbiAgICAgICAgICA0LFxyXG4gICAgICAgICAgQmlnTnVtYmVyLlJPVU5EX0RPV05cclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXRoIHZhbHVlXCIsIHVzZEV4UmF0ZSk7XHJcbiAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWwgKiBldGhFeFJhdGU7XHJcbiAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEVscm9uZEJhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2dhdGV3YXkuZWxyb25kLmNvbS9hZGRyZXNzLyR7Y2hlY2tBY2NvdW50fS9iYWxhbmNlYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVnbGRCYWwgPSByZXNwb25zZS5kYXRhLmRhdGEuYmFsYW5jZTtcclxuICAgICAgICAgIGNvbnN0IHBvdyA9IG5ldyBCaWdOdW1iZXIoXCIxMFwiKS5wb3cobmV3IEJpZ051bWJlcihkZWNpbWFscykpO1xyXG4gICAgICAgICAgY29uc3QgZGVjaW1hbEJhbGFuY2UgPSB3ZWIzQk5Ub0Zsb2F0U3RyaW5nKFxyXG4gICAgICAgICAgICBlZ2xkQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogZWdsZEV4UmF0ZTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoY29udmVydGVkQmFsYW5jZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEJhbGFuY2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VG9uQmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vdG9uY2VudGVyLmNvbS9hcGkvdjIvZ2V0QWRkcmVzc0JhbGFuY2U/YWRkcmVzcz0ke2NoZWNrQWNjb3VudH1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgY29uc3QgdG9uQmFsID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICBjb25zdCBwb3cgPSBuZXcgQmlnTnVtYmVyKFwiMTBcIikucG93KG5ldyBCaWdOdW1iZXIoZGVjaW1hbHMpKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxCYWxhbmNlID0gd2ViM0JOVG9GbG9hdFN0cmluZyhcclxuICAgICAgICAgICAgdG9uQmFsLFxyXG4gICAgICAgICAgICBwb3csXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgIEJpZ051bWJlci5ST1VORF9ET1dOXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgY29udmVydGVkQmFsYW5jZSA9IGRlY2ltYWxCYWxhbmNlICogdG9uRXhSYXRlO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShjb252ZXJ0ZWRCYWxhbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0QmFsYW5jZSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBpZiAobmFtZSA9PT0gXCJFVEhcIikge1xyXG4gICAgICBnZXRFdGhCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gXCJFR0xEXCIpIHtcclxuICAgICAgZ2V0RWxyb25kQmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gXCJUaGUgT3BlbiBOZXR3b3JrXCIpIHtcclxuICAgICAgZ2V0VG9uZEJhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9LCBbXHJcbiAgICB0b2tlbkFkZHJlc3MsXHJcbiAgICBsaWJyYXJ5LFxyXG4gICAgZGVjaW1hbHMsXHJcbiAgICBhY2NvdW50LFxyXG4gICAgY2hlY2tBY2NvdW50LFxyXG4gICAgbmFtZSxcclxuICAgIGV0aEV4UmF0ZSxcclxuICAgIGVnbGRFeFJhdGUsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBbYmFsYW5jZV07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiWkVST19BRERSRVNTIiwid2ViM0JOVG9GbG9hdFN0cmluZyIsImdldEVSQzIwQ29udHJhY3QiLCJCaWdOdW1iZXIiLCJCTiIsInVzZVdlYjNSZWFjdCIsImF4aW9zIiwiR2V0VVNERXhjaGFuZ2VSYXRlIiwiR2V0RUdMREV4Y2hhbmdlUmF0ZSIsIkdldFRPTkV4Y2hhbmdlUmF0ZSIsInVzZUJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJkZWNpbWFscyIsImNoZWNrQWNjb3VudCIsIm5hbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImV0aEV4UmF0ZSIsInNldEV0aEV4UmF0ZSIsImVnbGRFeFJhdGUiLCJzZXRFZ2xkRXhSYXRlIiwidG9uRXhSYXRlIiwic2V0VG9uRXhSYXRlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJ0aGVuIiwicmVzIiwicGFyc2VGbG9hdCIsImNvbnNvbGUiLCJsb2ciLCJpc0NhbmNlbGxlZCIsImdldEJhbGFuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV0aCIsInZhbHVlIiwiZXJyb3IiLCJjb250cmFjdCIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiZ2V0RXRoQmFsYW5jZSIsImV0aEJsbmMiLCJwb3ciLCJkZWNpbWFsQmFsIiwiUk9VTkRfRE9XTiIsImNvbnZlcnRlZEJhbGFuY2UiLCJnZXRFbHJvbmRCYWwiLCJnZXQiLCJyZXNwb25zZSIsImVnbGRCYWwiLCJkYXRhIiwiZGVjaW1hbEJhbGFuY2UiLCJlcnIiLCJnZXRUb25CYWwiLCJ0b25CYWwiLCJyZXN1bHQiLCJnZXRUb25kQmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/useBalance.js\n");

/***/ })

});