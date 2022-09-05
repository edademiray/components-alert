/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: white;\\n}\\n\\n.accordion-container {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  margin: 30px 10px;\\n  padding: 10px;\\n  border: 2px solid white;\\n  width: 400px;\\n  max-height: 500px;\\n}\\n\\n.accordion-element {\\n  margin: 5px auto;\\n  padding: 10px;\\n  border: 2px solid yellow;\\n}\\n\\n.accordion-element-header {\\n  border: 1px solid white;\\n  padding: 10px;\\n  font-size: 20px;\\n  line-height: 30px;\\n}\\n\\n.accordion-element-body {\\n  border: 1px solid white;\\n  padding: 5px;\\n  display: none;\\n  font-size: 14px;\\n}\\n\\n.open-element {\\n  display: block;\\n}\\n\\n.pagination-main-container {\\n  width: 500px;\\n  height: 500px;\\n  position: absolute;\\n  top: 52%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 1px solid white;\\n  font-family: monospace;\\n}\\n\\n.pagination-page {\\n  position: relative;\\n  width: 500px;\\n  height: 400px;\\n  font-size: 48px;\\n  padding-top: 40px;\\n  text-align: center;\\n  color: white;\\n  box-sizing: border-box;\\n}\\n\\n.pagination-bar {\\n  margin-bottom: 15px;\\n  max-width: 500px;\\n  display: flex;\\n  height: 100px;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  justify-content: center;\\n}\\n\\n.control-group-one {\\n  display: flex;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  padding: 35px 5px;\\n  border: 1px solid white;\\n}\\n\\n.control-index-group {\\n  display: flex;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  padding: 35px 10px;\\n  border: 1px solid white;\\n}\\n\\n.control-group-two {\\n  display: flex;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  padding: 35px 5px;\\n  border: 1px solid white;\\n}\\n\\n.pagination-index-button {\\n  height: 30px;\\n  width: 30px;\\n  border: 1px solid white;\\n  line-height: 30px;\\n  text-align: center;\\n}\\n\\n.control-button {\\n  height: 30px;\\n  width: 30px;\\n  border: 1px solid white;\\n  line-height: 30px;\\n  text-align: center;\\n}\\n\\n.alert-container {\\n  padding: 5px;\\n  max-height: 500;\\n  display: flex;\\n  margin: 20px;\\n  border-radius: 16px;\\n  align-items: center;\\n}\\n\\n.icon-container {\\n  display: inline-block;\\n  box-sizing: border-box;\\n  display: flex;\\n}\\n.icon-container img {\\n  width: 30px;\\n  max-width: 50px;\\n  height: auto;\\n  margin-right: 5px;\\n  margin-left: 5px;\\n}\\n\\n.alert-text-container {\\n  width: 700px;\\n  box-sizing: border-box;\\n  color: black;\\n  font-weight: lighter;\\n  margin-left: 15px;\\n}\\n.alert-text-container h5 {\\n  font-weight: bold;\\n  margin: 0;\\n  padding: 0;\\n}\\n.alert-text-container p {\\n  width: 100%;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  margin: 0;\\n  font-weight: lighter;\\n}\\n\\n.button-container {\\n  box-sizing: border-box;\\n  display: flex;\\n  margin-left: 30%;\\n}\\n.button-container button {\\n  border: none;\\n  margin: 0 5px 0 0;\\n  border-radius: 15px;\\n  color: white;\\n  font-weight: bold;\\n}\\n\\n.accept-icon {\\n  background-color: rgba(118, 173, 91, 0.5411764706);\\n}\\n\\n.decline-icon {\\n  background-color: rgb(210, 113, 113);\\n}\\n\\n.alert-close-img {\\n  border: none;\\n  background-color: rgba(255, 255, 255, 0);\\n  border-radius: 25px;\\n  font-size: 16px;\\n  line-height: 24px;\\n  margin-left: 15px;\\n  color: rgb(118, 116, 116) !important;\\n}\\n\\n.info {\\n  background-color: rgb(230, 247, 255);\\n  border: 2px solid #40A9FF;\\n}\\n\\n.error {\\n  background-color: rgb(255, 242, 240);\\n  border: 2px solid #FF4D4F;\\n}\\n\\n.success {\\n  background-color: rgb(246, 255, 237);\\n  border: 2px solid #52C41A;\\n}\\n\\n.warning {\\n  background-color: rgb(255, 251, 230);\\n  border: 2px solid #FAAD14;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\nbody {\\n  color: black;\\n  display: flex;\\n  justify-content: center;\\n  padding-top: 100px;\\n}\\n\\n.tab-button-container {\\n  height: 25px;\\n  width: auto;\\n  margin-left: 15px;\\n  padding: 0;\\n}\\n.tab-button-container button {\\n  border-top: 1px solid #8F4300 !important;\\n  border-left: 1px solid #8F4300 !important;\\n  border-right: 1px solid #8F4300 !important;\\n  border-bottom: none !important;\\n  font-weight: 400;\\n  height: 100%;\\n  padding: 5px;\\n  background-color: white;\\n  border-radius: 12px 12px 0 0;\\n  cursor: pointer;\\n  margin-left: 2px;\\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;\\n}\\n.tab-button-container button:hover {\\n  color: #8F4300;\\n}\\n\\n.content-container {\\n  background-color: gray;\\n  text-align: center;\\n  color: #8F4300;\\n  margin: 0;\\n  padding: 0;\\n  width: 500px;\\n  height: 500px;\\n  border: none;\\n  padding: 30px;\\n  border: px solid #8F4300;\\n  cursor: pointer;\\n}\\n\\n.content-text {\\n  width: auto;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.tabColor {\\n  background-color: #da8841;\\n  border-radius: -12px;\\n  color: #8F4300 !important;\\n  font-weight: bold !important;\\n}\\n\\n.clearTab {\\n  color: black !important;\\n  font-weight: 400 !important;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.tab-icon {\\n  vertical-align: middle;\\n  float: left;\\n  margin-right: 2px;\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n.rectangle-main {\\n  width: 250px;\\n  height: 500px;\\n  background-color: black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://components/./src/assets/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://components/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://components/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.scss":
/*!*******************************!*\
  !*** ./src/assets/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://components/./src/assets/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/accordion.js":
/*!*************************************!*\
  !*** ./src/components/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n\n\nconst accordion = (props) => {\n\t//#region Constants\n\n\tconst { accordionData: data } = props;\n\n\t//#endregion\n\n\t//#region Static Elements\n\n\tconst accordionContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['accordion-container'],\n\t});\n\n\t//#endregion\n\n\t//#region Utility Functions\n\n\tconst toggleAccordionElement = (element) => {\n\t\telement.classList.toggle('open-element');\n\t};\n\n\t//#endregion\n\n\t//#region Generate Dynamic Elements\n\n\tdata.forEach((element) => {\n\t\tconst accordionElement = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\t\tclassList: ['accordion-element'],\n\t\t});\n\t\tconst accordionElementHeader = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\t\tclassList: ['accordion-element-header'],\n\t\t\tinnerText: element.header,\n\t\t});\n\t\tconst accordionElementBody = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\t\tclassList: ['accordion-element-body'],\n\t\t\tinnerText: element.content,\n\t\t});\n\n\t\taccordionElementHeader.addEventListener('click', (e) => {\n\t\t\te.preventDefault();\n\t\t\ttoggleAccordionElement(accordionElementBody);\n\t\t});\n\n\t\taccordionElement.append(accordionElementHeader, accordionElementBody);\n\t\taccordionContainer.append(accordionElement);\n\t});\n\n\t//#endregion\n\n\treturn accordionContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n\n//# sourceURL=webpack://components/./src/components/accordion.js?");

/***/ }),

