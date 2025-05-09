/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/bootstrap-navbar.js":
/*!************************************!*\
  !*** ./src/js/bootstrap-navbar.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n/*-----------------------------------------------\r\n|   Top navigation opacity on scroll\r\n-----------------------------------------------*/\r\nconst navbarInit = () => {\r\n  const Selector = {\r\n    NAVBAR: '[data-navbar-on-scroll]',\r\n    NAVBAR_COLLAPSE: '.navbar-collapse',\r\n    NAVBAR_TOGGLER: '.navbar-toggler',\r\n\r\n  };\r\n\r\n  const ClassNames = {\r\n    COLLAPSED: 'collapsed',\r\n  };\r\n\r\n  const Events = {\r\n    SCROLL: 'scroll',\r\n    SHOW_BS_COLLAPSE: 'show.bs.collapse',\r\n    HIDE_BS_COLLAPSE: 'hide.bs.collapse',\r\n    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse',\r\n  };\r\n\r\n  const DataKey = {\r\n    NAVBAR_ON_SCROLL: 'navbar-light-on-scroll'\r\n  };\r\n  const navbar = document.querySelector(Selector.NAVBAR);\r\n  // responsive nav collapsed\r\n  navbar.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('nav-link') && window.innerWidth < _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBreakpoint(navbar)) {\r\n      navbar.querySelector(Selector.NAVBAR_TOGGLER).click();\r\n    }\r\n  });\r\n\r\n  if (navbar) {\r\n    const windowHeight = window.innerHeight;\r\n    const html = document.documentElement;\r\n    const navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);\r\n    const allColors = { ..._utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors, ..._utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grays };\r\n\r\n    const name = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(navbar, DataKey.NAVBAR_ON_SCROLL);\r\n    const colorName = Object.keys(allColors).includes(name) ? name : 'light';\r\n    const color = allColors[colorName];\r\n    const bgClassName = `bg-${colorName}`;\r\n    const paddingName = 'padding-transition';\r\n    const colorRgb = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hexToRgb(color);\r\n    const { backgroundImage } = window.getComputedStyle(navbar);\r\n    const transition = 'background-color,padding 0.35s ease';\r\n    navbar.style.backgroundImage = 'none';\r\n\r\n    // Change navbar background color on scroll\r\n    window.addEventListener(Events.SCROLL, () => {\r\n      const { scrollTop } = html;\r\n      let alpha = (scrollTop / windowHeight) * 0.35;\r\n      // Add class on scroll\r\n      navbar.classList.add('backdrop');\r\n      if (alpha === 0) {\r\n        navbar.classList.remove('backdrop');\r\n      }\r\n      alpha >= 1 && (alpha = 1);\r\n      navbar.style.backgroundColor = `rgba(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}, ${alpha})`;\r\n      navbar.style.backgroundImage = (alpha > 0 || _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(navbarCollapse, 'show')) ? backgroundImage : 'none';\r\n      (alpha > 0 || _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(navbarCollapse, 'show')) ? navbar.classList.add(paddingName) : navbar.classList.remove(paddingName);\r\n    });\r\n\r\n    // Toggle bg class on window resize\r\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resize(() => {\r\n      const breakPoint = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBreakpoint(navbar);\r\n      if (window.innerWidth > breakPoint) {\r\n        navbar.style.backgroundImage = html.scrollTop ? backgroundImage : 'none';\r\n        // navbar.style.transition = 'none';\r\n      } else if (\r\n        !_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(\r\n          navbar.querySelector(Selector.NAVBAR_TOGGLER),\r\n          ClassNames.COLLAPSED\r\n        )\r\n      ) {\r\n        // navbar.classList.add(bgClassName);\r\n        // navbar.classList.add(paddingName);\r\n        navbar.style.backgroundImage = backgroundImage;\r\n      }\r\n\r\n      if (window.innerWidth <= breakPoint) {\r\n        // navbar.style.transition = utils.hasClass(navbarCollapse, 'show') ? transition : 'none';\r\n      }\r\n\r\n    });\r\n\r\n    navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, () => {\r\n      navbar.classList.add(bgClassName);\r\n      // navbar.classList.add(paddingName);\r\n      navbar.style.backgroundImage = backgroundImage;\r\n      navbar.style.transition = transition;\r\n    });\r\n\r\n    navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, () => {\r\n      navbar.classList.remove(bgClassName);\r\n      // navbar.classList.remove(paddingName);\r\n      !html.scrollTop && (navbar.style.backgroundImage = 'none');\r\n    });\r\n\r\n    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, () => {\r\n      // navbar.style.transition = 'none';\r\n    });\r\n\r\n  }\r\n\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarInit);\r\n\n\n//# sourceURL=webpack://jadoo/./src/js/bootstrap-navbar.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* -------------------------------------------------------------------------- */\r\n/*                                    Utils                                   */\r\n/* -------------------------------------------------------------------------- */\r\nconst docReady = (fn) => {\r\n  // see if DOM is already available\r\n  if (document.readyState === \"loading\") {\r\n    document.addEventListener(\"DOMContentLoaded\", fn);\r\n  } else {\r\n    setTimeout(fn, 1);\r\n  }\r\n};\r\n\r\nconst resize = (fn) => window.addEventListener(\"resize\", fn);\r\n\r\nconst isIterableArray = (array) => Array.isArray(array) && !!array.length;\r\n\r\nconst camelize = (str) => {\r\n  const text = str.replace(/[-_\\s.]+(.)?/g, (_, c) =>\r\n    c ? c.toUpperCase() : \"\"\r\n  );\r\n  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;\r\n};\r\n\r\nconst getData = (el, data) => {\r\n  try {\r\n    return JSON.parse(el.dataset[camelize(data)]);\r\n  } catch (e) {\r\n    return el.dataset[camelize(data)];\r\n  }\r\n};\r\n\r\n/* ----------------------------- Colors function ---------------------------- */\r\n\r\nconst hexToRgb = (hexValue) => {\r\n  let hex;\r\n  hexValue.indexOf(\"#\") === 0\r\n    ? (hex = hexValue.substring(1))\r\n    : (hex = hexValue);\r\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\r\n  const shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\r\n  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(\r\n    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)\r\n  );\r\n  return result\r\n    ? [\r\n        parseInt(result[1], 16),\r\n        parseInt(result[2], 16),\r\n        parseInt(result[3], 16),\r\n      ]\r\n    : null;\r\n};\r\n\r\nconst rgbaColor = (color = \"#fff\", alpha = 0.5) =>\r\n  `rgba(${hexToRgb(color)}, ${alpha})`;\r\n\r\n/* --------------------------------- Colors --------------------------------- */\r\n\r\nconst colors = {\r\n  primary: \"#0091e9\",\r\n  secondary: \"#002147\",\r\n  success: \"#00d27a\",\r\n  info: \"#27bcfd\",\r\n  warning: \"#FFC928\",\r\n  danger: \"#EE4D47\",\r\n  light: \"#F9FAFD\",\r\n  dark: \"#000\",\r\n};\r\n\r\nconst grays = {\r\n  white: \"#fff\",\r\n  100: \"#f9fafd\",\r\n  200: \"#edf2f9\",\r\n  300: \"#d8e2ef\",\r\n  400: \"#b6c1d2\",\r\n  500: \"#9da9bb\",\r\n  600: \"#748194\",\r\n  700: \"#5e6e82\",\r\n  800: \"#4d5969\",\r\n  900: \"#344050\",\r\n  1000: \"#232e3c\",\r\n  1100: \"#0b1727\",\r\n  black: \"#000\",\r\n};\r\n\r\nconst hasClass = (el, className) => {\r\n  !el && false;\r\n  return el.classList.value.includes(className);\r\n};\r\n\r\nconst addClass = (el, className) => {\r\n  el.classList.add(className);\r\n};\r\n\r\nconst getOffset = (el) => {\r\n  const rect = el.getBoundingClientRect();\r\n  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;\r\n  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\r\n};\r\n\r\nconst isScrolledIntoView = (el) => {\r\n  let top = el.offsetTop;\r\n  let left = el.offsetLeft;\r\n  const width = el.offsetWidth;\r\n  const height = el.offsetHeight;\r\n\r\n  while (el.offsetParent) {\r\n    // eslint-disable-next-line no-param-reassign\r\n    el = el.offsetParent;\r\n    top += el.offsetTop;\r\n    left += el.offsetLeft;\r\n  }\r\n\r\n  return {\r\n    all:\r\n      top >= window.pageYOffset &&\r\n      left >= window.pageXOffset &&\r\n      top + height <= window.pageYOffset + window.innerHeight &&\r\n      left + width <= window.pageXOffset + window.innerWidth,\r\n    partial:\r\n      top < window.pageYOffset + window.innerHeight &&\r\n      left < window.pageXOffset + window.innerWidth &&\r\n      top + height > window.pageYOffset &&\r\n      left + width > window.pageXOffset,\r\n  };\r\n};\r\n\r\nconst breakpoints = {\r\n  xs: 0,\r\n  sm: 576,\r\n  md: 768,\r\n  lg: 992,\r\n  xl: 1200,\r\n  xxl: 1540,\r\n};\r\n\r\nconst getBreakpoint = (el) => {\r\n  const classes = el && el.classList.value;\r\n  let breakpoint;\r\n  if (classes) {\r\n    breakpoint =\r\n      breakpoints[\r\n        classes\r\n          .split(\" \")\r\n          .filter((cls) => cls.includes(\"navbar-expand-\"))\r\n          .pop()\r\n          .split(\"-\")\r\n          .pop()\r\n      ];\r\n  }\r\n  return breakpoint;\r\n};\r\n\r\n/* --------------------------------- Cookie --------------------------------- */\r\n\r\nconst setCookie = (name, value, expire) => {\r\n  const expires = new Date();\r\n  expires.setTime(expires.getTime() + expire);\r\n  document.cookie = name + \"=\" + value + \";expires=\" + expires.toUTCString();\r\n};\r\n\r\nconst getCookie = (name) => {\r\n  var keyValue = document.cookie.match(\"(^|;) ?\" + name + \"=([^;]*)(;|$)\");\r\n  return keyValue ? keyValue[2] : keyValue;\r\n};\r\n\r\nconst settings = {\r\n  tinymce: {\r\n    theme: \"oxide\",\r\n  },\r\n  chart: {\r\n    borderColor: \"rgba(255, 255, 255, 0.8)\",\r\n  },\r\n};\r\n\r\n/* -------------------------- Chart Initialization -------------------------- */\r\n\r\nconst newChart = (chart, config) => {\r\n  const ctx = chart.getContext(\"2d\");\r\n  return new window.Chart(ctx, config);\r\n};\r\n\r\n/* ---------------------------------- Store --------------------------------- */\r\n\r\nconst getItemFromStore = (key, defaultValue, store = localStorage) => {\r\n  try {\r\n    return JSON.parse(store.getItem(key)) || defaultValue;\r\n  } catch {\r\n    return store.getItem(key) || defaultValue;\r\n  }\r\n};\r\n\r\nconst setItemToStore = (key, payload, store = localStorage) =>\r\n  store.setItem(key, payload);\r\nconst getStoreSpace = (store = localStorage) =>\r\n  parseFloat(\r\n    (\r\n      escape(encodeURIComponent(JSON.stringify(store))).length /\r\n      (1024 * 1024)\r\n    ).toFixed(2)\r\n  );\r\n\r\nconst utils = {\r\n  docReady,\r\n  resize,\r\n  isIterableArray,\r\n  camelize,\r\n  getData,\r\n  hasClass,\r\n  addClass,\r\n  hexToRgb,\r\n  rgbaColor,\r\n  colors,\r\n  grays,\r\n  getOffset,\r\n  isScrolledIntoView,\r\n  getBreakpoint,\r\n  setCookie,\r\n  getCookie,\r\n  newChart,\r\n  settings,\r\n  getItemFromStore,\r\n  setItemToStore,\r\n  getStoreSpace,\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\r\n\n\n//# sourceURL=webpack://jadoo/./src/js/utils.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/bootstrap-navbar.js");
/******/ 	
/******/ })()
;