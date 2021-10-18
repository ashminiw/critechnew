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
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserInfo */ \"./components/UserInfo.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_InputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.ts\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/pages/about.js\";\n\n\n\n // import ProfileBanner from '../components/ProfileBanner'; \n\n\n\n\n\n\n // import profilePic from '../logos/profilepic1.png'\n\nfunction about() {\n  const {\n    user\n  } = (0,_auth__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col min-h-screen bg-green-500\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"bg-purple-300 p-2 sticky-top-0 rounded-2xl shadow-md text-gray-500 font-medium mt-6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        className: \"text-7xl text-green-800 p-4 mx-20\",\n        children: `${user ? user.email : 'no user signed in'}'s Profile`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserInfo__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        className: \"flex-items-center\",\n        onClick: () => router.push('/profile'),\n        children: \" Save and Return \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vcGFnZXMvYWJvdXQuanM/MjZlYyJdLCJuYW1lcyI6WyJhYm91dCIsInVzZXIiLCJ1c2VBdXRoIiwicm91dGVyIiwidXNlUm91dGVyIiwiZW1haWwiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDaEIsUUFBTTtBQUFFQztBQUFGLE1BQVdDLDhDQUFPLEVBQXhCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsNEJBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBSyxlQUFTLEVBQUMscUZBQWY7QUFBQSw4QkFDQTtBQUFNLGlCQUFTLEVBQUMsbUNBQWhCO0FBQUEsa0JBQXNELEdBQUVILElBQUksR0FBR0EsSUFBSSxDQUFDSSxLQUFSLEdBQWdCLG1CQUFvQjtBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkEsZUFLQTtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQW9DLGVBQU8sRUFBRSxNQUFNRixNQUFNLENBQUNHLElBQVAsQ0FBWSxVQUFaLENBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFTQztBQUFBLDZCQUFLLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTs7QUFFRCwrREFBZU4sS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mbyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJzsgIFxuaW1wb3J0IElucHV0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCb3gnOyBcbi8vIGltcG9ydCBQcm9maWxlQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUJhbm5lcic7IFxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2F1dGgnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGZpcmViYXNlQ2xpZW50IH0gZnJvbSAnLi4vZmlyZWJhc2VDbGllbnQnO1xuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSdcbi8vIGltcG9ydCBwcm9maWxlUGljIGZyb20gJy4uL2xvZ29zL3Byb2ZpbGVwaWMxLnBuZydcblxuZnVuY3Rpb24gYWJvdXQoKSB7XG5cdGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyZWVuLTUwMFwiPlxuXHRcdFx0PEhlYWRlci8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS0zMDAgcC0yIHN0aWNreS10b3AtMCByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bSBtdC02XCI+XG5cdFx0XHQ8dGV4dCBjbGFzc05hbWU9XCJ0ZXh0LTd4bCB0ZXh0LWdyZWVuLTgwMCBwLTQgbXgtMjBcIj57YCR7dXNlciA/IHVzZXIuZW1haWwgOiAnbm8gdXNlciBzaWduZWQgaW4nfSdzIFByb2ZpbGVgfTwvdGV4dD5cdFxuXHRcdFx0ey8qIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWN9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+ICovfVxuXHRcdFx0ey8qIDxpbWFnZSBzcmM9e3Byb2ZpbGVQaWN9IGFsdD1cImF1dGhvclwiLz4gKi99XG5cdFx0XHQ8VXNlckluZm8vPlxuXHRcdFx0PHRleHQgY2xhc3NOYW1lPVwiZmxleC1pdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKX0+IFNhdmUgYW5kIFJldHVybiA8L3RleHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+PEZvb3Rlci8+PC9kaXY+XG5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/database");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_heroicons_react_outline_esm_index_js-node_modules_heroicons_react_solid_-176a77","auth_tsx","components_Footer_js-components_Header_js-components_InputBox_js","components_UserInfo_js"], function() { return __webpack_exec__("./pages/about.js"); });
module.exports = __webpack_exports__;

})();