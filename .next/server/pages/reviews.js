(() => {
var exports = {};
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 5178:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Reviews_title__Ngsh7",
	"reviewName": "Reviews_reviewName__KyS3E",
	"reviewText": "Reviews_reviewText__KTQ1F",
	"reviews": "Reviews_reviews__Tv8zh",
	"review": "Reviews_review__h62cU",
	"mainFeedbacksWrap": "Reviews_mainFeedbacksWrap___WMiy",
	"upperWrapper": "Reviews_upperWrapper__TNN6K",
	"container": "Reviews_container__0_GTo"
};


/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5178);
/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Reviews = ({ reviews  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Магазин одежды inStyle | Отзывы"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "Магазин одежды inStyle"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mainFeedbacksWrap),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                            children: "Отзывы клиентов"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().reviews),
                            children: reviews.length && reviews.slice(0, 20).map((res)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().review),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().reviewName),
                                            children: res.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_3___default().reviewText),
                                            children: `${res.body.slice(0, 200)}...`
                                        })
                                    ]
                                }, res.id);
                            })
                        })
                    ]
                })
            })
        ]
    });
};
async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    return {
        props: {
            reviews: data.slice(0, 10)
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(970));
module.exports = __webpack_exports__;

})();