/***/ "./src/components/alert.js":
/*!*********************************!*\
  !*** ./src/components/alert.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n/* harmony import */ var _assets_img_warning_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/warning.svg */ \"./src/assets/img/warning.svg\");\n/* harmony import */ var _assets_img_success_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/success.svg */ \"./src/assets/img/success.svg\");\n/* harmony import */ var _assets_img_error_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/error.svg */ \"./src/assets/img/error.svg\");\n/* harmony import */ var _assets_img_info_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/info.svg */ \"./src/assets/img/info.svg\");\n\n\n\n\n\n\n\nconst loadAlert = (props) => {\n\tconst {\n\t\talertType,\n\t\theader,\n\t\tcontent,\n\t\tcloseAble = true,\n\t\thaveSelection = false,\n\t\tacceptFunction,\n\t\tdeclineFunction,\n\t\t\n\t} = props;\n\n\t//#region create element\n\n\tconst alertContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['alert-container'] });\n\tconst iconContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['icon-container'] });\n\tconst alertTextContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['alert-text-container'] });\n\tconst buttonContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['button-container'] });\n\n\tconst headerElement = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\ttype: 'h5',\n\t\tinnerText: header ? header : 'This is a Header, fyi',\n\t});\n\tconst contentElement = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\ttype: 'p',\n\t\tinnerText: content ? content : 'This is a content, fyi',\n\t});\n\n\n\n\n\tconst logo = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'img',classList:['alert-img'], src: _assets_img_success_svg__WEBPACK_IMPORTED_MODULE_2__ });\n\n\tconst closeButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'x',classList:['alert-close-img'] });\n\tconst acceptButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'Accept',classList:['accept-icon'] });\n\tconst declineButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'Decline',classList:['decline-icon'] });\n\n\t//#endregion\n\n\tswitch (alertType) {\n\t\tcase 'success':\n\t\t\talertContainer.classList.add('success');\n\t\t\tlogo.src = _assets_img_success_svg__WEBPACK_IMPORTED_MODULE_2__\n\n\t\t\tbreak;\n\t\tcase 'warning':\n\t\t\talertContainer.classList.add('warning');\n\t\t\tlogo.src = _assets_img_warning_svg__WEBPACK_IMPORTED_MODULE_1__\n\n\n\t\t\tbreak;\n\t\tcase 'error':\n\t\t\talertContainer.classList.add('error');\n\t\t\tlogo.src = _assets_img_error_svg__WEBPACK_IMPORTED_MODULE_3__\n\n\t\t\t\n\t\t\tbreak;\n\t\tcase 'info':\n\t\t\talertContainer.classList.add('info');\n\t\t\tlogo.src = _assets_img_info_svg__WEBPACK_IMPORTED_MODULE_4__\n\n\t\t\tbreak;\n\n\t\tdefault:\n\t\t\talertContainer.classList.add('warning');\n\t\t\tlogo.src = _assets_img_warning_svg__WEBPACK_IMPORTED_MODULE_1__\n\n\t\t\tbreak;\n\t}\n\n\tcloseAble ? '' : closeButton.classList.add('hide');\n\thaveSelection ? '' : acceptButton.classList.add('hide');\n\thaveSelection ? '' : declineButton.classList.add('hide');\n\n\tconst closeFunction = () => {\n\t\talertContainer.classList.add('hide')\n\t}\n\n    acceptButton.addEventListener('click', acceptFunction)\n    declineButton.addEventListener('click', declineFunction)\n\tcloseButton.addEventListener('click',closeFunction)\n\n\t//#region append\n\n\ticonContainer.append(logo);\n\talertTextContainer.append(headerElement, contentElement);\n\tbuttonContainer.append(acceptButton, declineButton, closeButton);\n\talertContainer.append(iconContainer, alertTextContainer, buttonContainer);\n\n\t//#endregion\n\n\treturn alertContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAlert);\n\n\n//# sourceURL=webpack://components/./src/components/alert.js?");

