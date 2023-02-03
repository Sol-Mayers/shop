(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6947:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rVhH8",
	"box": "Navbar_box__YDtL1",
	"menu": "Navbar_menu__w7Wyh",
	"mobile_btn": "Navbar_mobile_btn__NxdLz",
	"active": "Navbar_active__Fs4Ns",
	"link": "Navbar_link__UhyJF",
	"whiteLink": "Navbar_whiteLink__4ugIx",
	"burgerLink": "Navbar_burgerLink__74ciE",
	"show": "Navbar_show__LPmDL",
	"hide": "Navbar_hide__B9h6j",
	"dropdownButton": "Navbar_dropdownButton__teNCx",
	"listItem": "Navbar_listItem__1wKPZ",
	"innerLinks": "Navbar_innerLinks__QfuQx",
	"activeLinks": "Navbar_activeLinks__RBRSJ",
	"subMenu": "Navbar_subMenu__d9Osi"
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

/***/ 1501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(3275);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: external "react-icons/si"
const si_namespaceObject = require("react-icons/si");
// EXTERNAL MODULE: ./components/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(6947);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx






const Navbar = ()=>{
    const [nav, setNav] = (0,external_react_.useState)(false);
    const [clicked, setClicked] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (Navbar_module_default()).box,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: nav ? external_classnames_default()((Navbar_module_default()).menu, (Navbar_module_default()).active) : (Navbar_module_default()).menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: external_classnames_default()((Navbar_module_default()).dropdownButton, (Navbar_module_default()).link),
                            href: "/",
                            onClick: ()=>setNav(false),
                            children: "Домой"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: external_classnames_default()((Navbar_module_default()).show, (Navbar_module_default()).link),
                            href: "/clothes",
                            onClick: ()=>setNav(false),
                            children: "Каталог"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: external_classnames_default()((Navbar_module_default()).dropdownButton, (Navbar_module_default()).link),
                            href: "/about",
                            onClick: ()=>setNav(false),
                            children: "О нас"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: external_classnames_default()((Navbar_module_default()).dropdownButton, (Navbar_module_default()).link),
                            href: "/reviews",
                            onClick: ()=>setNav(false),
                            children: "Отзывы"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setNav(!nav),
                className: (Navbar_module_default()).mobile_btn,
                children: nav ? /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {
                    className: nav ? (Navbar_module_default()).link : (Navbar_module_default()).whiteLink,
                    size: 25
                }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMenu, {
                    className: nav ? (Navbar_module_default()).link : (Navbar_module_default()).whiteLink,
                    size: 25
                })
            })
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Header/Header.tsx





const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Home_module_default()).headerStyle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiStylelint, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {})
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Home_module_default()).footerInner,
            children: "Copyright 2023 - inStyle"
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout/Layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(1501)));
module.exports = __webpack_exports__;

})();