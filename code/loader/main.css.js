var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};

module.exports = exported;

//# sourceURL=webpack:///./src/main.css?