/***/ }),

/***/ "./src/components/editableArea.js":
/*!****************************************!*\
  !*** ./src/components/editableArea.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n\r\n\r\nconst loadArea = (props ) =>{\r\n    const mainReactangle = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({classList:['rectangle-main']})\r\n\r\n\r\n\r\n    return mainReactangle;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadArea);\r\n\n\n//# sourceURL=webpack://components/./src/components/editableArea.js?");

/***/ }),

/***/ "./src/components/pagination.js":
/*!**************************************!*\
  !*** ./src/components/pagination.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n\n\nconst renderPage = (pageNumber) => {\n\tconst paginationPageList = [\n\t\t...document.getElementsByClassName('pagination-page'),\n\t];\n\tif (paginationPageList.length) {\n\t\tpaginationPageList[0].innerText = `This is Page ${pageNumber}`;\n\t}\n};\n\nconst paginationBar = (pageCount) => {\n\tconst paginationBar = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['pagination-bar'] });\n\tconst goFirstButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['control-button'],\n\t\tinnerText: '<<',\n\t});\n\tconst goBackwardButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['control-button'],\n\t\tinnerText: '<',\n\t});\n\tconst goForwardButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['control-button'],\n\t\tinnerText: '>',\n\t});\n\tconst goLastButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['control-button'],\n\t\tinnerText: '>>',\n\t});\n\n\tconst controlGroupOne = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['control-group-one'] });\n\tconst controlIndexGroup = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['control-index-group'],\n\t});\n\tconst controlGroupTwo = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['control-group-two'] });\n\tlet pageIndex = 1;\n\n\tconst buttonCount = pageCount >= 10 ? 10 : pageCount;\n\n\tconst updatecontrolIndexGroupForward = (index, pageCount) => {\n\t\tconst startingIndex = index + 8 > pageCount ? pageCount - 9 : index - 1;\n\t\tupdateControlIndexGroup(startingIndex);\n\t};\n\tconst updatecontrolIndexGroupBackward = (index) => {\n\t\tconst startingIndex = index - 8 < 1 ? 1 : index - 8;\n\t\tupdateControlIndexGroup(startingIndex);\n\t};\n\n\tconst updateControlIndexGroup = (index) => {\n\t\tconst paginationIndexButtonList = [\n\t\t\t...document.getElementsByClassName('pagination-index-button'),\n\t\t];\n\n\t\tif (index < 1) {\n\t\t\tindex = 1;\n\t\t} else if (index > pageCount - buttonCount + 1) {\n\t\t\tindex = pageCount - buttonCount + 1;\n\t\t}\n\t\tpaginationIndexButtonList.forEach((button, iteratorIndex) => {\n\t\t\tbutton.innerText = index + iteratorIndex;\n\t\t});\n\t};\n\n\tconst goFirst = () => {\n\t\tpageIndex = 1;\n\t\trenderPage(1);\n\t\tupdateControlIndexGroup(1);\n\t};\n\tconst goLast = () => {\n\t\tpageIndex = pageCount;\n\t\trenderPage(pageCount);\n\t\tupdateControlIndexGroup(pageIndex - buttonCount + 1);\n\t};\n\n\tconst goBackward = () => {\n\t\tpageIndex = pageIndex - 1 < 1 ? 1 : pageIndex - 1;\n\t\tconsole.log(pageIndex);\n\t\trenderPage(pageIndex);\n\t\tupdateControlIndexGroup(pageIndex);\n\t};\n\n\tconst goForward = () => {\n\t\tpageIndex = pageIndex + 1 > pageCount ? pageCount : pageIndex + 1;\n\t\trenderPage(pageIndex);\n\t\tupdateControlIndexGroup(pageIndex - buttonCount + 1);\n\t};\n\tgoFirstButton.addEventListener('click', (e) => {\n\t\te.preventDefault();\n\t\tgoFirst();\n\t});\n\tgoLastButton.addEventListener('click', (e) => {\n\t\te.preventDefault();\n\t\tgoLast();\n\t});\n\tgoForwardButton.addEventListener('click', (e) => {\n\t\te.preventDefault();\n\t\tgoForward();\n\t});\n\tgoBackwardButton.addEventListener('click', (e) => {\n\t\te.preventDefault();\n\t\tgoBackward();\n\t});\n\n\tfor (let i = 0; i < buttonCount; i++) {\n\t\tconst paginationIndexButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\t\tclassList: ['pagination-index-button'],\n\t\t\tinnerText: i + 1,\n\t\t});\n\t\tpaginationIndexButton.addEventListener('click', (e) => {\n\t\t\te.preventDefault();\n\t\t\tconst index = parseInt(paginationIndexButton.innerText);\n\t\t\trenderPage(index);\n\t\t\tpageIndex = index;\n\t\t\tif (pageCount > 10 && i < 2) {\n\t\t\t\tupdatecontrolIndexGroupBackward(index, pageCount);\n\t\t\t} else if (pageCount > 10 && i > 7) {\n\t\t\t\tupdatecontrolIndexGroupForward(index, pageCount);\n\t\t\t}\n\t\t});\n\n\t\tcontrolIndexGroup.append(paginationIndexButton);\n\t}\n\n\tcontrolGroupOne.append(goFirstButton, goBackwardButton);\n\tcontrolGroupTwo.append(goForwardButton, goLastButton);\n\n\tpaginationBar.append(controlGroupOne, controlIndexGroup, controlGroupTwo);\n\n\treturn paginationBar;\n};\n\nconst loadPagination = (pageCount) => {\n\tconst paginationMainContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['pagination-main-container'],\n\t});\n\tconst paginationPageContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\tclassList: ['pagination-page'],\n\t\tinnerText: `This is Page 1`,\n\t});\n\tconst pagination = paginationBar(pageCount);\n\n\tpaginationMainContainer.append(paginationPageContainer, pagination);\n\n\treturn paginationMainContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPagination);\n\n\n//# sourceURL=webpack://components/./src/components/pagination.js?");

/***/ }),

