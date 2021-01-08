/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {font-family: Arial, Helvetica, sans-serif;}\\n\\n/* The Modal (background) */\\n.modal {\\n  display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 1; /* Sit on top */\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /* Enable scroll if needed */\\n  background-color: rgb(0,0,0); /* Fallback color */\\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n  -webkit-animation-name: fadeIn; /* Fade in the background */\\n  -webkit-animation-duration: 0.4s;\\n  animation-name: fadeIn;\\n  animation-duration: 0.4s\\n}\\n\\n/* Modal Content */\\n.modal-content {\\n  position: fixed;\\n  bottom: 0;\\n  background-color: #fefefe;\\n  width: 100%;\\n  -webkit-animation-name: slideIn;\\n  -webkit-animation-duration: 0.4s;\\n  animation-name: slideIn;\\n  animation-duration: 0.4s\\n}\\n\\n/* The Close Button */\\n.close {\\n  color: white;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.modal-header {\\n  padding: 2px 16px;\\n  background-color: #5cb85c;\\n  color: white;\\n}\\n\\n.modal-body {padding: 2px 16px;}\\n\\n.modal-footer {\\n  padding: 2px 16px;\\n  background-color: #5cb85c;\\n  color: white;\\n}\\n\\n/* Add Animation */\\n@-webkit-keyframes slideIn {\\n  from {bottom: -300px; opacity: 0}\\n  to {bottom: 0; opacity: 1}\\n}\\n\\n@keyframes slideIn {\\n  from {bottom: -300px; opacity: 0}\\n  to {bottom: 0; opacity: 1}\\n}\\n\\n@-webkit-keyframes fadeIn {\\n  from {opacity: 0}\\n  to {opacity: 1}\\n}\\n\\n@keyframes fadeIn {\\n  from {opacity: 0}\\n  to {opacity: 1}\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ rng\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://cohort2-webpack-todo/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/controller/init.js":
/*!********************************!*\
  !*** ./src/controller/init.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => /* binding */ init\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/controller/localStorage.js\");\n/* harmony import */ var _model_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/List */ \"./src/model/List.js\");\n/* harmony import */ var _view_Dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/Dom */ \"./src/view/Dom.js\");\n\n\n\n\nlet todos = [];\n\nfunction init(){\n  console.log(`controller/init`);\n  // Load default todos from local storage if they exist\n  if((0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.todosExistsCtrl)()){\n    todos = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.loadTodosCtrl)();\n  } else {\n    // otherwise create new todos and save to local storage\n    todos = _model_List__WEBPACK_IMPORTED_MODULE_1__.List.generateDefaultTodos();\n    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTodosCtrl)(todos);\n  }\n\n  // Display todos on the dom\n  _view_Dom__WEBPACK_IMPORTED_MODULE_2__.Dom.displayTodos(todos);\n  _view_Dom__WEBPACK_IMPORTED_MODULE_2__.Dom.displayOptions(todos);\n}\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/controller/init.js?");

/***/ }),

/***/ "./src/controller/localStorage.js":
/*!****************************************!*\
  !*** ./src/controller/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todosExistsCtrl\": () => /* binding */ todosExistsCtrl,\n/* harmony export */   \"loadTodosCtrl\": () => /* binding */ loadTodosCtrl,\n/* harmony export */   \"saveTodosCtrl\": () => /* binding */ saveTodosCtrl,\n/* harmony export */   \"saveTodoCtrl\": () => /* binding */ saveTodoCtrl,\n/* harmony export */   \"updateTodoCtrl\": () => /* binding */ updateTodoCtrl\n/* harmony export */ });\n// Return true of todos exist in local storage\nfunction todosExistsCtrl(){\n  console.log(`controller/localStorage.todosExists`);\n  let todos = loadTodosCtrl();\n  return todos != undefined && todos != null;\n}\n\n// Loads todos from local storage\nfunction loadTodosCtrl(){\n  console.log(`controller/localStorage.loadTodos`);\n  return JSON.parse(localStorage.getItem(\"todos\"));\n}\n\n// Save todos to local storage\nfunction saveTodosCtrl(todos){\n  console.log(`controller/localStorage.saveTodos`);\n  return localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\n\n// Save todo to local storage\nfunction saveTodoCtrl(todo){\n  console.log(`controller/localStorage.saveTodo`);\n  let todos = loadTodosCtrl();\n  todos.push(todo);\n  saveTodosCtrl(todos);\n}\n\n// Udpate todo in local storage\nfunction updateTodoCtrl(updateObj){\n  console.log(`controller/localStorage.updateTodo`);\n  let id = updateObj.id;\n  // Load todos from local storage\n  let todos = loadTodosCtrl();\n  // Find todo with the given id and update it\n  todos.forEach((item, index) => {\n    if(item.id === id){\n      console.log(`controller/localStorage.updateTodo. Found a todo. Completed: ${updateObj.completed}`);\n      todos[index] = updateObj;\n    }\n  });\n  saveTodosCtrl(todos);\n}\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/controller/localStorage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _controller_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/init */ \"./src/controller/init.js\");\n\n\n\nconsole.log(`index.js`);\n(0,_controller_init__WEBPACK_IMPORTED_MODULE_1__.init)();\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/index.js?");

