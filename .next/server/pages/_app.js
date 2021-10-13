/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./auth.tsx":
/*!******************!*\
  !*** ./auth.tsx ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebaseClient */ \"./firebaseClient.ts\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/critechnew/auth.tsx\";\n\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  user: null\n});\nfunction AuthProvider({\n  children\n}) {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (false) {}\n\n    return _firebaseClient__WEBPACK_IMPORTED_MODULE_3__.firebaseClient.auth().onIdTokenChanged(async user => {\n      console.log(`token changed!`);\n\n      if (!user) {\n        console.log(`no token found...`);\n        setUser(null);\n        nookies__WEBPACK_IMPORTED_MODULE_2___default().destroy(null, \"token\");\n        nookies__WEBPACK_IMPORTED_MODULE_2___default().set(null, \"token\", \"\", {\n          path: '/'\n        });\n        return;\n      }\n\n      console.log(`updating token...`);\n      const token = await user.getIdToken();\n      setUser(user);\n      nookies__WEBPACK_IMPORTED_MODULE_2___default().destroy(null, \"token\");\n      nookies__WEBPACK_IMPORTED_MODULE_2___default().set(null, \"token\", token, {\n        path: '/'\n      });\n    });\n  }, []); // force refresh the token every 10 minutes\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const handle = setInterval(async () => {\n      console.log(`refreshing token...`);\n      const user = _firebaseClient__WEBPACK_IMPORTED_MODULE_3__.firebaseClient.auth().currentUser;\n      if (user) await user.getIdToken(true);\n    }, 10 * 60 * 1000);\n    return () => clearInterval(handle);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\nconst useAuth = () => {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vYXV0aC50c3g/MmQ3MCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VyIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZUNsaWVudCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwibm9va2llcyIsInBhdGgiLCJ0b2tlbiIsImdldElkVG9rZW4iLCJoYW5kbGUiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRVc2VyIiwiY2xlYXJJbnRlcnZhbCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLENBQXVDO0FBQ3RFQyxNQUFJLEVBQUU7QUFEZ0UsQ0FBdkMsQ0FBakM7QUFJTyxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBeUM7QUFDOUMsUUFBTTtBQUFBLE9BQUNGLElBQUQ7QUFBQSxPQUFPRztBQUFQLE1BQWtCQywrQ0FBUSxDQUE2QixJQUE3QixDQUFoQztBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxlQUFtQyxFQUVsQzs7QUFDRCxXQUFPQyxnRUFBQSxHQUFzQkMsZ0JBQXRCLENBQXVDLE1BQU9QLElBQVAsSUFBZ0I7QUFDNURRLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFiOztBQUNBLFVBQUksQ0FBQ1QsSUFBTCxFQUFXO0FBQ1RRLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLG1CQUFiO0FBQ0FOLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDQU8sOERBQUEsQ0FBZ0IsSUFBaEIsRUFBc0IsT0FBdEI7QUFDQUEsMERBQUEsQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLEVBQTJCLEVBQTNCLEVBQStCO0FBQUNDLGNBQUksRUFBRTtBQUFQLFNBQS9CO0FBQ0E7QUFDRDs7QUFFREgsYUFBTyxDQUFDQyxHQUFSLENBQWEsbUJBQWI7QUFDQSxZQUFNRyxLQUFLLEdBQUcsTUFBTVosSUFBSSxDQUFDYSxVQUFMLEVBQXBCO0FBQ0FWLGFBQU8sQ0FBQ0gsSUFBRCxDQUFQO0FBQ0FVLDREQUFBLENBQWdCLElBQWhCLEVBQXNCLE9BQXRCO0FBQ0FBLHdEQUFBLENBQVksSUFBWixFQUFrQixPQUFsQixFQUEyQkUsS0FBM0IsRUFBa0M7QUFBQ0QsWUFBSSxFQUFFO0FBQVAsT0FBbEM7QUFDRCxLQWZNLENBQVA7QUFnQkQsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVCxDQUg4QyxDQXlCOUM7O0FBQ0FOLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1TLE1BQU0sR0FBR0MsV0FBVyxDQUFDLFlBQVk7QUFDckNQLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLHFCQUFiO0FBQ0EsWUFBTVQsSUFBSSxHQUFHTSxnRUFBQSxHQUFzQlUsV0FBbkM7QUFDQSxVQUFJaEIsSUFBSixFQUFVLE1BQU1BLElBQUksQ0FBQ2EsVUFBTCxDQUFnQixJQUFoQixDQUFOO0FBQ1gsS0FKeUIsRUFJdkIsS0FBSyxFQUFMLEdBQVUsSUFKYSxDQUExQjtBQUtBLFdBQU8sTUFBTUksYUFBYSxDQUFDSCxNQUFELENBQTFCO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFZDtBQUFGLEtBQTdCO0FBQUEsY0FBd0NFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUdEO0FBRU0sTUFBTWdCLE9BQU8sR0FBRyxNQUFNO0FBQzNCLFNBQU9DLGlEQUFVLENBQUNyQixXQUFELENBQWpCO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL2F1dGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUNsaWVudCB9IGZyb20gXCIuL2ZpcmViYXNlQ2xpZW50XCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7IHVzZXI6IGZpcmViYXNlQ2xpZW50LlVzZXIgfCBudWxsIH0+KHtcbiAgdXNlcjogbnVsbCxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGZpcmViYXNlQ2xpZW50LlVzZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAod2luZG93IGFzIGFueSkubm9va2llcyA9IG5vb2tpZXM7XG4gICAgfVxuICAgIHJldHVybiBmaXJlYmFzZUNsaWVudC5hdXRoKCkub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coYHRva2VuIGNoYW5nZWQhYCk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG5vIHRva2VuIGZvdW5kLi4uYCk7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIG5vb2tpZXMuZGVzdHJveShudWxsLCBcInRva2VuXCIpO1xuICAgICAgICBub29raWVzLnNldChudWxsLCBcInRva2VuXCIsIFwiXCIsIHtwYXRoOiAnLyd9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhgdXBkYXRpbmcgdG9rZW4uLi5gKTtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XG4gICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgbm9va2llcy5kZXN0cm95KG51bGwsIFwidG9rZW5cIik7XG4gICAgICBub29raWVzLnNldChudWxsLCBcInRva2VuXCIsIHRva2VuLCB7cGF0aDogJy8nfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBmb3JjZSByZWZyZXNoIHRoZSB0b2tlbiBldmVyeSAxMCBtaW51dGVzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYHJlZnJlc2hpbmcgdG9rZW4uLi5gKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZUNsaWVudC5hdXRoKCkuY3VycmVudFVzZXI7XG4gICAgICBpZiAodXNlcikgYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xuICAgIH0sIDEwICogNjAgKiAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciB9fT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./auth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/critechnew/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSw4REFBQywrQ0FBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUNELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vYXV0aCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["firebaseClient_ts"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();