(function(modules) { // webpackBootstrap
  // The module cache
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {

    // Check if module is in cache
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }


  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function(exports) {
    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function(value, mode) {
    if(mode & 1) value = __webpack_require__(value);
    if(mode & 8) return value;
    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ?
      function getDefault() { return module['default']; } :
      function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

  // __webpack_public_path__
  __webpack_require__.p = "";


  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./src/main.js");
})
/************************************************************************/
 ({
   "./node_modules/css-loader/dist/cjs.js!./src/main.css":
   (function(module, exports, __webpack_require__) {
     eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".test{\\n  color: red;\\n  background-color: blue;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");
    }),
  
  "./node_modules/css-loader/dist/runtime/api.js":
  (function(module, exports, __webpack_require__) {
    "use strict";
    eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");
  }),

  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  (function(module, exports, __webpack_require__) {
    "use strict";
    eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by browserhacks\n @see http: browserhacks.com #hack-e71d8692f65334173fee715c222cb805\n tests for existence of standard globals is to allow style-loader\n operate correctly into non-standard environments\n https: github.com webpack-contrib style-loader issues 177\n memo="Boolean(window" && document document.all !window.atob);\n }\n\n return memo;\n };\n}();\n\nvar gettarget="function" gettarget() {\n var function memorize(target) if (typeof memo[target]="==" 'undefined') styletarget="document.querySelector(target);" special case head iframe instead itself\n\n (window.htmliframeelement instanceof window.htmliframeelement) try this will throw an exception access blocked\n due cross-origin restrictions\n } catch (e) istanbul ignore next\n }\n memo[target];\n stylesindom="[];\n\nfunction" getindexbyidentifier(identifier) result="-1;\n\n" (var i="0;" < stylesindom.length; i++) (stylesindom[i].identifier="==" identifier) break;\n result;\n}\n\nfunction modulestodom(list, options) idcountmap="{};\n" identifiers="[];\n\n" list.length; item="list[i];\n" id="options.base" ? item[0] + options.base : item[0];\n count="idCountMap[id]" || 0;\n identifier="\"\".concat(id," \" \").concat(count);\n idcountmap[id]="count" 1;\n index="getIndexByIdentifier(identifier);\n" obj="{\n" css: item[1],\n media: item[2],\n sourcemap: item[3]\n };\n\n (index !="=" -1) stylesindom[index].references++;\n stylesindom[index].updater(obj);\n else stylesindom.push({\n identifier: identifier,\n updater: addstyle(obj, options),\n references: 1\n });\n identifiers.push(identifier);\n identifiers;\n}\n\nfunction insertstyleelement(options) style="document.createElement('style');\n" attributes="options.attributes" {};\n\n attributes.nonce="==" nonce="true" __webpack_require__.nc undefined;\n\n (nonce) object.keys(attributes).foreach(function (key) style.setattribute(key, attributes[key]);\n });\n\n options.insert="==" 'function') options.insert(style);\n target="getTarget(options.insert" 'head');\n\n (!target) new error(\"couldn't find a target. probably means that the value 'insert' parameter invalid.\");\n target.appendchild(style);\n style;\n}\n\nfunction removestyleelement(style) if\n (style.parentnode="==" null) false;\n style.parentnode.removechild(style);\n}\n * next \n\n\nvar replacetext="function" replacetext() textstore="[];\n" replace(index, replacement) textstore[index]="replacement;\n" textstore.filter(boolean).join('\\n');\n };\n}();\n\nfunction applytosingletontag(style, index, remove, obj) css="remove" '' obj.media \"@media \".concat(obj.media, {\").concat(obj.css, \"}\") obj.css; old ie\n\n \n\n (style.stylesheet) style.stylesheet.csstext="replaceText(index," css);\n cssnode="document.createTextNode(css);\n" childnodes="style.childNodes;\n\n" (childnodes[index]) style.removechild(childnodes[index]);\n (childnodes.length) style.insertbefore(cssnode, childnodes[index]);\n style.appendchild(cssnode);\n }\n}\n\nfunction applytotag(style, options, media="obj.media;\n" sourcemap="obj.sourceMap;\n\n" (media) style.setattribute('media', media);\n style.removeattribute('media');\n (sourcemap btoa) sourcemappingurl="data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," \");\n \n\n\n while (style.firstchild) style.removechild(style.firstchild);\n style.appendchild(document.createtextnode(css));\n }\n}\n\nvar singleton="null;\nvar" singletoncounter="0;\n\nfunction" style;\n update;\n remove;\n\n (options.singleton) styleindex="singletonCounter++;\n" (singleton="insertStyleElement(options));\n" update="applyToSingletonTag.bind(null," style, styleindex, false);\n remove="applyToSingletonTag.bind(null," true);\n options);\n\n remove() removestyleelement(style);\n };\n update(obj);\n updatestyle(newobj) (newobj) (newobj.css="==" obj.css newobj.media="==" newobj.sourcemap="==" obj.sourcemap) return;\n update(obj="newObj);\n" remove();\n };\n}\n\nmodule.exports="function" (list, options="options" {}; force single-tag solution on ie6-9, which has hard limit # <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
  }),
  
  "./src/main.css":
  (function(module, exports, __webpack_require__) {
    eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/main.css?");
  }),

  "./src/main.js":
  (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet div = document.getElementById('div')\n\ndiv.classList.add('test')\n\nconsole.log('css-loader')\n\n//# sourceURL=webpack:///./src/main.js?");
  })
});</=>