/***/ "./src/components/tab.js":
/*!*******************************!*\
  !*** ./src/components/tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n/* harmony import */ var _assets_img_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/info.svg */ \"./src/assets/img/info.svg\");\n/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/alert */ \"./src/components/alert.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ \"./src/components/accordion.js\");\n/* harmony import */ var _dumyData_accordionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dumyData/accordionData */ \"./src/dumyData/accordionData.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination */ \"./src/components/pagination.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Loadtab = (props) => {\r\n\r\n    \r\n    const error = (0,_components_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ alertType: 'error', closeAble: false });\r\n    const info = (0,_components_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ alertType: 'info' })\r\n    const warning = (0,_components_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ alertType: 'warning' })\r\n    const succes = (0,_components_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ alertType: 'success' })\r\n\r\n    const tabContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['tab-container'] })\r\n    const tabButtonContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['tab-button-container'] })\r\n    const contentContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['content-container'] })\r\n\r\n    const tabIcon = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({type:'img',src:_assets_img_info_svg__WEBPACK_IMPORTED_MODULE_1__,classList:['tab-icon']})\r\n\r\n    const btnFirst = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'Alihan Keskin\\'in Haşmetli Componenti', classList: ['tabColor'] })\r\n    const btnSecond = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'Accordion', classList: ['second-button'] })\r\n    const btnThird = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'Pagination', classList: ['third-button'] })\r\n\r\n    const contentText = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'p', classList: ['content-text'], innerText: 'Deneme texti' })\r\n\r\n    function handleAccordionLoader() {\r\n        contentContainer.replaceChildren((0,_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ accordionData: _dumyData_accordionData__WEBPACK_IMPORTED_MODULE_4__.accordionData }))\r\n        contentContainer.classList.add('bg-change')\r\n        btnSecond.classList.add('tabColor')\r\n\r\n        btnFirst.classList.remove('tabColor')\r\n        btnThird.classList.remove('tabColor')\r\n\r\n\r\n    }\r\n\r\n    function handleAlertLoader() {\r\n\r\n        contentContainer.replaceChildren(error, info, warning, succes)\r\n\r\n        btnFirst.classList.add('tabColor')\r\n\r\n\r\n        btnSecond.classList.remove('tabColor')\r\n        btnThird.classList.remove('tabColor')\r\n\r\n\r\n    }\r\n    function handlePagination() {\r\n        contentContainer.replaceChildren((0,_pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(50))\r\n        btnThird.classList.add('tabColor')\r\n\r\n\r\n        btnSecond.classList.remove('tabColor')\r\n        btnFirst.classList.remove('tabColor')\r\n\r\n\r\n\r\n    }\r\n    btnFirst.addEventListener('click', handleAlertLoader);\r\n    btnSecond.addEventListener('click', handleAccordionLoader);\r\n    btnThird.addEventListener('click', handlePagination);\r\n\r\n    const btnBos = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'button', innerText: 'bos buton' })\r\n\r\n    btnBos.addEventListener('click', function ss() {\r\n\r\n        btnFirst.removeEventListener('click', handleAlertLoader);\r\n        btnSecond.removeEventListener('click', handleAccordionLoader);\r\n        btnThird.removeEventListener('click', handlePagination);\r\n\r\n    })\r\n\r\n    //#region appends\r\n    btnFirst.append(tabIcon)\r\n    tabButtonContainer.append(btnFirst, btnSecond, btnThird)\r\n    contentContainer.append(error, info, warning, succes)\r\n    tabContainer.append(tabButtonContainer, contentContainer, btnBos)\r\n    //#endregion appends\r\n\r\n    return tabContainer\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loadtab);\n\n//# sourceURL=webpack://components/./src/components/tab.js?");

