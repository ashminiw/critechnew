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
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.ts\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/components/Form.js\";\n\n\n\nfunction Form() {\n  const {\n    0: title,\n    1: setTitle\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  const handleOnChange = e => {\n    setTitle(e.target.value);\n  };\n\n  const createTodo = () => {\n    const todoRef = firebase.database().ref('Todo');\n    const todo = {\n      title,\n      complete: false\n    };\n    todoRef.push(todo);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      onChange: handleOnChange,\n      value: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: createTodo,\n      children: \"Add Todo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vY29tcG9uZW50cy9Gb3JtLmpzPzQ3MjkiXSwibmFtZXMiOlsiRm9ybSIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlVG9kbyIsInRvZG9SZWYiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwidG9kbyIsImNvbXBsZXRlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsUUFBTUMsY0FBYyxHQUFJQyxDQUFELElBQU87QUFDNUJILFlBQVEsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsVUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLFFBQVQsR0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCLENBQWhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHO0FBQ1haLFdBRFc7QUFFWGEsY0FBUSxFQUFFO0FBRkMsS0FBYjtBQUtBTCxXQUFPLENBQUNNLElBQVIsQ0FBYUYsSUFBYjtBQUNELEdBUkQ7O0FBU0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRVQsY0FBN0I7QUFBNkMsV0FBSyxFQUFFSDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGFBQU8sRUFBRU8sVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmlyZWJhc2VDbGllbnQgfSBmcm9tICcuLi9maXJlYmFzZUNsaWVudCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBjcmVhdGVUb2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9SZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignVG9kbycpO1xuICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdG9kb1JlZi5wdXNoKHRvZG8pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9IHZhbHVlPXt0aXRsZX0gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlVG9kb30+QWRkIFRvZG88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ }),

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.ts\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/components/Post.js\";\n\n\n\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  const {\n    user\n  } = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n\n  const deletePost = () => {\n    const postRef = firebase.database().ref('Post').child(post.id);\n    postRef.remove();\n  }; //this changed to like post\n\n\n  const completePost = () => {\n    const postRef = firebase.database().ref('Post').child(post.id);\n    postRef.update({\n      complete: !post.complete\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"w-1/4 items-center place-self-center bg-green-200\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: `${user ? user.email : 'no user signed in'}'s Post`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: post.complete ? 'complete' : '',\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \" flex justify-evenly space-x-6 \",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ArchiveIcon, {\n        className: \"h-7 text-blue-800\",\n        onClick: deletePost\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.HeartIcon, {\n        className: \"h-7 text-red-800\",\n        onClick: completePost\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChatIcon, {\n        className: \"h-7 text-green-800\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex items-center p-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.EmojiHappyIcon, {\n          className: \"h-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          className: \"border-none flex-1\",\n          placeholder: \"Add a comment...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"font=semibold text-purple-500\",\n          children: \" Post \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n{\n  /* <div className=\"flex justify-evenly p-3 border-t\">\n  \t\t<div className=\"flex items-center space-x-1 cursor-pointer justify-center\">\n  \t\t\t<EmojiHappyIcon className=\"h-7 text-yellow-300\"/>\n  \t\t\t<p className=\"text-xs sm:text-sm xl:text-base\">Feeling/Activity</p>\n  \t\t\t</div>\n  \t\t<div className=\"flex items-center space-x-1 cursor-pointer justify-center\">\n  \t\t\t<CameraIcon className=\"h-7 text-green-900\"/>\n  \t\t\t<p className=\"text-xs sm:text-sm xl:text-base\">Photo/Video</p>\n  \t\t</div>\n  \t</div> */\n} //destruction props and pass them in the function post\n//post header: userimage + username + 3 dots to report\n//<div> <img> <p> <div>\n//post image\n//buttons\n//caption\n//comments\n//input box//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vY29tcG9uZW50cy9Qb3N0LmpzP2I1MGUiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ1c2VyIiwidXNlQXV0aCIsImRlbGV0ZVBvc3QiLCJwb3N0UmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwiaWQiLCJyZW1vdmUiLCJjb21wbGV0ZVBvc3QiLCJ1cGRhdGUiLCJjb21wbGV0ZSIsImVtYWlsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF3QjtBQUNyQyxRQUFNO0FBQUVDO0FBQUYsTUFBV0MsOENBQU8sRUFBeEI7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsVUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLFFBQVQsR0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCLEVBQWdDQyxLQUFoQyxDQUFzQ1IsSUFBSSxDQUFDUyxFQUEzQyxDQUFoQjtBQUNBTCxXQUFPLENBQUNNLE1BQVI7QUFDRCxHQUhELENBRnFDLENBTXJDOzs7QUFDQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QixVQUFNUCxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQkMsR0FBcEIsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDUixJQUFJLENBQUNTLEVBQTNDLENBQWhCO0FBQ0FMLFdBQU8sQ0FBQ1EsTUFBUixDQUFlO0FBQ2JDLGNBQVEsRUFBRSxDQUFDYixJQUFJLENBQUNhO0FBREgsS0FBZjtBQUdELEdBTEQ7O0FBTUEsc0JBRUU7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBQSw0QkFDRTtBQUFBLGdCQUFNLEdBQUVaLElBQUksR0FBR0EsSUFBSSxDQUFDYSxLQUFSLEdBQWdCLG1CQUFvQjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBRWQsSUFBSSxDQUFDYSxRQUFMLEdBQWdCLFVBQWhCLEdBQTZCLEVBQTVDO0FBQUEsZ0JBQWlEYixJQUFJLENBQUNlO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsOEJBR0EsOERBQUMsK0RBQUQ7QUFBYSxpQkFBUyxFQUFDLG1CQUF2QjtBQUEyQyxlQUFPLEVBQUVaO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUlBLDhEQUFDLDZEQUFEO0FBQVcsaUJBQVMsRUFBQyxrQkFBckI7QUFBd0MsZUFBTyxFQUFFUTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkEsZUFLQSw4REFBQyw0REFBRDtBQUFVLGlCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBV0U7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsdUJBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsb0VBQUQ7QUFBZ0IsbUJBQVMsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBUyxFQUFDLG9CQUE3QjtBQUFrRCxxQkFBVyxFQUFDO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFRLG1CQUFTLEVBQUMsK0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQXVCRDtBQUVEO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWSxDLENBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaXJlYmFzZUNsaWVudCB9IGZyb20gJy4uL2ZpcmViYXNlQ2xpZW50JztcbmltcG9ydCAnZmlyZWJhc2UvZGF0YWJhc2UnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IEFyY2hpdmVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcbmltcG9ydCB7IEhlYXJ0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBDaGF0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBFbW9qaUhhcHB5SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGRlbGV0ZVBvc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zdFJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdQb3N0JykuY2hpbGQocG9zdC5pZCk7XG4gICAgcG9zdFJlZi5yZW1vdmUoKTtcbiAgfTtcbiAgLy90aGlzIGNoYW5nZWQgdG8gbGlrZSBwb3N0XG4gIGNvbnN0IGNvbXBsZXRlUG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3N0UmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ1Bvc3QnKS5jaGlsZChwb3N0LmlkKTtcbiAgICBwb3N0UmVmLnVwZGF0ZSh7XG4gICAgICBjb21wbGV0ZTogIXBvc3QuY29tcGxldGUsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGl0ZW1zLWNlbnRlciBwbGFjZS1zZWxmLWNlbnRlciBiZy1ncmVlbi0yMDBcIj5cbiAgICAgIDxoMT57YCR7dXNlciA/IHVzZXIuZW1haWwgOiAnbm8gdXNlciBzaWduZWQgaW4nfSdzIFBvc3RgfTwvaDE+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtwb3N0LmNvbXBsZXRlID8gJ2NvbXBsZXRlJyA6ICcnfT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWV2ZW5seSBzcGFjZS14LTYgXCI+XG4gICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1wdXJwbGUtNTAwIHRleHQtcHVycGxlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItcHVycGxlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiIG9uQ2xpY2s9e2RlbGV0ZVBvc3R9PkRlbGV0ZTwvYnV0dG9uPiAqL31cbiAgICAgIFxuICAgICAgPEFyY2hpdmVJY29uIGNsYXNzTmFtZT1cImgtNyB0ZXh0LWJsdWUtODAwXCIgb25DbGljaz17ZGVsZXRlUG9zdH0gLz5cbiAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwiaC03IHRleHQtcmVkLTgwMFwiIG9uQ2xpY2s9e2NvbXBsZXRlUG9zdH0gLz5cbiAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJoLTcgdGV4dC1ncmVlbi04MDBcIiAvPiAgXG4gICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1wdXJwbGUtNTAwIHRleHQtcHVycGxlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItcHVycGxlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiIG9uQ2xpY2s9e2NvbXBsZXRlUG9zdH0+Q29tcGxldGU8L2J1dHRvbj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtNFwiPlxuICAgICAgICAgIDxFbW9qaUhhcHB5SWNvbiBjbGFzc05hbWU9XCJoLTdcIi8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmUgZmxleC0xXCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBjb21tZW50Li4uXCIvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9udD1zZW1pYm9sZCB0ZXh0LXB1cnBsZS01MDBcIj4gUG9zdCA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBwLTMgYm9yZGVyLXRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdDxFbW9qaUhhcHB5SWNvbiBjbGFzc05hbWU9XCJoLTcgdGV4dC15ZWxsb3ctMzAwXCIvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20geGw6dGV4dC1iYXNlXCI+RmVlbGluZy9BY3Rpdml0eTwvcD5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0XHQ8Q2FtZXJhSWNvbiBjbGFzc05hbWU9XCJoLTcgdGV4dC1ncmVlbi05MDBcIi8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB4bDp0ZXh0LWJhc2VcIj5QaG90by9WaWRlbzwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PiAqL31cblxuICAgIC8vZGVzdHJ1Y3Rpb24gcHJvcHMgYW5kIHBhc3MgdGhlbSBpbiB0aGUgZnVuY3Rpb24gcG9zdFxuICAgIC8vcG9zdCBoZWFkZXI6IHVzZXJpbWFnZSArIHVzZXJuYW1lICsgMyBkb3RzIHRvIHJlcG9ydFxuICAgIC8vPGRpdj4gPGltZz4gPHA+IDxkaXY+XG4gICAgLy9wb3N0IGltYWdlXG4gICAgLy9idXR0b25zXG4gICAgLy9jYXB0aW9uXG4gICAgLy9jb21tZW50c1xuICAgIC8vaW5wdXQgYm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ }),

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.ts\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/components/PostList.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction PostList() {\n  const {\n    0: postList,\n    1: setPostList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    user\n  } = (0,_auth__WEBPACK_IMPORTED_MODULE_5__.useAuth)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const postRef = firebase.database().ref('Post');\n    postRef.on('value', snapshot => {\n      const posts = snapshot.val();\n      const postList = [];\n\n      for (let id in posts) {\n        postList.push(_objectSpread({\n          id\n        }, posts[id]));\n      }\n\n      setPostList(postList);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: postList ? postList.map((post, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__.default, {\n      post: post\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 41\n    }, this)) : ''\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcz84MWI4Il0sIm5hbWVzIjpbIlBvc3RMaXN0IiwicG9zdExpc3QiLCJzZXRQb3N0TGlzdCIsInVzZVN0YXRlIiwidXNlciIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJwb3N0UmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsIm9uIiwic25hcHNob3QiLCJwb3N0cyIsInZhbCIsImlkIiwicHVzaCIsIm1hcCIsInBvc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsRUFBeEM7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0MsOENBQU8sRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLFFBQVQsR0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCLENBQWhCO0FBQ0FILFdBQU8sQ0FBQ0ksRUFBUixDQUFXLE9BQVgsRUFBcUJDLFFBQUQsSUFBYztBQUNoQyxZQUFNQyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsR0FBVCxFQUFkO0FBQ0EsWUFBTWIsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFdBQUssSUFBSWMsRUFBVCxJQUFlRixLQUFmLEVBQXNCO0FBQ3BCWixnQkFBUSxDQUFDZSxJQUFUO0FBQWdCRDtBQUFoQixXQUF1QkYsS0FBSyxDQUFDRSxFQUFELENBQTVCO0FBQ0Q7O0FBQ0RiLGlCQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNELEtBUEQ7QUFRRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSxjQUNHQSxRQUFRLEdBQ0xBLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsa0JBQWlCLDhEQUFDLDBDQUFEO0FBQU0sVUFBSSxFQUFFRDtBQUFaLE9BQXVCQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTlCLENBREssR0FFTDtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmlyZWJhc2VDbGllbnQgfSBmcm9tICcuLi9maXJlYmFzZUNsaWVudCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJ1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9hdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TGlzdCgpIHtcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignUG9zdCcpO1xuICAgIHBvc3RSZWYub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBwb3N0cyA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgY29uc3QgcG9zdExpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGlkIGluIHBvc3RzKSB7XG4gICAgICAgIHBvc3RMaXN0LnB1c2goeyBpZCwgLi4ucG9zdHNbaWRdIH0pO1xuICAgICAgfVxuICAgICAgc2V0UG9zdExpc3QocG9zdExpc3QpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3RMaXN0XG4gICAgICAgID8gcG9zdExpc3QubWFwKChwb3N0LCBpbmRleCkgPT4gPFBvc3QgcG9zdD17cG9zdH0ga2V5PXtpbmRleH0gLz4pXG4gICAgICAgIDogJyd9XG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostList.js\n");

/***/ }),

/***/ "./components/Read.js":
/*!****************************!*\
  !*** ./components/Read.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/components/Read.js\";\n\n\n\n\nconst ReadDataFromCloudFirestore = () => {\n  const {\n    user\n  } = (0,_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n\n  const readData = () => {\n    try {\n      firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore().collection('ashweer').doc(user.id).onSnapshot(function (doc) {\n        console.log(doc.data());\n      });\n      alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.');\n    } catch (error) {\n      console.log(error);\n      alert(error);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      margin: '5px 0'\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: readData,\n      children: \"Read Data From Cloud Firestore\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReadDataFromCloudFirestore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vY29tcG9uZW50cy9SZWFkLmpzP2Q5YzgiXSwibmFtZXMiOlsiUmVhZERhdGFGcm9tQ2xvdWRGaXJlc3RvcmUiLCJ1c2VyIiwidXNlQXV0aCIsInJlYWREYXRhIiwiZmlyZWJhc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwiaWQiLCJvblNuYXBzaG90IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhbGVydCIsImVycm9yIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLDBCQUEwQixHQUFHLE1BQU07QUFDckMsUUFBTTtBQUFFQztBQUFGLE1BQVdDLDhDQUFPLEVBQXhCOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFFBQUk7QUFDQUMsbUVBQUEsR0FFS0MsVUFGTCxDQUVnQixTQUZoQixFQUdLQyxHQUhMLENBR1NMLElBQUksQ0FBQ00sRUFIZCxFQUlLQyxVQUpMLENBSWdCLFVBQVVGLEdBQVYsRUFBZTtBQUN2QkcsZUFBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0ssSUFBSixFQUFaO0FBQ0gsT0FOTDtBQU9BQyxXQUFLLENBQUMsb0dBQUQsQ0FBTDtBQUNILEtBVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7QUFDWkosYUFBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVo7QUFDQUQsV0FBSyxDQUFDQyxLQUFELENBQUw7QUFDSDtBQUNKLEdBZEQ7O0FBZ0JBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBQSwyQkFDSTtBQUFRLGFBQU8sRUFBRVgsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQXZCRDs7QUF5QkEsK0RBQWVILDBCQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWFkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2F1dGgnXG5cblxuY29uc3QgUmVhZERhdGFGcm9tQ2xvdWRGaXJlc3RvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcbiAgICBjb25zdCByZWFkRGF0YSA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpcmViYXNlXG4gICAgICAgICAgICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2FzaHdlZXInKVxuICAgICAgICAgICAgICAgIC5kb2ModXNlci5pZClcbiAgICAgICAgICAgICAgICAub25TbmFwc2hvdChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGFsZXJ0KCdEYXRhIHdhcyBzdWNjZXNzZnVsbHkgZmV0Y2hlZCBmcm9tIGNsb3VkIGZpcmVzdG9yZSEgQ2xvc2UgdGhpcyBhbGVydCBhbmQgY2hlY2sgY29uc29sZSBmb3Igb3V0cHV0LicpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICc1cHggMCcgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlYWREYXRhfSA+UmVhZCBEYXRhIEZyb20gQ2xvdWQgRmlyZXN0b3JlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhZERhdGFGcm9tQ2xvdWRGaXJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Read.js\n");

/***/ }),