/***/ }),

/***/ "./src/model/Category.js":
/*!*******************************!*\
  !*** ./src/model/Category.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => /* binding */ Category\n/* harmony export */ });\nconst Category = (() => {\n\n    const createNew = (title) => {\n      console.log(`model/Category.createNew`);\n      return {\n        title: title,\n      }\n    }\n    return {createNew}\n\n})();\n\n\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/model/Category.js?");

/***/ }),

/***/ "./src/model/List.js":
/*!***************************!*\
  !*** ./src/model/List.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => /* binding */ List\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/model/Todo.js\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ \"./src/model/Category.js\");\n\n\n\nconst List = (() => {\n\n    const generateDefaultTodos = () => {\n      console.log(`model/List.generateDefaultTodos`);\n      let todo_1 = _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo.generateSingleTodo(\"Pay Netflix Subscription\", _Category__WEBPACK_IMPORTED_MODULE_1__.Category.createNew(\"Personal\"), \"Make sure to pay the bill before the end of the month\", false);\n      let todo_2 = _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo.generateSingleTodo(\"Get coffee creamer\", _Category__WEBPACK_IMPORTED_MODULE_1__.Category.createNew(\"Personal\"), \"Make sure it's the Starbucks kind\", false);\n      let todo_3 = _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo.generateSingleTodo(\"Submit new feature\", _Category__WEBPACK_IMPORTED_MODULE_1__.Category.createNew(\"Work\"), \"Don't forget to pull latest changes\", false);\n      return [todo_1, todo_2, todo_3];\n    }\n\n    const printTodos = (todos) => {\n      console.log(`model/List.printTodos`);\n      let returnString = \"\\n\";\n\n      todos.forEach((item) => {\n        returnString += item.title + \" \\n\";\n      })\n      return returnString;\n    }\n\n\n\n    return {generateDefaultTodos, printTodos}\n\n})();\n\n\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/model/List.js?");

/***/ }),

/***/ "./src/model/Todo.js":
/*!***************************!*\
  !*** ./src/model/Todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => /* binding */ Todo\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _controller_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/localStorage */ \"./src/controller/localStorage.js\");\n\n\n\n\nconst Todo = (() => {\n\n    const generateSingleTodo = (title, category, description, completed) => {\n      // TODO Remove category later\n      console.log(`model/List.generateSingleTodo ${category}`);\n      return {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)(),\n        title: title,\n        category: category,\n        description: description,\n        completed: completed\n      }\n    }\n\n    const updateTodo = (todo) => {\n      console.log(`single todo being updated in model/Todo ${JSON.stringify(todo)}`);\n      (0,_controller_localStorage__WEBPACK_IMPORTED_MODULE_0__.updateTodoCtrl)(todo);\n    }\n\n    return {generateSingleTodo, updateTodo}\n\n})();\n\n\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/model/Todo.js?");

/***/ }),

