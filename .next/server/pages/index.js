(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6809:
/***/ ((module) => {

// Exports
module.exports = {
	"sliderWrapper": "Slider_sliderWrapper__b1Rtq",
	"mainSlider": "Slider_mainSlider__hukqb",
	"swiperImageWrap": "Slider_swiperImageWrap__eSzSG",
	"sliderImage": "Slider_sliderImage__d4ZJa",
	"sliderTitle": "Slider_sliderTitle__xrgmm",
	"swiperTitleProduct": "Slider_swiperTitleProduct__z88k_"
};


/***/ }),

/***/ 3275:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Home_title__q0Qg4",
	"text": "Home_text__8moDw",
	"btn": "Home_btn__gqI1M",
	"mainImage": "Home_mainImage__2YHFT",
	"container": "Home_container__97eC3",
	"containerMain": "Home_containerMain__wBg0Z",
	"bd": "Home_bd__Ljz5M",
	"headerStyle": "Home_headerStyle__2vbAD",
	"upperWrapper": "Home_upperWrapper__6QxzX",
	"mainTextWrap": "Home_mainTextWrap__aGdI7",
	"padText": "Home_padText__GJShZ",
	"footerInner": "Home_footerInner__T8BCa",
	"mainErrorWrap": "Home_mainErrorWrap__TXf9u"
};


/***/ }),

/***/ 7151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9076);
/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_scss_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6503);
/* harmony import */ var swiper_scss_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_scss_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_scss_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2708);
/* harmony import */ var swiper_scss_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_scss_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_scss_autoplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2977);
/* harmony import */ var swiper_scss_autoplay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_scss_autoplay__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6809);
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Slider = ({ clothes  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mainSlider),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sliderTitle),
                children: "Последние новинки"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sliderWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                        swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
                    ],
                    spaceBetween: 50,
                    slidesPerView: 1,
                    navigation: true,
                    loop: true,
                    pagination: {
                        clickable: true
                    },
                    autoplay: {
                        delay: 3000
                    },
                    children: clothes.slice(0, 3).map((product)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().swiperImageWrap),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        src: product.image,
                                        alt: "slide",
                                        width: "200",
                                        height: "200",
                                        className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sliderImage)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().swiperTitleProduct),
                                    children: product.title
                                })
                            ]
                        }, product.id);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3275);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_5__]);
_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Home({ clothes  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Магазин одежды inStyle | Главная"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "Магазин одежды inStyle"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().containerMain),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mainTextWrap),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: "О бренде"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text), (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().padText)),
                                children: "inStyle – бренд дизайнерской одежды и аксессуаров. Собственные производственные площадки компании расположены в России. Мы используем высококачественные материалы только от лучших производителей рынка. inStyle – это качественная одежда для всех. Это стильные вещи трендовых фасонов."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().btn),
                                href: "/clothes",
                                children: "Перейти в каталог"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        clothes: clothes
                    })
                ]
            })
        ]
    });
}
async function getStaticProps(context) {
    const res = await fetch("https://fakestoreapi.com/products?limit=3");
    const clothes = await res.json();
    return {
        props: {
            clothes
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2977:
/***/ (() => {



/***/ }),

/***/ 6503:
/***/ (() => {



/***/ }),

/***/ 2708:
/***/ (() => {



/***/ }),

/***/ 9076:
/***/ (() => {



/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();