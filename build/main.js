/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var ReactRouter =  __webpack_require__(1);
	var Routes = ReactRouter.Routes;
	var Route = ReactRouter.Route;


	//视图
	var IndexView = __webpack_require__(2);
	var DetailView = __webpack_require__(3);


	//定义整个页面的路由结构
	var routes = (

	    React.createElement(Routes, {location: "hash"}, 
	        React.createElement(Route, {path: "/", handler: IndexView}, 
	            React.createElement(Route, {path: "index", name: "index", handler: IndexView}), 
	            React.createElement(Route, {path: "detail", name: "detail", handler: DetailView}), 
	            React.createElement(ReactRouter.DefaultRoute, {handler: IndexView})
	        )
	    )

	);



	React.render(React.createElement(IndexView, null),document.body);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	var IndexView = React.createClass({displayName: "IndexView",
	    render : function(){
	        return (
	            React.createElement("div", {className: ""}, 
	                "Hello, world! I am a 77"
	            )
	        );
	    }

	});


	module.exports = IndexView;

/***/ },
/* 3 */
/***/ function(module, exports) {

	
	var DetailView = React.createClass({displayName: "DetailView",
	    render : function(){
	        return (
	            React.createElement("div", {className: ""}, 
	                "Hello, world! I am a detail."
	            )
	        );
	    }

	});


	module.exports = DetailView;

/***/ }
/******/ ]);