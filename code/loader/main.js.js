/// 这里调用了 __webpack_require.r 这个方法。这个方法在 整体bundle.js的自执行函数中有定义。
__webpack_require__.r(__webpack_exports__);

/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);


let div = document.getElementById('div')

div.classList.add('test')

console.log('css-loader')

//# sourceURL=webpack:///./src/main.js?