/***/ "./components/Write.js":
/*!*****************************!*\
  !*** ./components/Write.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/components/Write.js\";\n\n\n\n\nconst WriteToCloudFirestore = () => {\n  const {\n    user\n  } = (0,_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n\n  const sendData = () => {\n    try {\n      firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore().collection('ashweer').doc(user.id) // leave as .doc() for a random unique doc name to be assigned\n      .set({\n        string_data: 'Benjamin Carlson',\n        number_data: 2,\n        boolean_data: true,\n        map_data: {\n          stringInMap: 'Hi',\n          numberInMap: 7\n        },\n        array_data: ['text', 4],\n        null_data: null,\n        time_stamp: firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore.Timestamp.fromDate(new Date('December 17, 1995 03:24:00')),\n        geo_point: new (firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore.GeoPoint)(34.714322, -131.468435)\n      }).then(alert('Data was successfully sent to cloud firestore!'));\n    } catch (error) {\n      console.log(error);\n      alert(error);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      margin: '5px 0'\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: sendData,\n      children: \"Send Data To Cloud Firestore\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteToCloudFirestore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vY29tcG9uZW50cy9Xcml0ZS5qcz85Yjk2Il0sIm5hbWVzIjpbIldyaXRlVG9DbG91ZEZpcmVzdG9yZSIsInVzZXIiLCJ1c2VBdXRoIiwic2VuZERhdGEiLCJmaXJlYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJpZCIsInNldCIsInN0cmluZ19kYXRhIiwibnVtYmVyX2RhdGEiLCJib29sZWFuX2RhdGEiLCJtYXBfZGF0YSIsInN0cmluZ0luTWFwIiwibnVtYmVySW5NYXAiLCJhcnJheV9kYXRhIiwibnVsbF9kYXRhIiwidGltZV9zdGFtcCIsIkRhdGUiLCJnZW9fcG9pbnQiLCJ0aGVuIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEscUJBQXFCLEdBQUcsTUFBTTtBQUNoQyxRQUFNO0FBQUVDO0FBQUYsTUFBV0MsOENBQU8sRUFBeEI7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBSTtBQUNBQyxtRUFBQSxHQUVLQyxVQUZMLENBRWdCLFNBRmhCLEVBR0tDLEdBSEwsQ0FHU0wsSUFBSSxDQUFDTSxFQUhkLEVBR2tCO0FBSGxCLE9BSUtDLEdBSkwsQ0FJUztBQUNEQyxtQkFBVyxFQUFFLGtCQURaO0FBRURDLG1CQUFXLEVBQUUsQ0FGWjtBQUdEQyxvQkFBWSxFQUFFLElBSGI7QUFJREMsZ0JBQVEsRUFBRTtBQUFFQyxxQkFBVyxFQUFFLElBQWY7QUFBcUJDLHFCQUFXLEVBQUU7QUFBbEMsU0FKVDtBQUtEQyxrQkFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FMWDtBQU1EQyxpQkFBUyxFQUFFLElBTlY7QUFPREMsa0JBQVUsRUFBRWIsZ0ZBQUEsQ0FBc0MsSUFBSWMsSUFBSixDQUFTLDRCQUFULENBQXRDLENBUFg7QUFRREMsaUJBQVMsRUFBRSxJQUFJZix3RUFBSixDQUFnQyxTQUFoQyxFQUEyQyxDQUFDLFVBQTVDO0FBUlYsT0FKVCxFQWNLZ0IsSUFkTCxDQWNVQyxLQUFLLENBQUMsZ0RBQUQsQ0FkZjtBQWVILEtBaEJELENBZ0JFLE9BQU9DLEtBQVAsRUFBYztBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBRCxXQUFLLENBQUNDLEtBQUQsQ0FBTDtBQUNIO0FBQ0osR0FyQkQ7O0FBdUJBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVHLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBQSwyQkFDSTtBQUFRLGFBQU8sRUFBRXRCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBSUgsQ0E3QkQ7O0FBK0JBLCtEQUFlSCxxQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV3JpdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vYXV0aCdcblxuY29uc3QgV3JpdGVUb0Nsb3VkRmlyZXN0b3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpXG4gICAgY29uc3Qgc2VuZERhdGEgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaXJlYmFzZVxuICAgICAgICAgICAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdhc2h3ZWVyJylcbiAgICAgICAgICAgICAgICAuZG9jKHVzZXIuaWQpIC8vIGxlYXZlIGFzIC5kb2MoKSBmb3IgYSByYW5kb20gdW5pcXVlIGRvYyBuYW1lIHRvIGJlIGFzc2lnbmVkXG4gICAgICAgICAgICAgICAgLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ19kYXRhOiAnQmVuamFtaW4gQ2FybHNvbicsXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcl9kYXRhOiAyLFxuICAgICAgICAgICAgICAgICAgICBib29sZWFuX2RhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1hcF9kYXRhOiB7IHN0cmluZ0luTWFwOiAnSGknLCBudW1iZXJJbk1hcDogNyB9LFxuICAgICAgICAgICAgICAgICAgICBhcnJheV9kYXRhOiBbJ3RleHQnLCA0XSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbF9kYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX3N0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5ldyBEYXRlKCdEZWNlbWJlciAxNywgMTk5NSAwMzoyNDowMCcpKSxcbiAgICAgICAgICAgICAgICAgICAgZ2VvX3BvaW50OiBuZXcgZmlyZWJhc2UuZmlyZXN0b3JlLkdlb1BvaW50KDM0LjcxNDMyMiwgLTEzMS40Njg0MzUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihhbGVydCgnRGF0YSB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQgdG8gY2xvdWQgZmlyZXN0b3JlIScpKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBhbGVydChlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnNXB4IDAnIH19PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kRGF0YX0+U2VuZCBEYXRhIFRvIENsb3VkIEZpcmVzdG9yZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlVG9DbG91ZEZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Write.js\n");

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_InputBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.js\");\n/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostList */ \"./components/PostList.js\");\n/* harmony import */ var _components_Read__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Read */ \"./components/Read.js\");\n/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Write */ \"./components/Write.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth */ \"./auth.tsx\");\n\nvar _jsxFileName = \"/Users/ashminiweerakoon/Desktop/critechnew/pages/home.js\";\n\n\n\n\n\n\n\n\n\n\n\nfunction home() {\n  const {\n    user\n  } = (0,_auth__WEBPACK_IMPORTED_MODULE_10__.useAuth)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col min-h-screen bg-green-500\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n      className: \"text-7xl text-green-200 p-4 mx-20\",\n      children: `Welcome ${user ? user.email : 'no user signed in'}`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputBox__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Write__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Read__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostList__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWNldHJ5Ly4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbImhvbWUiLCJ1c2VyIiwidXNlQXV0aCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZixRQUFNO0FBQUVDO0FBQUYsTUFBV0MsK0NBQU8sRUFBeEI7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBLDRCQUNDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQU0sZUFBUyxFQUFDLG1DQUFoQjtBQUFBLGdCQUFzRCxXQUFVRCxJQUFJLEdBQUdBLElBQUksQ0FBQ0UsS0FBUixHQUFnQixtQkFBb0I7QUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBUUMsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0MsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBVUMsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZELGVBYUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJELGVBY0MsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRELGVBZUM7QUFBQSw2QkFBSyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBcUJBOztBQUVELCtEQUFlSCxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJzsgIFxuaW1wb3J0IElucHV0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCb3gnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJzsgIFxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3QnOyBcbmltcG9ydCBSZWFkRGF0YUZyb21DbG91ZEZpcmVzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL1JlYWQnOyAgXG5pbXBvcnQgV3JpdGVUb0Nsb3VkRmlyZXN0b3JlIGZyb20gJy4uL2NvbXBvbmVudHMvV3JpdGUnOyAgIFxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2F1dGgnXG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG5cdGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctZ3JlZW4tNTAwXCI+XG5cdFx0XHQ8SGVhZGVyLz5cblx0XHRcdDx0ZXh0IGNsYXNzTmFtZT1cInRleHQtN3hsIHRleHQtZ3JlZW4tMjAwIHAtNCBteC0yMFwiPntgV2VsY29tZSAke3VzZXIgPyB1c2VyLmVtYWlsIDogJ25vIHVzZXIgc2lnbmVkIGluJ31gfTwvdGV4dD5cblx0XHRcdHsvKiBoZWFkZXJcblx0XHRcdHRyZW5kaW5nIGNyaWRnZXQgY2FyZHNcblx0XHRcdGlucHV0IGJveFxuXHRcdFx0XG5cdFx0XHRmb290ZXIgKi99XG5cdFx0XHQ8SW5wdXRCb3ggLz5cblx0XHRcdDxXcml0ZVRvQ2xvdWRGaXJlc3RvcmUvPlxuXHRcdFx0PFJlYWREYXRhRnJvbUNsb3VkRmlyZXN0b3JlLz5cblx0XHRcdFxuXHRcdFx0ey8qIDxGb3JtLz4gKi99XG5cdFx0XHQ8YnI+PC9icj5cblx0XHRcdDxQb3N0TGlzdC8+XG5cdFx0XHQ8ZGl2PjxGb290ZXIvPjwvZGl2PlxuXG5cdFx0XHRcblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

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

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/firestore");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_tailwindcss_tailwind_css-node_modules_next_link_js","vendors-node_modules_heroicons_react_outline_esm_index_js-node_modules_heroicons_react_solid_-8cef9b","firebaseClient_ts","components_Footer_js","auth_tsx","components_Header_js-components_InputBox_js"], function() { return __webpack_exec__("./pages/home.js"); });
module.exports = __webpack_exports__;

})();