/***/ }),

/***/ "./src/dumyData/accordionData.js":
/*!***************************************!*\
  !*** ./src/dumyData/accordionData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordionData\": () => (/* binding */ accordionData)\n/* harmony export */ });\nconst accordionData = [\n    {\n        header : 'Lorem Ipsum 1',\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n    },\n    {\n        header : 'Lorem Ipsum 2',\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n    },\n    {\n        header : 'Lorem Ipsum 3',\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n    },\n    {\n        header : 'Lorem Ipsum 4',\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n    },\n    {\n        header : 'Lorem Ipsum 5',\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n    },\n    {\n        header : 'Lorem Ipsum 6',\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n    }\n]\n\n\n\n//# sourceURL=webpack://components/./src/dumyData/accordionData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.scss */ \"./src/assets/style.scss\");\n/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab */ \"./src/components/tab.js\");\n/* harmony import */ var _components_editableArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editableArea */ \"./src/components/editableArea.js\");\n\n\n\n//import loadAlert from './components/alert';\n\n// const acceptFunction = () => {\n// \twindow.alert('This is acceptable');\n// };\n// const declineFunction = () => {\n// \twindow.alert('This is unacceptable');\n// };\n\n\n\n// const alertType = 'warning'\n\n// const info = loadAlert({ alertType: 'info', header: \"Bu Header Eda'ya ait\" });\n// const success = loadAlert({ alertType: 'success', content: ' Enes burayı işgal etti Enes burayı işgal etti Enes burayı işgal etti' });\n// const error = loadAlert({ alertType: 'error', closeAble: false });\n// const warning = loadAlert({\n// \talertType,\n// \thaveSelection: [],\n// \tacceptFunction,\n// \tdeclineFunction,\n// });\n\n// document.body.append(info, success, error, warning);\n\n// import loadPagination from './components/pagination';\n// import accordion from './components/accordion';\n// import {accordionData} from './dumyData/accordionData'\n// console.log(accordionData);\n// const pagination = loadPagination(50)\n// const as = accordion({accordionData});\n\n\n\ndocument.body.append((0,_components_editableArea__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\n//# sourceURL=webpack://components/./src/index.js?");

