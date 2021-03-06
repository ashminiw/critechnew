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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.ts\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_SignUpHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SignUpHeader */ \"./components/SignUpHeader.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/pages/login.tsx\";\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_props => {\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: pass,\n    1: setPass\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col min-h-screen bg-green-500\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \" Critech|Login \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUpHeader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: \"Go back to home page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col justify-center place-self-center bg-gray-300 border border-white w-7/12 py-8 flex items-center mb-3\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        className: \"text-2xl text-purple-700\",\n        children: \" Username/Email \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: \"shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n        value: email,\n        onChange: e => setEmail(e.target.value),\n        placeholder: 'Email'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        className: \"text-2xl text-purple-700\",\n        children: \" Password \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: \"shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n        type: 'password',\n        value: pass,\n        onChange: e => setPass(e.target.value),\n        placeholder: 'Password'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-x-7\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded\",\n          onClick: async () => {\n            await _firebaseClient__WEBPACK_IMPORTED_MODULE_3__.firebaseClient.auth().createUserWithEmailAndPassword(email, pass);\n            window.location.href = '/';\n          },\n          children: \"Create account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded\",\n          onClick: async () => {\n            await _firebaseClient__WEBPACK_IMPORTED_MODULE_3__.firebaseClient.auth().signInWithEmailAndPassword(email, pass);\n            window.location.href = '/home';\n          },\n          children: \"Log in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vcGFnZXMvbG9naW4udHN4P2Q3NWYiXSwibmFtZXMiOlsiX3Byb3BzIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzcyIsInNldFBhc3MiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaXJlYmFzZUNsaWVudCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSwrREFBZ0JBLE1BQUQsSUFBaUI7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxtSEFBZjtBQUFBLDhCQUNBO0FBQU0saUJBQVMsRUFBQywwQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFPLGlCQUFTLEVBQUMsK0lBQWpCO0FBQ0UsYUFBSyxFQUFFRixLQURUO0FBRUUsZ0JBQVEsRUFBR0ssQ0FBRCxJQUFPSixRQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRjNCO0FBR0UsbUJBQVcsRUFBRTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBBLGVBUUE7QUFBTSxpQkFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSQSxlQVNBO0FBQU8saUJBQVMsRUFBRSwrSUFBbEI7QUFDRSxZQUFJLEVBQUUsVUFEUjtBQUVFLGFBQUssRUFBRUosSUFGVDtBQUdFLGdCQUFRLEVBQUdFLENBQUQsSUFBT0QsT0FBTyxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUgxQjtBQUlFLG1CQUFXLEVBQUU7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRBLGVBZUE7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDQTtBQUFRLG1CQUFTLEVBQUMsdUpBQWxCO0FBQ0UsaUJBQU8sRUFBRSxZQUFZO0FBQ25CLGtCQUFNQyxnRUFBQSxHQUVIQyw4QkFGRyxDQUU0QlQsS0FGNUIsRUFFbUNHLElBRm5DLENBQU47QUFHQU8sa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsR0FBdkI7QUFDRCxXQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBV0E7QUFBUSxtQkFBUyxFQUFDLHVKQUFsQjtBQUNFLGlCQUFPLEVBQUUsWUFBWTtBQUNuQixrQkFBTUosZ0VBQUEsR0FBc0JLLDBCQUF0QixDQUFpRGIsS0FBakQsRUFBd0RHLElBQXhELENBQU47QUFDQU8sa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsT0FBdkI7QUFDRCxXQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUEyQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUErQ0QsQ0FsREQiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZmlyZWJhc2VDbGllbnQgfSBmcm9tICcuLi9maXJlYmFzZUNsaWVudCc7XG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBTaWduVXBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWduVXBIZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCAoX3Byb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzLCBzZXRQYXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyZWVuLTUwMFwiPlxuICAgICAgPEhlYWQ+PHRpdGxlPiBDcml0ZWNofExvZ2luIDwvdGl0bGU+PC9IZWFkPlxuICAgICAgPFNpZ25VcEhlYWRlci8+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YT5HbyBiYWNrIHRvIGhvbWUgcGFnZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHBsYWNlLXNlbGYtY2VudGVyIGJnLWdyYXktMzAwIGJvcmRlciBib3JkZXItd2hpdGUgdy03LzEyIHB5LTggZmxleCBpdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgPHRleHQgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1wdXJwbGUtNzAwXCI+IFVzZXJuYW1lL0VtYWlsIDwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIHctMS8yIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9eydFbWFpbCd9XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8dGV4dCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXB1cnBsZS03MDBcIj4gUGFzc3dvcmQgPC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzTmFtZSA9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIHctMS8yIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBcbiAgICAgICAgdHlwZT17J3Bhc3N3b3JkJ31cbiAgICAgICAgdmFsdWU9e3Bhc3N9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsnUGFzc3dvcmQnfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC03XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLXB1cnBsZS01MDAgdGV4dC1wdXJwbGUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1wdXJwbGUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCJcbiAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IGZpcmViYXNlQ2xpZW50XG4gICAgICAgICAgICAuYXV0aCgpXG4gICAgICAgICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQ3JlYXRlIGFjY291bnRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1wdXJwbGUtNTAwIHRleHQtcHVycGxlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItcHVycGxlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3MpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob21lJztcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTG9nIGluXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","firebaseClient_ts","components_Footer_js","components_SignUpHeader_js"], function() { return __webpack_exec__("./pages/login.tsx"); });
module.exports = __webpack_exports__;

})();