/***/ "./src/view/Dom.js":
/*!*************************!*\
  !*** ./src/view/Dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dom\": () => /* binding */ Dom\n/* harmony export */ });\n/* harmony import */ var _controller_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/localStorage */ \"./src/controller/localStorage.js\");\n/* harmony import */ var _model_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Todo */ \"./src/model/Todo.js\");\n/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Category */ \"./src/model/Category.js\");\n\n\n\n\nconst Dom = (() => {\n\n    const displayTodos = (todos) => {\n      console.log(`view/Dom.displayTodos`);\n      // Display the given todos in the right container\n      let todosElemParent = $('<div></div>');\n      todos.forEach((todo) => {\n        let todoElemParent = $('<div></div>');\n        let todoElemCategory = $('<p></p>').text(`Category: ${todo.category.title}`);\n        let todoElemTitle = $('<h2></h2>').text(`Title: ${todo.title}`);\n        let todoElemDescription = $('<p></p>').text(`Description: ${todo.description}`);\n        let todoElemCompleted = $('<p></p>').text(`Completed?: ${todo.completed}`);\n        // Create checkbox element\n        let todoElemMarkComplete = todo.completed? $('<input type=\"checkbox\" checked /> Done') : $('<input type=\"checkbox\" /> Done')\n        // Attach a change event listener\n        todoElemMarkComplete.change(function () {\n          todo.completed = !todo.completed;\n          _model_Todo__WEBPACK_IMPORTED_MODULE_1__.Todo.updateTodoCtrl(todo);\n          refreshPage();\n        });\n        let todoElemSeperator = $('<hr>');\n        todoElemParent.append(todoElemCategory, todoElemTitle, todoElemDescription, todoElemCompleted, todoElemMarkComplete, todoElemSeperator);\n        todosElemParent.append(todoElemParent);\n      });\n      $('#content').append(todosElemParent);\n    }\n\n    const refreshPage = () => {\n      console.log(`view/Dom.refreshPage`);\n      // Refresh page here\n       location.reload();\n    }\n\n    const displayOptions = () => {\n      // Setup modal\n      console.log(`view/Dom.displayOptions`);\n      let optionsElemParent = $('<div></div>');\n      let optionOpenNewTodo = $('<button id=\"openModal\">Create New Todo</button>');\n      let closeModal = $('#closeModal');\n\n      // Add click event listener to open modal button\n      optionOpenNewTodo.click(function () {\n        console.log(`view/Dom.displayOptions button clicked`);\n         $(\"#myModal\").show();\n      });\n\n      // Make sure modal closes when we press x\n      closeModal.click(function () {\n        console.log(`view/Dom.displayOptions close button clicked`);\n        $(\"#myModal\").hide();\n      });\n\n      // Add open modal button to content\n      optionsElemParent.append(optionOpenNewTodo);\n      $('#content').append(optionsElemParent);\n\n      // Add form fields to modal\n      let htmlForm = '';\n      htmlForm += '<div id=\"inputFormRow\">';\n      htmlForm += '<div class=\"input-group mb-3\">';\n      htmlForm += '<input type=\"text\" id=\"newCategory\" name=\"category\" class=\"form-control m-input\" placeholder=\"Enter category\" autocomplete=\"off\">';\n      htmlForm += '<input type=\"text\" id=\"newTitle\" name=\"title\" class=\"form-control m-input\" placeholder=\"Enter title\" autocomplete=\"off\">';\n      htmlForm += '<input type=\"text\" id=\"newDescription\" name=\"description\" class=\"form-control m-input\" placeholder=\"Enter description\" autocomplete=\"off\">';\n      htmlForm += '<div id=\"addTodoParent\" class=\"input-group-append\">';\n      htmlForm += '<button id=\"addTodo\" type=\"button\" class=\"btn btn-danger\">Add</button>';\n      htmlForm += '</div>';\n      htmlForm += '</div>';\n\n      let modalBody = $('#modal-body');\n      modalBody.append(htmlForm);\n\n      // Add click event listener to addTodo button\n      let addTodoButton = $('#addTodo');\n      addTodoButton.click(function () {\n        console.log(`view/Dom.displayOptions add todo button clicked`);\n        let categoryTitle = $('#newCategory').val();\n        let title = $('#newTitle').val();\n        let description = $('#newDescription').val();\n        if(categoryTitle.length <= 2 || title.length <= 2){\n          alert(\"Sorry category and title must be at least 2 characters long\");\n        }else {\n          console.log(`Category: ${categoryTitle}, Title: ${title}, Description: ${description}, `);\n          const completed = false;\n          const category = _model_Category__WEBPACK_IMPORTED_MODULE_2__.Category.createNew(categoryTitle);\n          let newTodo = _model_Todo__WEBPACK_IMPORTED_MODULE_1__.Todo.generateSingleTodo(title, category, description, completed);\n          (0,_controller_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTodoCtrl)(newTodo);\n        }\n\n      });\n\n    }\n\n    return {displayTodos, refreshPage, displayOptions}\n})();\n\n\n\n\n//# sourceURL=webpack://cohort2-webpack-todo/./src/view/Dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;