/***/ }),

/***/ "./src/utilities/createElement.js":
/*!****************************************!*\
  !*** ./src/utilities/createElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = (config) => {\n    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config\n\n    const container = document.createElement(type);\n    id              ? container.id = id                                                     : '';\n    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';\n    innerText       ? container.innerText = innerText                                       : '';\n    innerHTML       ? container.innerHTML = innerHTML                                       : '';\n    src             ? container.src = src                                                   : '';\n    contentEditable ? container.contentEditable = contentEditable                           : '';\n    row             ? container.row = row                                                   : '';\n    multiple        ? container.multiple = multiple                                         : '';\n    size            ? container.size = size                                                 : '';\n    placeholder     ? container.placeholder = placeholder                                   : '';\n\n    if (options) {\n        options.forEach((value, index) => {\n            let option = document.createElement('option');\n            optionValues ? option.value = optionValues[index] : option.value = value;            \n            option.innerText = value;\n            container.appendChild(option);\n        })\n    }\n\n    return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://components/./src/utilities/createElement.js?");

/***/ }),

/***/ "./src/assets/img/error.svg":
/*!**********************************!*\
  !*** ./src/assets/img/error.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae70b7b32f443657a7c8.svg\";\n\n//# sourceURL=webpack://components/./src/assets/img/error.svg?");

/***/ }),

/***/ "./src/assets/img/info.svg":
/*!*********************************!*\
  !*** ./src/assets/img/info.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa138b5ad561f2548494.svg\";\n\n//# sourceURL=webpack://components/./src/assets/img/info.svg?");

/***/ }),

/***/ "./src/assets/img/success.svg":
/*!************************************!*\
  !*** ./src/assets/img/success.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2eed6825fa60b6b9f2ef.svg\";\n\n//# sourceURL=webpack://components/./src/assets/img/success.svg?");

/***/ }),

/***/ "./src/assets/img/warning.svg":
/*!************************************!*\
  !*** ./src/assets/img/warning.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7a12f7bb7d1d0984df7.svg\";\n\n//# sourceURL=webpack://components/./src/assets/img/warning.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;