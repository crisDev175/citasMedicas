/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/styles/styles.css":
/*!****************************************!*\
  !*** ./src/frontend/styles/styles.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://proyecto-citas/./src/frontend/styles/styles.css?");

/***/ }),

/***/ "./src/frontend/app.js":
/*!*****************************!*\
  !*** ./src/frontend/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_CustomerServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/CustomerServices */ \"./src/frontend/services/CustomerServices.js\");\n/* harmony import */ var _services_CustomerServices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_CustomerServices__WEBPACK_IMPORTED_MODULE_0__);\n__webpack_require__(/*! ./styles/styles.css */ \"./src/frontend/styles/styles.css\")\r\n;\r\n\r\n\r\ndocument.getElementById('form-customer')\r\n    .addEventListener('submit', e => {\r\n        const nameCustomer = document.getElementById('customer').value;\r\n        const ageCustomer = document.getElementById('customer-age').value;\r\n        const phoneCustomer = document.getElementById('customer-phone').value;\r\n\r\n       const formData = new FormData();\r\n        formData.append('customer', nameCustomer);\r\n        formData.append('customer-age', ageCustomer);\r\n        formData.append('customer-phone', phoneCustomer);\r\n        \r\n\r\n        console.log(nameCustomer, ageCustomer, phoneCustomer)\r\n\r\n\r\n        const customerService = new (_services_CustomerServices__WEBPACK_IMPORTED_MODULE_0___default())()\r\n        customerService.postCustomer(formData) \r\n\r\n        e.preventDefault();\r\n\r\n    })\n\n//# sourceURL=webpack://proyecto-citas/./src/frontend/app.js?");

/***/ }),

/***/ "./src/frontend/services/CustomerServices.js":
/*!***************************************************!*\
  !*** ./src/frontend/services/CustomerServices.js ***!
  \***************************************************/
/***/ ((module) => {

eval("class CustomerServices {\r\n\r\n    constructor() {\r\n        this.URI = 'http://localhost:4000/api/v1/customer'\r\n    }\r\n\r\n    async getCustomer() {\r\n        const response = await fetch(this.URI);\r\n        const customers = await response.json()\r\n        return customers;\r\n    }\r\n\r\n    async postCustomer(customer) {\r\n        const res = await fetch(this.URI, {\r\n            method: 'POST',\r\n            body: customer\r\n        });\r\n        const data = await res.json();\r\n        console.log(data)\r\n    }\r\n\r\n    async deleteCustomer(customerId) {\r\n        const res = await fetch(`${this.URI}/${customerId}`, {\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            method: 'DELETE'\r\n        });\r\n        const data = await res.json();\r\n        console.log(data)\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = CustomerServices;\n\n//# sourceURL=webpack://proyecto-citas/./src/frontend/services/CustomerServices.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/frontend/app.js");
/******/ 	
/******/ })()
;