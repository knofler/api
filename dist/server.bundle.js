/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("limax");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Order Model
*
* This contains defalut Order model.
*/

var Schema = _mongoose2.default.Schema;

var OrderSchema = new Schema({
  items: {
    type: 'String',
    required: true
  },
  info: {
    type: 'String',
    required: false
  },
  product_id: {
    type: 'String',
    required: false
  },
  produced_by: {
    type: 'String',
    required: false
  },
  img: {
    type: 'String',
    required: false
  },
  totalCost: {
    type: 'Number',
    required: false
  },
  subTotal: {
    type: 'Number',
    required: false
  },
  shipping: {
    type: 'Number',
    required: false
  },
  quantity: {
    type: 'Number',
    required: false
  },
  location: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  ordered_by: {
    type: 'String',
    required: false
  },
  ordered_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  editedBy: {
    type: 'String',
    required: false
  },
  edited_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Order', OrderSchema);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleAddPost = toggleAddPost;
// Export Constants
var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

// Export Actions
function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getPosts = undefined;

var _toConsumableArray2 = __webpack_require__(58);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _PostActions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial State
var initialState = { data: [] };

var PostReducer = function PostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _PostActions.ADD_POST:
      return {
        data: [action.post].concat((0, _toConsumableArray3.default)(state.data))
      };

    case _PostActions.ADD_POSTS:
      return {
        data: action.posts
      };

    case _PostActions.DELETE_POST:
      return {
        data: state.data.filter(function (post) {
          return post.cuid !== action.cuid;
        })
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
var getPosts = exports.getPosts = function getPosts(state) {
  return state.posts.data;
};

// Get post by cuid
var getPost = exports.getPost = function getPost(state, cuid) {
  return state.posts.data.filter(function (post) {
    return post.cuid === cuid;
  })[0];
};

// Export Reducer
exports.default = PostReducer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
exports.addPost = addPost;
exports.addPostRequest = addPostRequest;
exports.addPosts = addPosts;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.deletePost = deletePost;
exports.deletePostRequest = deletePostRequest;

var _apiCaller = __webpack_require__(59);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var ADD_POST = exports.ADD_POST = 'ADD_POST';
var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

// Export Actions
function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  };
}

function addPostRequest(post) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content
      }
    }).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts: posts
  };
}

function fetchPosts() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts').then(function (res) {
      dispatch(addPosts(res.posts));
    });
  };
}

function fetchPost(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid: cuid
  };
}

function deletePostRequest(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
      return dispatch(deletePost(cuid));
    });
  };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  secrets: {
    jwt: process.env.JWT_SECRET || 'learneverything',
    jwtExp: '100d'
  }
};

exports.default = config;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _AppActions = __webpack_require__(17);

// Initial State
var initialState = {
  showAddPost: false
}; // Import Actions


var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _AppActions.TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
  return state.app.showAddPost;
};

// Export Reducer
exports.default = AppReducer;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _assign = __webpack_require__(63);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _reactIntl = __webpack_require__(11);

var _intl = __webpack_require__(65);

var _intl2 = _interopRequireDefault(_intl);

var _intlLocalesSupported = __webpack_require__(66);

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

__webpack_require__(67);

var _en = __webpack_require__(68);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(69);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(70);

var _fr = __webpack_require__(71);

var _fr2 = _interopRequireDefault(_fr);

var _fr3 = __webpack_require__(72);

var _fr4 = _interopRequireDefault(_fr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of available languages
var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
var localizationData = exports.localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


// need Intl polyfill, Intl not supported in Safari


if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    global.Intl.NumberFormat = _intl2.default.NumberFormat;
    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = _intl2.default;
}

// use this to allow nested messages, taken from docs:
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages() {
  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return (0, _keys2.default)(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + '.' + key : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      (0, _assign2.default)(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

// bring in intl polyfill, react-intl, and app-specific language data

(0, _reactIntl.addLocaleData)(_en2.default);
localizationData.en = _en4.default;
localizationData.en.messages = flattenMessages(localizationData.en.messages);

(0, _reactIntl.addLocaleData)(_fr2.default);
localizationData.fr = _fr4.default;
localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return (0, _extends3.default)({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(73);

var _reduxDevtoolsLogMonitor = __webpack_require__(74);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(75);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)((0, _jsx3.default)(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, (0, _jsx3.default)(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(22);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(24);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(26);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(12);

var _PostList = __webpack_require__(81);

var _PostList2 = _interopRequireDefault(_PostList);

var _PostCreateWidget = __webpack_require__(83);

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

var _PostActions = __webpack_require__(19);

var _AppActions = __webpack_require__(17);

var _AppReducer = __webpack_require__(28);

var _PostReducer = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Selectors


// Import Actions


// Import Components
var PostListPage = function (_Component) {
  (0, _inherits3.default)(PostListPage, _Component);

  function PostListPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostListPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostListPage.__proto__ || (0, _getPrototypeOf2.default)(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
      if (confirm('Do you want to delete this post')) {
        // eslint-disable-line
        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
      }
    }, _this.handleAddPost = function (name, title, content) {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch((0, _PostActions.fetchPosts)());
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_PostCreateWidget2.default, {
        addPost: this.handleAddPost,
        showAddPost: this.props.showAddPost
      }), (0, _jsx3.default)(_PostList2.default, {
        handleDeletePost: this.handleDeletePost,
        posts: this.props.posts
      }));
    }
  }]);
  return PostListPage;
}(_react.Component);

// Actions required to provide data for this component to render in sever side.


PostListPage.need = [function () {
  return (0, _PostActions.fetchPosts)();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: (0, _AppReducer.getShowAddPost)(state),
    posts: (0, _PostReducer.getPosts)(state)
  };
}

PostListPage.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.PostDetailPage = PostDetailPage;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(12);

var _reactHelmet = __webpack_require__(21);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = __webpack_require__(11);

var _PostListItem = {
  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
  "post-action": "_3S84cKmlvGO49pK1biPlXr",
  "divider": "y2SIF3ydn02JYMgeklO7S",
  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

var _PostActions = __webpack_require__(19);

var _PostReducer = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions
var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'by'
});

// Import Selectors


// Import Style


function PostDetailPage(props) {
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
    title: props.post.title
  }), (0, _jsx3.default)('div', {
    className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail']
  }, void 0, (0, _jsx3.default)('h3', {
    className: _PostListItem2.default['post-title']
  }, void 0, props.post.title), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['author-name']
  }, void 0, _ref, ' ', props.post.name), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['post-desc']
  }, void 0, props.post.content)));
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [function (params) {
  return (0, _PostActions.fetchPost)(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: (0, _PostReducer.getPost)(state, props.params.cuid)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = __webpack_require__(96);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  },
  settings: {
    theme: {
      type: String,
      required: true,
      default: 'dark'
    },
    notifications: {
      type: Boolean,
      required: true,
      default: true
    },
    compactMode: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}, { timestamps: true });

userSchema.pre('save', function (next) {
  var _this = this;

  if (!this.isModified('password')) {
    return next();
  }

  _bcrypt2.default.hash(this.password, 8, function (err, hash) {
    if (err) {
      return next(err);
    }

    _this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  var passwordHash = this.password;
  return new _promise2.default(function (resolve, reject) {
    _bcrypt2.default.compare(password, passwordHash, function (err, same) {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

var User = exports.User = _mongoose2.default.model('user', userSchema);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Chef Model
*
* This contains defalut Chef model.
*/

var Schema = _mongoose2.default.Schema;

var ChefSchema = new Schema({
  name: {
    type: 'String',
    required: false
  },
  age: {
    type: 'Number',
    required: false
  },
  sex: {
    type: 'String',
    required: true
  },
  skills: {
    type: 'String',
    required: false
  },
  latitude: {
    type: 'String',
    required: true
  },
  longitude: {
    type: 'String',
    required: true
  },
  address: {
    type: 'String',
    required: true
  },
  suburb: {
    type: 'String',
    required: true
  },
  postcode: {
    type: 'Number',
    required: true
  },
  state: {
    type: 'String',
    required: false
  },
  country: {
    type: 'String',
    required: true
  },
  ethnicity: {
    type: 'String',
    required: false
  },
  popular: {
    type: 'String',
    required: false
  },
  phone: {
    type: 'String',
    required: true
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  editedBy: {
    type: 'String',
    required: false
  },
  edited_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Chef', ChefSchema);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Food Model
*
* This contains defalut Food model.
*/

var Schema = _mongoose2.default.Schema;

var FoodSchema = new Schema({
  item: {
    type: 'String',
    required: false
  },
  info: {
    type: 'String',
    required: false
  },
  img: {
    type: 'String',
    required: false
  },
  genre: {
    type: 'String',
    required: false
  },
  cost: {
    type: 'String',
    required: false
  },
  privacy: {
    type: 'String',
    required: false
  },
  latitude: {
    type: 'String',
    required: false
  },
  longitude: {
    type: 'String',
    required: false
  },
  location: {
    type: 'String',
    required: false
  },
  popular: {
    type: 'String',
    required: false
  },
  suburb: {
    type: 'String',
    required: false
  },
  state: {
    type: 'String',
    required: false
  },
  country: {
    type: 'String',
    required: false
  },
  recipe: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Food', FoodSchema);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Shopcart Model
*
* This contains defalut Shopcart model.
*/

var Schema = _mongoose2.default.Schema;

var ShopcartSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  info: {
    type: 'String',
    required: false
  },
  product_id: {
    type: 'String',
    required: false
  },
  produced_by: {
    type: 'String',
    required: false
  },
  img: {
    type: 'String',
    required: false
  },
  cost: {
    type: 'Number',
    required: false
  },
  genre: {
    type: 'String',
    required: false
  },
  recipe: {
    type: 'String',
    required: false
  },
  latitude: {
    type: 'String',
    required: false
  },
  longitude: {
    type: 'String',
    required: false
  },
  address: {
    type: 'String',
    required: false
  },
  suburb: {
    type: 'String',
    required: false
  },
  postcode: {
    type: 'Number',
    required: false
  },
  state: {
    type: 'String',
    required: false
  },
  country: {
    type: 'String',
    required: false
  },
  shipping: {
    type: 'Number',
    required: false
  },
  quantity: {
    type: 'Number',
    required: false
  },
  cartStatus: {
    type: 'String',
    required: false
  },
  available: {
    type: 'String',
    required: false
  },
  phone: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  carted_by: {
    type: 'String',
    required: false
  },
  carted_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  saved_by: {
    type: 'String',
    required: false
  },
  saved_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  editedBy: {
    type: 'String',
    required: false
  },
  edited_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Shopcart', ShopcartSchema);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Location Model
*
* This contains defalut Location model.
*/

var Schema = _mongoose2.default.Schema;

var LocationSchema = new Schema({
  lat: {
    type: 'String',
    required: true
  },
  lon: {
    type: 'String',
    required: true
  },
  address: {
    type: 'String',
    required: false
  },
  suburb: {
    type: 'String',
    required: true
  },
  postcode: {
    type: 'String',
    required: true
  },
  state: {
    type: 'String',
    required: true
  },
  country: {
    type: 'String',
    required: false
  },
  dc: {
    type: 'String',
    required: false
  },
  type: {
    type: 'String',
    required: false
  },
  results: {
    type: 'Array',
    requied: false
  },

  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  active: 'Boolean'
});

exports.default = _mongoose2.default.model('Location', LocationSchema);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Pencil Model
*
* This contains defalut Pencil model.
*/

var Schema = _mongoose2.default.Schema;

var PencilSchema = new Schema({
  item: {
    type: 'String',
    required: false
  },
  info: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Pencil', PencilSchema);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Book Model
*
* This contains defalut Book model.
*/

var Schema = _mongoose2.default.Schema;

var BookSchema = new Schema({
    item: {
        type: 'String',
        required: false
    },
    info: {
        type: 'String',
        required: false
    },
    slug: {
        type: 'String',
        required: false
    },
    cuid: {
        type: 'String',
        required: false
    },
    createdBy: {
        type: 'String',
        required: false
    },
    created_at: {
        type: 'Date',
        default: Date.now,
        required: false
    }
});

exports.default = _mongoose2.default.model('Book', BookSchema);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Shipment Model
*
* This contains defalut Shipment model.
*/

var Schema = _mongoose2.default.Schema;

var ShipmentSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  info: {
    type: 'String',
    required: false
  },
  product_id: {
    type: 'String',
    required: true
  },
  produced_by: {
    type: 'String',
    required: false
  },
  img: {
    type: 'String',
    required: false
  },
  cost: {
    type: 'Number',
    required: false
  },
  genre: {
    type: 'String',
    required: false
  },
  recipe: {
    type: 'String',
    required: false
  },
  latitude: {
    type: 'String',
    required: false
  },
  longitude: {
    type: 'String',
    required: false
  },
  address: {
    type: 'String',
    required: false
  },
  suburb: {
    type: 'String',
    required: false
  },
  postcode: {
    type: 'String',
    required: false
  },
  state: {
    type: 'String',
    required: false
  },
  country: {
    type: 'String',
    required: false
  },
  shipping: {
    type: 'Number',
    required: false
  },
  quantity: {
    type: 'Number',
    required: true
  },
  cartStatus: {
    type: 'String',
    required: false
  },
  available: {
    type: 'String',
    required: false
  },
  phone: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  carted_by: {
    type: 'String',
    required: false
  },
  carted_at: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  shipped_status: {
    type: 'String',
    required: false
  },
  shipped_date: {
    type: 'Date',
    default: Date.now,
    required: false
  },
  editedBy: {
    type: 'String',
    required: false
  },
  edited_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Shipment', ShipmentSchema);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Search Model
*
* This contains defalut Search model.
*/

var Schema = _mongoose2.default.Schema;

var SearchSchema = new Schema({
  item: {
    type: 'String',
    required: false
  },
  info: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Search', SearchSchema);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Social Model
*
* This contains defalut Social model.
*/

var Schema = _mongoose2.default.Schema;

var SocialSchema = new Schema({
  item: {
    type: 'String',
    required: false
  },
  info: {
    type: 'String',
    required: false
  },
  slug: {
    type: 'String',
    required: false
  },
  cuid: {
    type: 'String',
    required: false
  },
  createdBy: {
    type: 'String',
    required: false
  },
  created_at: {
    type: 'Date',
    default: Date.now,
    required: false
  }
});

exports.default = _mongoose2.default.model('Social', SocialSchema);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _stringify = __webpack_require__(13);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cors = __webpack_require__(48);

var _cors2 = _interopRequireDefault(_cors);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(49);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(50);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(51);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(52);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _socketioServer = __webpack_require__(53);

var _store = __webpack_require__(55);

var _reactRedux = __webpack_require__(12);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(76);

var _reactRouter = __webpack_require__(15);

var _reactHelmet = __webpack_require__(21);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(77);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(84);

var _post = __webpack_require__(86);

var _post2 = _interopRequireDefault(_post);

var _dummyData = __webpack_require__(88);

var _user = __webpack_require__(94);

var _user2 = _interopRequireDefault(_user);

var _auth = __webpack_require__(97);

var _routes3 = __webpack_require__(99);

var _routes4 = _interopRequireDefault(_routes3);

var _dummyData2 = __webpack_require__(101);

var _dummyData3 = _interopRequireDefault(_dummyData2);

var _routes5 = __webpack_require__(102);

var _routes6 = _interopRequireDefault(_routes5);

var _dummyData4 = __webpack_require__(104);

var _dummyData5 = _interopRequireDefault(_dummyData4);

var _routes7 = __webpack_require__(105);

var _routes8 = _interopRequireDefault(_routes7);

var _dummyData6 = __webpack_require__(107);

var _dummyData7 = _interopRequireDefault(_dummyData6);

var _routes9 = __webpack_require__(108);

var _routes10 = _interopRequireDefault(_routes9);

var _dummyData8 = __webpack_require__(110);

var _dummyData9 = _interopRequireDefault(_dummyData8);

var _routes11 = __webpack_require__(111);

var _routes12 = _interopRequireDefault(_routes11);

var _dummyData10 = __webpack_require__(113);

var _dummyData11 = _interopRequireDefault(_dummyData10);

var _routes13 = __webpack_require__(114);

var _routes14 = _interopRequireDefault(_routes13);

var _dummyData12 = __webpack_require__(116);

var _dummyData13 = _interopRequireDefault(_dummyData12);

var _routes15 = __webpack_require__(117);

var _routes16 = _interopRequireDefault(_routes15);

var _dummyData14 = __webpack_require__(119);

var _dummyData15 = _interopRequireDefault(_dummyData14);

var _routes17 = __webpack_require__(120);

var _routes18 = _interopRequireDefault(_routes17);

var _dummyData16 = __webpack_require__(122);

var _dummyData17 = _interopRequireDefault(_dummyData16);

var _routes19 = __webpack_require__(123);

var _routes20 = _interopRequireDefault(_routes19);

var _dummyData18 = __webpack_require__(125);

var _dummyData19 = _interopRequireDefault(_dummyData18);

var _routes21 = __webpack_require__(126);

var _routes22 = _interopRequireDefault(_routes21);

var _dummyData20 = __webpack_require__(128);

var _dummyData21 = _interopRequireDefault(_dummyData20);

var _config = __webpack_require__(20);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AWS from 'aws-sdk';
/* eslint-disable no-console */
var AWS = __webpack_require__(129);
// console.log('AWS is :', AWS);
// const credentials = new AWS.SharedIniFileCredentials({
//   // profile: 'live2vod',
//   profile: 'dnops_sandbox',
// });
// AWS.config.credentials = credentials;
// AWS.config.update({ region: 'ap-southeast-2' });

// Create an S3 client
var s3 = new AWS.S3();

// Initialize the Express App
var app = new _express2.default();
var server = __webpack_require__(130).createServer(app);
var client = __webpack_require__(131).listen(server);

// console.log('socketIO is :', socketIO);
(0, _socketioServer.io)(client);

// Load the SDK and UUID
// const AWS = require('aws-sdk');
// const uuid = require('node-uuid');


// Set Development modes checks
var isDevMode = process.env.NODE_ENV === 'development' || false;
var isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  var webpack = __webpack_require__(46);
  // eslint-disable-next-line global-require
  var config = __webpack_require__(132);
  // eslint-disable-next-line global-require
  var webpackDevMiddleware = __webpack_require__(136);
  // eslint-disable-next-line global-require
  var webpackHotMiddleware = __webpack_require__(137);
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup


// Import required modules


// import RecipeRouter from './api/Recipe/routes';
// import recipeData from './api/Recipe/dummyData';

// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  _mongoose2.default.connect(_config2.default.mongoURL, function (error) {
    try {
      // feed some dummy data in DB.
      (0, _dummyData3.default)();
      (0, _dummyData5.default)();
      (0, _dummyData9.default)();
      (0, _dummyData11.default)();
      (0, _dummyData13.default)();
      (0, _dummyData.postData)();
      // recipeData();
      (0, _dummyData19.default)();
      (0, _dummyData15.default)();
      (0, _dummyData21.default)();
      (0, _dummyData17.default)();
      (0, _dummyData7.default)();
    } catch (e) {
      console.error('Please make sure Mongodb is installed and running!', e); // eslint-disable-line no-console
      throw error;
    }
  });
}

// Apply body Parser and server public assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }), (0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }), (0, _cors2.default)());
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));

app.use('/signup', _auth.signup);
app.use('/signin', _auth.signin);

app.use('/api/pencils', _auth.protect);

app.use('/api/user', _user2.default);

app.use('/api', _post2.default);
app.use('/api', _routes6.default);
app.use('/api', _routes4.default);
app.use('/api', _routes14.default);
app.use('/api', _routes16.default);

app.use('/api', _routes8.default);
app.use('/api', _routes10.default);
// app.use('/api', RecipeRouter);
app.use('/api', _routes12.default);

app.use('/api', _routes18.default);
app.use('/api', _routes20.default);
app.use('/api', _routes22.default);

// MEDIA LIVE API CALL Handling

app.use('/api/create/channel', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var params;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('req in media/create is :', req.params);
            params = {};
            _context.prev = 2;
            _context.next = 5;
            return s3.listBuckets(params, function (err, data) {
              if (err) console.log(err, err.stack); // an error occurred
              else console.log(data); // successful response
              return res.status(200).send({
                message: data
              });
            });

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', res.status(400).end(_context.t0));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + (process.env.NODE_ENV === 'production' ? html : '<div>' + html + '</div>') + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + (0, _stringify2.default)(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + (0, _stringify2.default)(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)((0, _jsx3.default)(_reactRedux.Provider, {
        store: store
      }, void 0, (0, _jsx3.default)(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
server.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _reactRedux = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(13);

var _stringify2 = _interopRequireDefault(_stringify);

exports.io = io;

var _socket = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  // console.log('Onconnect function in socket.io executed');
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, (0, _stringify2.default)(data, null, 2));
  });

  // Insert sockets below
  (0, _socket.register)(socket);
}

// console.log('register function from order is :', register);

/* eslint-disable no-console */
/**
 * Socket.io configuration
 */

// #socket_connect;

function io(client) {
  client.on('connection', function (socket) {
    socket.on('subscribeToTimer', function (interval) {
      console.log('socket is subscribing to timer with interval ', interval);
      setInterval(function () {
        socket.emit('timer', new Date());
      }, interval);
    });
    socket.on('add_data', function (data) {
      console.log('socket is subscribing to add_data event ', data);
      socket.broadcast.emit('get_add_data', data);
      socket.emit('get_add_data', data);
    });
    socket.on('update_data', function (data) {
      console.log('socket is subscribing to update_data event ', data);
      socket.broadcast.emit('get_update_data', data);
      socket.emit('get_update_data', data);
    });
    socket.on('delete_data', function (data) {
      console.log('socket is subscribing to delete_data event ', data);
      socket.broadcast.emit('get_delete_data', data);
      socket.emit('get_delete_data', data);
    });

    // disconnect is fired when a socket leaves the server
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    // Call onConnect.
    onConnect(socket);
    console.info('[%s] CONNECTED', socket.address);
  });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = undefined;

var _model = __webpack_require__(16);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onSave(socket, doc, cb) {
  socket.emit('order:save', doc);
} /* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
 * Broadcast updates to client when the model changes
 */

function onRemove(socket, doc, cb) {
  socket.emit('order:remove', doc);
}

function register(socket) {
  // console.log('Order imported in socket is :', Order.schema.post);
  console.log('Register function inside Order API Model has been executed');
  _model2.default.schema.post('save', function (doc) {
    return onSave(socket, doc);
  });
  _model2.default.schema.post('remove', function (doc) {
    return onRemove(socket, doc);
  });
}

exports.register = register;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(27);

var _reduxThunk = __webpack_require__(56);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(57);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = void 0; /**
                        * Main store function
                        */

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(32).default;
}

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(27);

var _AppReducer = __webpack_require__(28);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _PostReducer = __webpack_require__(18);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _IntlReducer = __webpack_require__(61);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer
/**
 * Root Reducer
 */
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  posts: _PostReducer2.default,
  intl: _IntlReducer2.default
});

// Import Reducers

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(13);

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = callApi;

var _isomorphicFetch = __webpack_require__(60);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(20);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];

  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
    headers: { 'content-type': 'application/json' },
    method: method,
    body: (0, _stringify2.default)(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return _promise2.default.reject(json);
    }

    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(62);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _setup = __webpack_require__(30);

var _IntlActions = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initLocale = global.navigator && global.navigator.language || 'en';

var initialState = (0, _extends3.default)({
  locale: initLocale,
  enabledLanguages: _setup.enabledLanguages
}, _setup.localizationData[initLocale] || {});

var IntlReducer = function IntlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _IntlActions.SWITCH_LANGUAGE:
      {
        var type = action.type,
            actionWithoutType = (0, _objectWithoutProperties3.default)(action, ['type']); // eslint-disable-line

        return (0, _extends3.default)({}, state, actionWithoutType);
      }

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("intl");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("intl-locales-supported");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  messages: {
    siteTitle: 'MERN Starter Blog',
    addPost: 'Add Post',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Author\'s Name',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    submit: 'Submit',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'fr',
  messages: {
    siteTitle: 'MERN blog de démarrage',
    addPost: 'Ajouter Poster',
    switchLanguage: 'Changer de langue',
    twitterMessage: 'Nous sommes sur Twitter',
    by: 'Par',
    deletePost: 'Supprimer le message',
    createNewPost: 'Créer un nouveau message',
    authorName: 'Nom de l\'auteur',
    postTitle: 'Titre de l\'article',
    postContent: 'Contenu après',
    submit: 'Soumettre',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(15);

var _App = __webpack_require__(78);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  __webpack_require__(33);
  __webpack_require__(34);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
exports.default = (0, _jsx3.default)(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, (0, _jsx3.default)(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(33).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: '/posts/:slug-:cuid',
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(34).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(22);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(24);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(26);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(12);

var _App = {
  "container": "_4uEyKcd5WHob5qPzotT7"
};

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(21);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Header = __webpack_require__(79);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(80);

var _Footer2 = _interopRequireDefault(_Footer);

var _AppActions = __webpack_require__(17);

var _IntlActions = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions


// Import Style
var DevTools = void 0;

// Import Components

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(32).default;
}

var _ref = (0, _jsx3.default)(DevTools, {});

var _ref2 = (0, _jsx3.default)(_Footer2.default, {});

var App = exports.App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.toggleAddPostSection = function () {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
    };

    _this.state = { isMounted: false };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _jsx3.default)('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
        title: 'MERN Starter - Blog App',
        titleTemplate: '%s - Blog App',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), (0, _jsx3.default)(_Header2.default, {
        switchLanguage: function switchLanguage(lang) {
          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
        },
        intl: this.props.intl,
        toggleAddPost: this.toggleAddPostSection
      }), (0, _jsx3.default)('div', {
        className: _App2.default.container
      }, void 0, this.props.children), _ref2));
    }
  }]);
  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.Header = Header;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(15);

var _reactIntl = __webpack_require__(11);

var _Header = {
  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
  "content": "_1eavAvnySzoZc5rld6Q4pa",
  "site-title": "UfFn6muOcOBjkVI5_yltp",
  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
  "selected": "_3IRlmCpgSZBcTGVIGHvgaI"
};

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'switchLanguage'
}));

// Import Style


var _ref2 = (0, _jsx3.default)(_reactRouter.Link, {
  to: '/'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'siteTitle'
}));

var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'addPost'
});

function Header(props, context) {
  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
    return (0, _jsx3.default)('li', {
      onClick: function onClick() {
        return props.switchLanguage(lang);
      },
      className: lang === props.intl.locale ? _Header2.default.selected : ''
    }, lang, lang);
  });

  return (0, _jsx3.default)('div', {
    className: _Header2.default.header
  }, void 0, (0, _jsx3.default)('div', {
    className: _Header2.default['language-switcher']
  }, void 0, (0, _jsx3.default)('ul', {}, void 0, _ref, languageNodes)), (0, _jsx3.default)('div', {
    className: _Header2.default.content
  }, void 0, (0, _jsx3.default)('h1', {
    className: _Header2.default['site-title']
  }, void 0, _ref2), context.router.isActive('/', true) ? (0, _jsx3.default)('a', {
    className: _Header2.default['add-post-button'],
    href: '#',
    onClick: props.toggleAddPost
  }, void 0, _ref3) : null));
}

Header.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = Header;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.Footer = Footer;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(11);

var _Footer = {
  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
};

var _Footer2 = _interopRequireDefault(_Footer);

var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";

var _headerBk2 = _interopRequireDefault(_headerBk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
var _ref = (0, _jsx3.default)('p', {}, void 0, '\xA9 2016 \xB7 Hashnode \xB7 LinearBytes Inc.');

// Import Images


var _ref2 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'twitterMessage'
}), ' : ', (0, _jsx3.default)('a', {
  href: 'https://twitter.com/@mern_io',
  target: '_Blank'
}, void 0, '@mern_io'));

function Footer() {
  return (0, _jsx3.default)('div', {
    style: { background: '#FFF url(' + _headerBk2.default + ') center' },
    className: _Footer2.default.footer
  }, void 0, _ref, _ref2);
}

exports.default = Footer;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostListItem = __webpack_require__(82);

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostList(props) {
  return (0, _jsx3.default)('div', {
    className: 'listView'
  }, void 0, props.posts.map(function (post) {
    return (0, _jsx3.default)(_PostListItem2.default, {
      post: post,
      onDelete: function onDelete() {
        return props.handleDeletePost(post.cuid);
      }
    }, post.cuid);
  }));
}

// Import Components
exports.default = PostList;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(15);

var _reactIntl = __webpack_require__(11);

var _PostListItem = {
  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
  "post-action": "_3S84cKmlvGO49pK1biPlXr",
  "divider": "y2SIF3ydn02JYMgeklO7S",
  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'by'
});

// Import Style


var _ref2 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'deletePost'
});

function PostListItem(props) {
  return (0, _jsx3.default)('div', {
    className: _PostListItem2.default['single-post']
  }, void 0, (0, _jsx3.default)('h3', {
    className: _PostListItem2.default['post-title']
  }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
    to: '/posts/' + props.post.slug + '-' + props.post.cuid
  }, void 0, props.post.title)), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['author-name']
  }, void 0, _ref, ' ', props.post.name), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['post-desc']
  }, void 0, props.post.content), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['post-action']
  }, void 0, (0, _jsx3.default)('a', {
    href: '#',
    onClick: props.onDelete
  }, void 0, _ref2)), (0, _jsx3.default)('hr', {
    className: _PostListItem2.default.divider
  }));
}

exports.default = PostListItem;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostCreateWidget = undefined;

var _jsx2 = __webpack_require__(5);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(22);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(24);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(26);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _PostCreateWidget = {
  "form": "_1HNxVmVCIfsWU6Q22cRSd7",
  "form-content": "VlHIHfXe5nkoruuc0N8pJ",
  "form-title": "_32cczwmKrlcNdTsvCr-oBL",
  "form-field": "_1srubE9zVaJuCqkgKCA3lY",
  "post-submit-button": "_2m9Bzr_sJcQ7FK3o3X0PBL",
  "appear": "_30KT3DYyUvGj_5sBYnixvw"
};

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'createNewPost'
});

// Import Style


var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'submit'
});

var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
  (0, _inherits3.default)(PostCreateWidget, _Component);

  function PostCreateWidget() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostCreateWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostCreateWidget.__proto__ || (0, _getPrototypeOf2.default)(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
      var nameRef = _this.refs.name;
      var titleRef = _this.refs.title;
      var contentRef = _this.refs.content;
      if (nameRef.value && titleRef.value && contentRef.value) {
        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
        nameRef.value = titleRef.value = contentRef.value = '';
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostCreateWidget, [{
    key: 'render',
    value: function render() {
      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
      return (0, _jsx3.default)('div', {
        className: cls
      }, void 0, (0, _jsx3.default)('div', {
        className: _PostCreateWidget2.default['form-content']
      }, void 0, (0, _jsx3.default)('h2', {
        className: _PostCreateWidget2.default['form-title']
      }, void 0, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }), _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }), (0, _jsx3.default)('a', {
        className: _PostCreateWidget2.default['post-submit-button'],
        href: '#',
        onClick: this.addPost
      }, void 0, _ref3)));
    }
  }]);
  return PostCreateWidget;
}(_react.Component);

exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(85);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

exports.sequence = sequence;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return _promise2.default.resolve(results);
  };

  return runner();
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _post = __webpack_require__(87);

var PostController = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var postRouter = new _express.Router();

// Get all Posts
postRouter.route('/posts').get(PostController.getPosts);

// Get one post by cuid
postRouter.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
postRouter.route('/posts').post(PostController.addPost);

// Delete a post by cuid
postRouter.route('/posts/:cuid').delete(PostController.deletePost);

exports.default = postRouter;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;

var _post = __webpack_require__(35);

var _post2 = _interopRequireDefault(_post);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
function getPosts(req, res) {
  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  var newPost = new _post2.default(req.body.post);

  // Let's sanitize inputs
  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = (0, _cuid2.default)();
  newPost.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
function getPost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
function deletePost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(function () {
      res.status(200).end();
    });
  });
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postData = postData;

var _post = __webpack_require__(35);

var _post2 = _interopRequireDefault(_post);

var _customer = __webpack_require__(89);

var _customer2 = _interopRequireDefault(_customer);

var _acl = __webpack_require__(90);

var _acl2 = _interopRequireDefault(_acl);

var _cart = __webpack_require__(91);

var _cart2 = _interopRequireDefault(_cart);

var _recipe = __webpack_require__(92);

var _recipe2 = _interopRequireDefault(_recipe);

var _role = __webpack_require__(93);

var _role2 = _interopRequireDefault(_role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export function chefData() {
//   Chef.count().exec((err, count) => {
//     if (count > 0) {
//       return;
//     }
//     const content1 = 'chef 1';
//     const content2 = 'chef 2';
//     const chef1 = new Post({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
//     const chef2 = new Post({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
//     Chef.create([chef1, chef2], (error) => {
//       if (!error) {
//         // console.log('ready to go....');
//       }
//     });
//   });
// }


function postData() {
  _post2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }

    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    _post2.default.create([post1, post2], function (error) {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
// import Chef from './models/chef';

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var customerSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Customer', customerSchema);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var aclSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Acl', aclSchema);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var cartSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Cart', cartSchema);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var recipeSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Recipe', recipeSchema);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var roleSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Role', roleSchema);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _user = __webpack_require__(95);

var router = (0, _express.Router)();

router.get('/', _user.me);
router.put('/', _user.updateMe);

exports.default = router;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMe = exports.me = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var me = exports.me = function me(req, res) {
  res.status(200).json({ data: req.user });
};

var updateMe = exports.updateMe = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user.User.findByIdAndUpdate(req.user._id, req.body, {
              new: true
            }).lean().exec();

          case 3:
            user = _context.sent;


            res.status(200).json({ data: user });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            res.status(400).end();

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function updateMe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protect = exports.signin = exports.signup = exports.verifyToken = exports.newToken = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

var _config = __webpack_require__(20);

var _config2 = _interopRequireDefault(_config);

var _user = __webpack_require__(36);

var _jsonwebtoken = __webpack_require__(98);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newToken = exports.newToken = function newToken(user) {
  return _jsonwebtoken2.default.sign({ id: user.id }, _config2.default.secrets.jwt, {
    expiresIn: _config2.default.secrets.jwtExp
  });
};

var verifyToken = exports.verifyToken = function verifyToken(token) {
  return new _promise2.default(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, _config2.default.secrets.jwt, function (err, payload) {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

var signup = exports.signup = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var user, token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', res.status(400).send({ message: 'need email and password' }));

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return _user.User.create(req.body);

          case 5:
            user = _context.sent;
            token = newToken(user);
            return _context.abrupt('return', res.status(201).send({ token: token }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', res.status(500).end());

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 10]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var signin = exports.signin = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var invalid, user, match, token;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt('return', res.status(400).send({ message: 'need email and password' }));

          case 2:
            invalid = { message: 'Invalid email and passoword combination' };
            _context2.prev = 3;
            _context2.next = 6;
            return _user.User.findOne({ email: req.body.email }).select('email password').exec();

          case 6:
            user = _context2.sent;

            if (user) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt('return', res.status(401).send(invalid));

          case 9:
            _context2.next = 11;
            return user.checkPassword(req.body.password);

          case 11:
            match = _context2.sent;

            if (match) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt('return', res.status(401).send(invalid));

          case 14:
            token = newToken(user);
            return _context2.abrupt('return', res.status(201).send({ token: token }));

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2['catch'](3);

            console.error(_context2.t0);
            res.status(500).end();

          case 22:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[3, 18]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var protect = exports.protect = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var bearer, token, payload, user;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bearer = req.headers.authorization;

            if (!(!bearer || !bearer.startsWith('Bearer '))) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt('return', res.status(401).end());

          case 3:
            token = bearer.split('Bearer ')[1].trim();
            payload = void 0;
            _context3.prev = 5;
            _context3.next = 8;
            return verifyToken(token);

          case 8:
            payload = _context3.sent;
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3['catch'](5);
            return _context3.abrupt('return', res.status(401).end());

          case 14:
            _context3.next = 16;
            return _user.User.findById(payload.id).select('-password').lean().exec();

          case 16:
            user = _context3.sent;

            if (user) {
              _context3.next = 19;
              break;
            }

            return _context3.abrupt('return', res.status(401).end());

          case 19:

            req.user = user;
            next();

          case 21:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[5, 11]]);
  }));

  return function protect(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(100);

var ChefController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Chef Routes
*
* This contains defalut Chef Route for the API.
*/

var ChefRouter = new _express.Router();

// Get all Chefs
ChefRouter.route('/chefs').get(ChefController.getChef);

// Get one Chef by cuid
ChefRouter.route('/chefs/:cuid').get(ChefController.getChefById);

// Add a new Chef
ChefRouter.route('/chefs').post(ChefController.addChef);

// Update a Chef
ChefRouter.route('/chefs/:cuid').put(ChefController.updateOneChef);

// Delete a Chef by cuid
ChefRouter.route('/chefs/:cuid').delete(ChefController.deleteChef);

exports.default = ChefRouter;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteChef = exports.updateOneChef = exports.getChefById = exports.addChef = exports.getChef = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all chefs
* @param req
* @param res
* @returns void
*/

/*
* Chef Controller
*
* This contains default Chef controller.
*/

var getChef = exports.getChef = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getChef(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a chef
* @param req
* @param res
* @returns void
*/

var addChef = exports.addChef = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedChef, chef;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedChef = new _model2.default(req.body);

            // Let's sanitize inputs
            //  sanitizedChef.item = sanitizeHtml(sanitizedChef.item);
            // sanitizedChef.info = sanitizeHtml(sanitizedChef.info); --}}
            // sanitizedChef.created_by = sanitizeHtml(sanitizedChef.created_by);
            // sanitizedChef.created_at = sanitizeHtml(sanitizedChef.created_at);

            // Add slug data for specific field

            sanitizedChef.slug = (0, _limax2.default)(sanitizedChef.name.toLowerCase(), { lowercase: true });

            // Add cuid for the model
            sanitizedChef.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 6;
            return _model2.default.create(sanitizedChef);

          case 6:
            chef = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(chef.toJSON()));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function addChef(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single chef By Id
* @param req
* @param res
* @returns void
*/

var getChefById = exports.getChefById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getChefById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a chef
* @param req
* @param res
* @returns void
*/

var updateOneChef = exports.updateOneChef = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOneChef(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a chef
* @param req
* @param res
* @returns void
*/

var deleteChef = exports.deleteChef = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deleteChef(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(37);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chefData;

var _model = __webpack_require__(37);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function chefData() {
  _model2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }
    _model2.default.find({}).remove(function () {
      _model2.default.create({
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z'
      }, function (error) {
        if (!error) {
          console.log('ready to go!');
        }
      });
    });
  });
} /*
  * Chef dummy data
  *
  * This contains defalut Chef dummy data.
  */

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(103);

var FoodController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Food Routes
*
* This contains defalut Food Route for the API.
*/

var FoodRouter = new _express.Router();

// Get all Foods
FoodRouter.route('/foods').get(FoodController.getFood);

// Get one Food by cuid
FoodRouter.route('/foods/:cuid').get(FoodController.getFoodById);

// Add a new Food
FoodRouter.route('/foods').post(FoodController.addFood);

// Update a Food
FoodRouter.route('/foods/:cuid').put(FoodController.updateOneFood);

// Delete a Food by cuid
FoodRouter.route('/foods/:cuid').delete(FoodController.deleteFood);

exports.default = FoodRouter;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFood = exports.updateOneFood = exports.getFoodById = exports.addFood = exports.getFood = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all foods
* @param req
* @param res
* @returns void
*/

/*
* Food Controller
*
* This contains default Food controller.
*/

var getFood = exports.getFood = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getFood(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a food
* @param req
* @param res
* @returns void
*/

var addFood = exports.addFood = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedFood, food;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedFood = new _model2.default(req.body);

            // Let's sanitize inputs

            sanitizedFood.item = (0, _sanitizeHtml2.default)(sanitizedFood.item);
            // sanitizedFood.info = sanitizeHtml(sanitizedFood.info); --}}
            // sanitizedFood.created_by = sanitizeHtml(sanitizedFood.created_by);
            // sanitizedFood.created_at = sanitizeHtml(sanitizedFood.created_at);

            // Add slug data for specific field
            sanitizedFood.slug = (0, _limax2.default)(sanitizedFood.item.toLowerCase(), { lowercase: true });

            // Add cuid for the model
            sanitizedFood.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 7;
            return _model2.default.create(sanitizedFood);

          case 7:
            food = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(food.toJSON()));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 11]]);
  }));

  return function addFood(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single food By Id
* @param req
* @param res
* @returns void
*/

var getFoodById = exports.getFoodById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getFoodById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a food
* @param req
* @param res
* @returns void
*/

var updateOneFood = exports.updateOneFood = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOneFood(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a food
* @param req
* @param res
* @returns void
*/

var deleteFood = exports.deleteFood = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deleteFood(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(38);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = foodData;

var _model = __webpack_require__(38);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function foodData() {
  _model2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }
    _model2.default.find({}).remove(function () {
      _model2.default.create({
        item: 'Beef Ribs',
        info: 'Lorem ipsssum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_beef_ribs.jpg',
        genre: 'English',
        cost: 34,
        privacy: 'public',
        latitude: '-31.7061491',
        longitude: '152.90369529999998',
        location: 'The Rocks,NSW,Australia',
        popular: 'false',
        suburb: 'The Rocks',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Ruhan',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Steak',
        info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        genre: 'Western',
        cost: 46,
        privacy: 'public',
        latitude: '-32.7061491',
        longitude: '149.90369529999998',
        location: 'Stanhope Gardens,NSW,Australia',
        popular: 'true',
        suburb: 'Stanhope Gardens',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'David Hick',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Spaghetti bolognese',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_spaghetti_bolognese.jpg',
        genre: 'Italian',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'LIDCOMBE,NSW,Australia',
        popular: 'true',
        suburb: 'LIDCOMBE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Hainanese chicken',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_hainanese_chicken.jpg',
        genre: 'Chinese',
        cost: 52,
        privacy: 'public',
        latitude: '-31.7061491',
        longitude: '146.90369529999998',
        location: 'STRATHFIELD,NSW,Australia',
        popular: 'false',
        suburb: 'STRATHFIELD',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Bruschetta',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_bruschetta.jpeg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        location: 'BRISBANE,NSW,Australia',
        popular: 'false',
        suburb: 'BRISBANE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Lamb Shanks',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_lamb_shanks.jpg',
        genre: 'Mediterranean',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        location: 'MELBOURNE,NSW,Australia',
        popular: 'false',
        suburb: 'MELBOURNE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Chilli Crab',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_chilli_crab.jpg',
        genre: 'Maxican',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        location: 'BLUE MOUNTAINS,NSW,Australia',
        popular: 'true',
        suburb: 'BLUE MOUNTAINS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Peeking Duck',
        info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_peeking_duck.jpg',
        genre: 'Asian',
        cost: 48,
        privacy: 'public',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        location: 'ROCKDALE,NSW,Australia',
        popular: 'false',
        suburb: 'ROCKDALE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'John Sims',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Soupe à L’oignon',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Soupe_a_Loignon.jpg',
        genre: 'French',
        cost: 34,
        privacy: 'public',
        latitude: '-31.7061491',
        longitude: '152.90369529999998',
        location: 'LAKEMBA,NSW,Australia',
        popular: 'false',
        suburb: 'LAKEMBA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Jason Bourne',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Blanquette de Veau',
        info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Blanquette_de_Veau.jpg',
        genre: 'French',
        cost: 46,
        privacy: 'public',
        latitude: '-32.7061491',
        longitude: '149.90369529999998',
        location: 'ST IVES,NSW,Australia',
        popular: 'true',
        suburb: 'ST IVES',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'David Hick',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Buckwheat Crêpes',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Buckwheat_Crepes.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'BANGOR,NSW,Australia',
        popular: 'false',
        suburb: 'BANGOR',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Baked Camembert',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Baked_Camembert.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'COOGEE,NSW,Australia',
        popular: 'false',
        suburb: 'COOGEE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Moules Marinières',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Moules_Marinieres.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'BONDI,NSW,Australia',
        popular: 'false',
        suburb: 'BONDI',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Rum baba',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_rum_baba.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'MAROUBRA,NSW,Australia',
        popular: 'true',
        suburb: 'MAROUBRA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Sweet Crêpe',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_sweet_crepe.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'SCHOFIELDS,NSW,Australia',
        popular: 'false',
        suburb: 'SCHOFIELDS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Nasi lemak',
        info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_nasi_lemak.jpg',
        genre: 'Malaysian',
        cost: 48,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'RANDWICK,NSW,Australia',
        popular: 'false',
        suburb: 'RANDWICK',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'John Sims',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Sole Meunière',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Sole_Meuniere.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'QUAKERS HILLS,NSW,Australia',
        popular: 'true',
        suburb: 'QUAKERS HILLS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Hachis Parmentier',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Hachis_Parmentier.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'MOSMAN,NSW,Australia',
        popular: 'false',
        suburb: 'MOSMAN',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Boudin Noir Aux Pommes',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Boudin_Noir_Aux_Pommes.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'VAUCLUSE,NSW,Australia',
        popular: 'false',
        suburb: 'VAUCLUSE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Steak Tartare',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Steak_Tartare.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'ROOTY HILLS,NSW,Australia',
        popular: 'false',
        suburb: 'ROOTY HILLS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Pot-au-feu',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Pot-au-feu.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'seven HILLS,NSW,Australia',
        popular: 'false',
        suburb: 'seven HILLS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Sole Meunière',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Sole_Meuniere.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'CASTLE HILLS,NSW,Australia',
        popular: 'false',
        suburb: 'CASTLE HILLS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Hachis Parmentier',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Hachis_Parmentier.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'RYDE,NSW,Australia',
        popular: 'true',
        suburb: 'RYDE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Boudin Noir Aux Pommes',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Boudin_Noir_Aux_Pommes.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'MACQUARIE PARK,NSW,Australia',
        popular: 'false',
        suburb: 'MACQUARIE PARK',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Steak Tartare',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Steak_Tartare.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'SYDNEY,NSW,Australia',
        popular: 'false',
        suburb: 'SYDNEY',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Pot-au-feu',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Pot-au-feu.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'NORTH SYDNEY,NSW,Australia',
        popular: 'false',
        suburb: 'NORTH SYDNEY',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Piperade',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Piperade.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'DOUBLE BAY,NSW,Australia',
        popular: 'true',
        suburb: 'DOUBLE BAY',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Magret de Canard',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Magret_de_Canard.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'KENSINGTON,NSW,Australia',
        popular: 'false',
        suburb: 'KENSINGTON',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Garbure',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Garbure.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'LA PEROUSE,NSW,Australia',
        popular: 'false',
        suburb: 'LA PEROUSE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Cassoulet',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Cassoulet.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'BRIGHTON,NSW,Australia',
        popular: 'false',
        suburb: 'BRIGHTON',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Pan-seared Foie Gras',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Pan-seared-Foie-Gras.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'BLACKTOWN,NSW,Australia',
        popular: 'false',
        suburb: 'BLACKTOWN',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Confit de Canard',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Confit-de-Canard.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'PENRITH,NSW,Australia',
        popular: 'true',
        suburb: 'PENRITH',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Poulet Basquaise',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Poulet-Basquaise.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'MILSONS POINT,NSW,Australia',
        popular: 'false',
        suburb: 'MILSONS POINT',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Lamprey à la Bordelaise',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Lamprey-a-la-Bordelaise.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'ASHFIELD,NSW,Australia',
        popular: 'false',
        suburb: 'ASHFIELD',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Quenelles of Pike with Lobster Sauce',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Quenelles-of-Pike-with-Lobster-Sauce.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'HORNSBY,NSW,Australia',
        popular: 'false',
        suburb: 'HORNSBY',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Soupe de Poisson à la Rouille',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Soupe-de-Poisson-a-la-Rouille.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'PARAMATTA,NSW,Australia',
        popular: 'false',
        suburb: 'PARAMATTA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Gigot D’Agneau Pleureur',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Gigot-DAgneau-Pleureur.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'MINTO,NSW,Australia',
        popular: 'true',
        suburb: 'MINTO',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Bouillabaisse',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Bouillabaisse.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'LIVERPOOL,NSW,Australia',
        popular: 'false',
        suburb: 'LIVERPOOL',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Pissaladière',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Pissaladiere.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'CANBERRA,NSW,Australia',
        popular: 'true',
        suburb: 'CANBERRA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Soupe au Pistou',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Soupe-au-Pistou.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'WILEY CREEK,NSW,Australia',
        popular: 'false',
        suburb: 'WILEY CREEK',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Ratatouille',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Ratatouille.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'TOONGABBIE,NSW,Australia',
        popular: 'false',
        suburb: 'TOONGABBIE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Roasted Chicken and Garlic',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Roasted-Chicken-and-Garlic.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'MANLY,NSW,Australia',
        popular: 'false',
        suburb: 'MANLY',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Navarin D’Agneau',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Navarin-D-Agneau.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'WESTMEAD,NSW,Australia',
        popular: 'false',
        suburb: 'WESTMEAD',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Foie de Veau à la Lyonnaise',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Lyonnaise.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'GLENFIELD,NSW,Australia',
        popular: 'false',
        suburb: 'GLENFIELD',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Aligot',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Aligot.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'ROUSE HILLS,NSW,Australia',
        popular: 'false',
        suburb: 'ROUSE HILLS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Coq au Vin',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Coq-au-Vin.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'CABRAMATTA,NSW,Australia',
        popular: 'false',
        suburb: 'CABRAMATTA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Flammekueche',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Flammekueche.jpg',
        genre: 'French',
        cost: 29,
        privacy: 'public',
        latitude: '-35.7061491',
        longitude: '155.90369529999998',
        location: 'NORTH BONDI,NSW,Australia',
        popular: 'false',
        suburb: 'NORTH BONDI',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Roger Waters',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Raclette',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Raclette.jpg',
        genre: 'French',
        cost: 52,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'HARRIS PARK,NSW,Australia',
        popular: 'true',
        suburb: 'HARRIS PARK',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Paul Simon',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Choucroute Garnie',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Choucroute-Garnie.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'TERRIGAL,NSW,Australia',
        popular: 'false',
        suburb: 'TERRIGAL',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Baeckeoffe',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Baeckeoffe.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'KATOOMBA,NSW,Australia',
        popular: 'true',
        suburb: 'KATOOMBA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Quiche Lorraine',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Quiche-Lorraine.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'MARSDEN PARK,NSW,Australia',
        popular: 'false',
        suburb: 'MARSDEN PARK',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Vietnamese',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Boeuf Bourguignon',
        info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Boeuf-Bourguignon.jpg',
        genre: 'French',
        cost: 11,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'KINGSGROVE,NSW,Australia',
        popular: 'false',
        suburb: 'KINGSGROVE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Antoni Hez',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {

        item: 'Escargots',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Escargots.jpg',
        genre: 'French',
        cost: 20,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'CAMPSIE,NSW,Australia',
        popular: 'false',
        suburb: 'CAMPSIE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Slow cooking',
        createdBy: 'Rumman Ahmed',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Gougères',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Gougeres.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'EASTWOOD,NSW,Australia',
        popular: 'false',
        suburb: 'EASTWOOD',
        state: 'NSW',
        country: 'Australia',
        recipe: 'French',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Cod Accras',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Cod-Accras.jpg',
        genre: 'French',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'EASTLAKES,NSW,Australia',
        popular: 'true',
        suburb: 'EASTLAKES',
        state: 'NSW',
        country: 'Australia',
        recipe: 'French',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Panta Elish',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_panta-ilish.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'EASTGARDENS,NSW,Australia',
        popular: 'false',
        suburb: 'EASTGARDENS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Fuchka',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_fuchka.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'The Ponds,NSW,Australia',
        popular: 'false',
        suburb: 'The Ponds',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Morog Polaow',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_morog-polaow.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'SCHOFIELDS,NSW,Australia',
        popular: 'true',
        suburb: 'SCHOFIELDS',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Bhapa Pitha',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_bhapa-pitha.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'The Ponds,NSW,Australia',
        popular: 'false',
        suburb: 'The Ponds',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Kichuri',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_khichuri.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'The Ponds,NSW,Australia',
        popular: 'true',
        suburb: 'The Ponds',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Biriyani',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_biriyani.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'The Ponds,NSW,Australia',
        popular: 'false',
        suburb: 'The Ponds',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Chittagong Chicken',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Chittagong-Chicken.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'The Rocks,NSW,Australia',
        popular: 'false',
        suburb: 'The Rocks',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Murgh Makhan',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Murgh-Makhan.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'COOGEE,NSW,Australia',
        popular: 'false',
        suburb: 'COOGEE',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Tarka Daal',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Tarka-Daal.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'BELLA VISTA,NSW,Australia',
        popular: 'true',
        suburb: 'BELLA VISTA',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, {
        item: 'Mustard Fish',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_Mustard-Fish.jpg',
        genre: 'Bangladeshi',
        cost: 67,
        privacy: 'public',
        latitude: '-33.7904955',
        longitude: '151.1228434',
        location: 'SPRINGFIELD,NSW,Australia',
        popular: 'true',
        suburb: 'SPRINGFIELD',
        state: 'NSW',
        country: 'Australia',
        recipe: 'Bangladeshi',
        createdBy: 'Paul Dirac',
        created_at: '2008-12-17T11:01:23.460Z'
      }, function (error) {
        if (!error) {
          console.log('ready to go!');
        }
      });
    });
  });
} /*
  * Food dummy data
  *
  * This contains defalut Food dummy data.
  */

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(106);

var ShopcartController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Shopcart Routes
*
* This contains defalut Shopcart Route for the API.
*/

var ShopcartRouter = new _express.Router();

// Get all Shopcarts
ShopcartRouter.route('/shopcarts').get(ShopcartController.getShopcart);

// Get one Shopcart by cuid
ShopcartRouter.route('/shopcarts/:cuid').get(ShopcartController.getShopcartById);

// Add a new Shopcart
ShopcartRouter.route('/shopcarts').post(ShopcartController.addShopcart);

// Update a Shopcart
ShopcartRouter.route('/shopcarts/:cuid').put(ShopcartController.updateOneShopcart);

// Delete a Shopcart by cuid
ShopcartRouter.route('/shopcarts/:cuid').delete(ShopcartController.deleteShopcart);

exports.default = ShopcartRouter;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteShopcart = exports.updateOneShopcart = exports.getShopcartById = exports.addShopcart = exports.getShopcart = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all shopcarts
* @param req
* @param res
* @returns void
*/

/*
* Shopcart Controller
*
* This contains default Shopcart controller.
*/

var getShopcart = exports.getShopcart = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var doc;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _model2.default.find({
                            // {createdBy: req.user._id}
                        }).sort('-dateAdded').lean().exec();

                    case 3:
                        doc = _context.sent;
                        return _context.abrupt('return', res.status(200).json({ data: doc }));

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.error(_context.t0);
                        return _context.abrupt('return', res.status(400).send(_context.t0));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function getShopcart(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/**
* Save a shopcart
* @param req
* @param res
* @returns void
*/

var addShopcart = exports.addShopcart = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var sanitizedShopcart, shopcart;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        // Save model data for Sanitization
                        // const createdBy = req.user._id
                        // console.log('createdBy', createdBy);
                        sanitizedShopcart = new _model2.default(req.body);

                        // Let's sanitize inputs

                        sanitizedShopcart.item = (0, _sanitizeHtml2.default)(sanitizedShopcart.item);
                        // sanitizedShopcart.info = sanitizeHtml(sanitizedShopcart.info); --}}
                        // sanitizedShopcart.created_by = sanitizeHtml(sanitizedShopcart.created_by);
                        // sanitizedShopcart.created_at = sanitizeHtml(sanitizedShopcart.created_at);

                        // Add slug data for specific field
                        sanitizedShopcart.slug = (0, _limax2.default)(sanitizedShopcart.item.toLowerCase(), { lowercase: true });

                        // Add cuid for the model
                        sanitizedShopcart.cuid = (0, _cuid2.default)();

                        // Make asynchronous call to save the model to Database
                        _context2.next = 7;
                        return _model2.default.create(sanitizedShopcart);

                    case 7:
                        shopcart = _context2.sent;
                        return _context2.abrupt('return', res.status(201).json(shopcart.toJSON()));

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);
                        return _context2.abrupt('return', res.status(400).send(_context2.t0));

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 11]]);
    }));

    return function addShopcart(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

/**
* Get a single shopcart By Id
* @param req
* @param res
* @returns void
*/

var getShopcartById = exports.getShopcartById = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var doc;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;

                        console.log("cuid is :", req.params.cuid);
                        _context3.next = 4;
                        return _model2.default.findOne({
                            // createdBy: req.user._id,
                            cuid: req.params.cuid
                            // _id: req.params.id
                        }).lean().exec();

                    case 4:
                        doc = _context3.sent;

                        if (doc) {
                            _context3.next = 7;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).end());

                    case 7:
                        return _context3.abrupt('return', res.status(200).json({ data: doc }));

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.status(400).send(_context3.t0));

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 10]]);
    }));

    return function getShopcartById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

/**
* Update a shopcart
* @param req
* @param res
* @returns void
*/

var updateOneShopcart = exports.updateOneShopcart = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var updatedDoc;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _model2.default.findOneAndUpdate({
                            // createdBy: req.user._id,
                            cuid: req.params.cuid
                            // _id: req.params.id
                        }, req.body, { new: true }).lean().exec();

                    case 3:
                        updatedDoc = _context4.sent;

                        if (updatedDoc) {
                            _context4.next = 6;
                            break;
                        }

                        return _context4.abrupt('return', res.status(400).end());

                    case 6:
                        return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

                    case 9:
                        _context4.prev = 9;
                        _context4.t0 = _context4['catch'](0);

                        console.error(_context4.t0);
                        return _context4.abrupt('return', res.status(400).send(_context4.t0));

                    case 13:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 9]]);
    }));

    return function updateOneShopcart(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

/**
* Delete a shopcart
* @param req
* @param res
* @returns void
*/

var deleteShopcart = exports.deleteShopcart = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var removed;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _model2.default.findOneAndRemove({
                            // createdBy:req.user._id,
                            cuid: req.params.cuid
                            // _id:req.params.id,
                        });

                    case 3:
                        removed = _context5.sent;

                        if (removed) {
                            _context5.next = 6;
                            break;
                        }

                        return _context5.abrupt('return', res.status(400).end());

                    case 6:
                        return _context5.abrupt('return', res.status(200).json({ data: removed }));

                    case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5['catch'](0);

                        console.error(_context5.t0);
                        return _context5.abrupt('return', res.status(400).send(_context5.t0));

                    case 13:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 9]]);
    }));

    return function deleteShopcart(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _model = __webpack_require__(39);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shopcartData;

var _model = __webpack_require__(39);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shopcartData() {
  _model2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }
    _model2.default.find({}).remove(function () {
      _model2.default.create({
        name: 'Steak',
        produced_by: 'David Hick ',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        cost: 13,
        available: 'In Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 5,
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Hainanese Chicken',
        produced_by: 'Paul Simon',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_hainanese_chicken.jpg',
        cost: 63,
        available: 'Out of Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 1,
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Lamb Shanks',
        produced_by: 'Rumman Ah med',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_lamb_shanks.jpg',
        cost: 22,
        available: 'Pre Order',
        carted_by: 'Rumman Ahmed',
        quantity: 3,
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Spaghetti Bolognese',
        produced_by: 'Roger Waters',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_spaghetti_bolognese.jpg',
        cost: 61,
        available: 'Not Available',
        carted_by: 'Rumman Ahmed',
        quantity: 4,
        created_at: '2008-04-17T11:01:00.000Z'
      }, function (error) {
        if (!error) {
          console.log('ready to go!');
        }
      });
    });
  });
} /*
  * Shopcart dummy data
  *
  * This contains defalut Shopcart dummy data.
  */

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(109);

var LocationController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Location Routes
*
* This contains defalut Location Route for the API.
*/

var LocationRouter = new _express.Router();

// Get all Locations
LocationRouter.route('/locations').get(LocationController.getLocation);

// Get one Location by cuid
LocationRouter.route('/locations/:cuid').get(LocationController.getLocationById);

// Add a new Location
LocationRouter.route('/locations').post(LocationController.addLocation);

// Update a Location
LocationRouter.route('/locations/:cuid').put(LocationController.updateOneLocation);

// Delete a Location by cuid
LocationRouter.route('/locations/:cuid').delete(LocationController.deleteLocation);

exports.default = LocationRouter;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteLocation = exports.updateOneLocation = exports.getLocationById = exports.addLocation = exports.getLocation = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all locations
* @param req
* @param res
* @returns void
*/

/*
* Location Controller
*
* This contains default Location controller.
*/

var getLocation = exports.getLocation = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getLocation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a location
* @param req
* @param res
* @returns void
*/

var addLocation = exports.addLocation = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedLocation, location;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedLocation = new _model2.default(req.body);

            // Let's sanitize inputs
            //  sanitizedLocation.item = sanitizeHtml(sanitizedLocation.item);
            // sanitizedLocation.info = sanitizeHtml(sanitizedLocation.info); --}}
            // sanitizedLocation.created_by = sanitizeHtml(sanitizedLocation.created_by);
            // sanitizedLocation.created_at = sanitizeHtml(sanitizedLocation.created_at);

            // Add slug data for specific field

            sanitizedLocation.slug = (0, _limax2.default)(sanitizedLocation.item.toLowerCase(), { lowercase: true });

            // Add cuid for the model
            sanitizedLocation.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 6;
            return _model2.default.create(sanitizedLocation);

          case 6:
            location = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(location.toJSON()));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function addLocation(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single location By Id
* @param req
* @param res
* @returns void
*/

var getLocationById = exports.getLocationById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getLocationById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a location
* @param req
* @param res
* @returns void
*/

var updateOneLocation = exports.updateOneLocation = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOneLocation(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a location
* @param req
* @param res
* @returns void
*/

var deleteLocation = exports.deleteLocation = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deleteLocation(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(40);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
* Location dummy data
*
* This contains defalut Location dummy data.
*/

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(112);

var OrderController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Order Routes
*
* This contains defalut Order Route for the API.
*/

var OrderRouter = new _express.Router();

// Get all Orders
OrderRouter.route('/orders').get(OrderController.getOrder);

// Get one Order by cuid
OrderRouter.route('/orders/:cuid').get(OrderController.getOrderById);

// Add a new Order
OrderRouter.route('/orders').post(OrderController.addOrder);

// Update a Order
OrderRouter.route('/orders/:cuid').put(OrderController.updateOneOrder);

// Delete a Order by cuid
OrderRouter.route('/orders/:cuid').delete(OrderController.deleteOrder);

exports.default = OrderRouter;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOrder = exports.updateOneOrder = exports.getOrderById = exports.addOrder = exports.getOrder = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all orders
* @param req
* @param res
* @returns void
*/

/*
* Order Controller
*
* This contains default Order controller.
*/

var getOrder = exports.getOrder = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a order
* @param req
* @param res
* @returns void
*/

var addOrder = exports.addOrder = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedOrder, order;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedOrder = new _model2.default(req.body);

            // Let's sanitize inputs
            //  sanitizedOrder.item = sanitizeHtml(sanitizedOrder.item);
            // sanitizedOrder.info = sanitizeHtml(sanitizedOrder.info); --}}
            // sanitizedOrder.created_by = sanitizeHtml(sanitizedOrder.created_by);
            // sanitizedOrder.created_at = sanitizeHtml(sanitizedOrder.created_at);

            // Add slug data for specific field
            // sanitizedOrder.slug = slug(sanitizedOrder
            //     .item.toLowerCase(), { lowercase: true });

            // Add cuid for the model

            sanitizedOrder.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 5;
            return _model2.default.create(sanitizedOrder);

          case 5:
            order = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(order.toJSON()));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));

  return function addOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single order By Id
* @param req
* @param res
* @returns void
*/

var getOrderById = exports.getOrderById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getOrderById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a order
* @param req
* @param res
* @returns void
*/

var updateOneOrder = exports.updateOneOrder = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOneOrder(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a order
* @param req
* @param res
* @returns void
*/

var deleteOrder = exports.deleteOrder = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deleteOrder(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(16);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderData;

var _model = __webpack_require__(16);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function orderData() {
  _model2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }
    _model2.default.find({}).remove(function () {
      _model2.default.create({
        items: 'Steak',
        info: 'This is a steak info',
        product_id: '5c98704d8a04420022be9412',
        produced_by: 'David Hick test',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        totalCost: 13,
        subTotal: 7,
        shipping: 2,
        quantity: 3,
        location: 'The Ponds',
        ordered_by: 'Rumman Ahmed',
        created_at: '2008-04-17T11:01:00.000Z'
      }, function (error) {
        if (!error) {
          console.log('ready to go!');
        }
      });
    });
  });
} /*
  * Order dummy data
  *
  * This contains defalut Order dummy data.
  */

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(115);

var PencilController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Pencil Routes
*
* This contains defalut Pencil Route for the API.
*/

var PencilRouter = new _express.Router();

// Get all Pencils
PencilRouter.route('/pencils').get(PencilController.getPencil);

// Get one Pencil by cuid
PencilRouter.route('/pencils/:cuid').get(PencilController.getPencilById);

// Add a new Pencil
PencilRouter.route('/pencils').post(PencilController.addPencil);

// Update a Pencil
PencilRouter.route('/pencils/:cuid').put(PencilController.updateOnePencil);

// Delete a Pencil by cuid
PencilRouter.route('/pencils/:cuid').delete(PencilController.deletePencil);

exports.default = PencilRouter;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePencil = exports.updateOnePencil = exports.getPencilById = exports.addPencil = exports.getPencil = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all pencils
* @param req
* @param res
* @returns void
*/

/*
* Pencil Controller
*
* This contains default Pencil controller.
*/

var getPencil = exports.getPencil = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getPencil(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a pencil
* @param req
* @param res
* @returns void
*/

var addPencil = exports.addPencil = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedPencil, pencil;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedPencil = new _model2.default(req.body);

            // Let's sanitize inputs
            //  sanitizedPencil.item = sanitizeHtml(sanitizedPencil.item);
            // sanitizedPencil.info = sanitizeHtml(sanitizedPencil.info); --}}
            // sanitizedPencil.created_by = sanitizeHtml(sanitizedPencil.created_by);
            // sanitizedPencil.created_at = sanitizeHtml(sanitizedPencil.created_at);

            // Add slug data for specific field

            sanitizedPencil.slug = (0, _limax2.default)(sanitizedPencil.item.toLowerCase(), { lowercase: true });

            // Add cuid for the model
            sanitizedPencil.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 6;
            return _model2.default.create(sanitizedPencil);

          case 6:
            pencil = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(pencil.toJSON()));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function addPencil(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single pencil By Id
* @param req
* @param res
* @returns void
*/

var getPencilById = exports.getPencilById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getPencilById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a pencil
* @param req
* @param res
* @returns void
*/

var updateOnePencil = exports.updateOnePencil = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOnePencil(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a pencil
* @param req
* @param res
* @returns void
*/

var deletePencil = exports.deletePencil = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deletePencil(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(41);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pencilData;

var _model = __webpack_require__(41);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pencilData() {
    _model2.default.count().exec(function (err, count) {
        if (count > 0) {
            return;
        }
        _model2.default.find({}).remove(function () {
            _model2.default.create({
                item: 'Pencil item',
                info: 'Lorem ipsssum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdBy: 'Pencil',
                created_at: '2008-12-17T11:01:23.460Z'
            }, function (error) {
                if (!error) {
                    console.log('ready to go!');
                }
            });
        });
    });
} /*
  * Pencil dummy data
  *
  * This contains defalut Pencil dummy data.
  */

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(118);

var BookController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Book Routes
*
* This contains defalut Book Route for the API.
*/

var BookRouter = new _express.Router();

// Get all Books
BookRouter.route('/books').get(BookController.getBook);

// Get one Book by cuid
BookRouter.route('/books/:cuid').get(BookController.getBookById);

// Add a new Book
BookRouter.route('/books').post(BookController.addBook);

// Update a Book
BookRouter.route('/books/:cuid').put(BookController.updateOneBook);

// Delete a Book by cuid
BookRouter.route('/books/:cuid').delete(BookController.deleteBook);

exports.default = BookRouter;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBook = exports.updateOneBook = exports.getBookById = exports.addBook = exports.getBook = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all books
* @param req
* @param res
* @returns void
*/

/*
* Book Controller
*
* This contains default Book controller.
*/

var getBook = exports.getBook = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a book
* @param req
* @param res
* @returns void
*/

var addBook = exports.addBook = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedBook, book;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedBook = new _model2.default(req.body);

            // Let's sanitize inputs

            sanitizedBook.item = (0, _sanitizeHtml2.default)(sanitizedBook.item);
            // sanitizedBook.info = sanitizeHtml(sanitizedBook.info); --}}
            // sanitizedBook.created_by = sanitizeHtml(sanitizedBook.created_by);
            // sanitizedBook.created_at = sanitizeHtml(sanitizedBook.created_at);

            // Add slug data for specific field
            sanitizedBook.slug = (0, _limax2.default)(sanitizedBook.item.toLowerCase(), { lowercase: true });

            // Add cuid for the model
            sanitizedBook.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 7;
            return _model2.default.create(sanitizedBook);

          case 7:
            book = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(book.toJSON()));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 11]]);
  }));

  return function addBook(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single book By Id
* @param req
* @param res
* @returns void
*/

var getBookById = exports.getBookById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getBookById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a book
* @param req
* @param res
* @returns void
*/

var updateOneBook = exports.updateOneBook = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOneBook(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a book
* @param req
* @param res
* @returns void
*/

var deleteBook = exports.deleteBook = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deleteBook(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(42);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bookData;

var _model = __webpack_require__(42);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bookData() {
    _model2.default.count().exec(function (err, count) {
        if (count > 0) {
            return;
        }
        _model2.default.find({}).remove(function () {
            _model2.default.create({
                item: 'Book item',
                info: 'Lorem ipsssum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdBy: 'Book',
                created_at: '2008-12-17T11:01:23.460Z'
            }, function (error) {
                if (!error) {
                    console.log('ready to go!');
                }
            });
        });
    });
} /*
  * Book dummy data
  *
  * This contains defalut Book dummy data.
  */

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(121);

var ShipmentController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Shipment Routes
*
* This contains defalut Shipment Route for the API.
*/

var ShipmentRouter = new _express.Router();

// Get all Shipments
ShipmentRouter.route('/shipments').get(ShipmentController.getShipment);

// Get one Shipment by cuid
ShipmentRouter.route('/shipments/:cuid').get(ShipmentController.getShipmentById);

// Add a new Shipment
ShipmentRouter.route('/shipments').post(ShipmentController.addShipment);

// Update a Shipment
ShipmentRouter.route('/shipments/:cuid').put(ShipmentController.updateOneShipment);

// Delete a Shipment by cuid
ShipmentRouter.route('/shipments/:cuid').delete(ShipmentController.deleteShipment);

exports.default = ShipmentRouter;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteShipment = exports.updateOneShipment = exports.getShipmentById = exports.addShipment = exports.getShipment = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all shipments
* @param req
* @param res
* @returns void
*/

/*
* Shipment Controller
*
* This contains default Shipment controller.
*/

var getShipment = exports.getShipment = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model2.default.find({
              // {createdBy: req.user._id}
            }).sort('-dateAdded').lean().exec();

          case 3:
            doc = _context.sent;
            return _context.abrupt('return', res.status(200).json({ data: doc }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getShipment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Save a shipment
* @param req
* @param res
* @returns void
*/

var addShipment = exports.addShipment = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var sanitizedShipment, shipment;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // Save model data for Sanitization
            // const createdBy = req.user._id
            // console.log('createdBy', createdBy);
            sanitizedShipment = new _model2.default(req.body);

            // Let's sanitize inputs
            //  sanitizedShipment.item = sanitizeHtml(sanitizedShipment.item);
            // sanitizedShipment.info = sanitizeHtml(sanitizedShipment.info); --}}
            // sanitizedShipment.created_by = sanitizeHtml(sanitizedShipment.created_by);
            // sanitizedShipment.created_at = sanitizeHtml(sanitizedShipment.created_at);

            // Add slug data for specific field

            sanitizedShipment.slug = (0, _limax2.default)(sanitizedShipment.item.toLowerCase(), { lowercase: true });

            // Add cuid for the model
            sanitizedShipment.cuid = (0, _cuid2.default)();

            // Make asynchronous call to save the model to Database
            _context2.next = 6;
            return _model2.default.create(sanitizedShipment);

          case 6:
            shipment = _context2.sent;
            return _context2.abrupt('return', res.status(201).json(shipment.toJSON()));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            return _context2.abrupt('return', res.status(400).send(_context2.t0));

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function addShipment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Get a single shipment By Id
* @param req
* @param res
* @returns void
*/

var getShipmentById = exports.getShipmentById = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var doc;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log('cuid is :', req.params.cuid);
            _context3.next = 4;
            return _model2.default.findOne({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }).lean().exec();

          case 4:
            doc = _context3.sent;

            if (doc) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return', res.status(400).end());

          case 7:
            return _context3.abrupt('return', res.status(200).json({ data: doc }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', res.status(400).send(_context3.t0));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getShipmentById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Update a shipment
* @param req
* @param res
* @returns void
*/

var updateOneShipment = exports.updateOneShipment = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var updatedDoc;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model2.default.findOneAndUpdate({
              // createdBy: req.user._id,
              cuid: req.params.cuid
              // _id: req.params.id
            }, req.body, { new: true }).lean().exec();

          case 3:
            updatedDoc = _context4.sent;

            if (updatedDoc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', res.status(400).end());

          case 6:
            return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', res.status(400).send(_context4.t0));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 9]]);
  }));

  return function updateOneShipment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Delete a shipment
* @param req
* @param res
* @returns void
*/

var deleteShipment = exports.deleteShipment = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var removed;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _model2.default.findOneAndRemove({
              // createdBy:req.user._id,
              cuid: req.params.cuid
              // _id:req.params.id,
            });

          case 3:
            removed = _context5.sent;

            if (removed) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', res.status(400).end());

          case 6:
            return _context5.abrupt('return', res.status(200).json({ data: removed }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', res.status(400).send(_context5.t0));

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function deleteShipment(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _model = __webpack_require__(43);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shipmentData;

var _model = __webpack_require__(43);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shipmentData() {
  _model2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }
    _model2.default.find({}).remove(function () {
      _model2.default.create({
        name: 'Steak',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'David Hick ',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        cost: 13,
        available: 'In Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 5,
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Hainanese Chicken',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'Paul Simon',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_hainanese_chicken.jpg',
        cost: 63,
        available: 'Out of Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 1,
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Lamb Shanks',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'Rumman Ahmed',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_lamb_shanks.jpg',
        cost: 22,
        available: 'Pre Order',
        carted_by: 'Rumman Ahmed',
        quantity: 3,
        created_at: '2008-04-17T11:01:00.000Z'
      }, {
        name: 'Spaghetti Bolognese',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'Roger Waters',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_spaghetti_bolognese.jpg',
        cost: 61,
        available: 'Not Available',
        carted_by: 'Rumman Ahmed',
        quantity: 4,
        created_at: '2008-04-17T11:01:00.000Z'
      }, function (error) {
        if (!error) {
          console.log('ready to go!');
        }
      });
    });
  });
} /*
  * Shipment dummy data
  *
  * This contains defalut Shipment dummy data.
  */

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(124);

var SearchController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Search Routes
*
* This contains defalut Search Route for the API.
*/

var SearchRouter = new _express.Router();

// Get all Searchs
SearchRouter.route('/searchs').get(SearchController.getSearch);

// Get one Search by cuid
SearchRouter.route('/searchs/:cuid').get(SearchController.getSearchById);

// Add a new Search
SearchRouter.route('/searchs').post(SearchController.addSearch);

// Update a Search
SearchRouter.route('/searchs/:cuid').put(SearchController.updateOneSearch);

// Delete a Search by cuid
SearchRouter.route('/searchs/:cuid').delete(SearchController.deleteSearch);

exports.default = SearchRouter;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteSearch = exports.updateOneSearch = exports.getSearchById = exports.addSearch = exports.getSearch = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all searchs
* @param req
* @param res
* @returns void
*/

/*
* Search Controller
*
* This contains default Search controller.
*/

var getSearch = exports.getSearch = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var doc;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _model2.default.find({
                            // {createdBy: req.user._id}
                        }).sort('-dateAdded').lean().exec();

                    case 3:
                        doc = _context.sent;
                        return _context.abrupt('return', res.status(200).json({ data: doc }));

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.error(_context.t0);
                        return _context.abrupt('return', res.status(400).send(_context.t0));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function getSearch(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/**
* Save a search
* @param req
* @param res
* @returns void
*/

var addSearch = exports.addSearch = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var sanitizedSearch, search;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        // Save model data for Sanitization
                        // const createdBy = req.user._id
                        // console.log('createdBy', createdBy);
                        sanitizedSearch = new _model2.default(req.body);

                        // Let's sanitize inputs

                        sanitizedSearch.item = (0, _sanitizeHtml2.default)(sanitizedSearch.item);
                        // sanitizedSearch.info = sanitizeHtml(sanitizedSearch.info); --}}
                        // sanitizedSearch.created_by = sanitizeHtml(sanitizedSearch.created_by);
                        // sanitizedSearch.created_at = sanitizeHtml(sanitizedSearch.created_at);

                        // Add slug data for specific field
                        sanitizedSearch.slug = (0, _limax2.default)(sanitizedSearch.item.toLowerCase(), { lowercase: true });

                        // Add cuid for the model
                        sanitizedSearch.cuid = (0, _cuid2.default)();

                        // Make asynchronous call to save the model to Database
                        _context2.next = 7;
                        return _model2.default.create(sanitizedSearch);

                    case 7:
                        search = _context2.sent;
                        return _context2.abrupt('return', res.status(201).json(search.toJSON()));

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);
                        return _context2.abrupt('return', res.status(400).send(_context2.t0));

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 11]]);
    }));

    return function addSearch(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

/**
* Get a single search By Id
* @param req
* @param res
* @returns void
*/

var getSearchById = exports.getSearchById = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var doc;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;

                        console.log("cuid is :", req.params.cuid);
                        _context3.next = 4;
                        return _model2.default.findOne({
                            // createdBy: req.user._id,
                            cuid: req.params.cuid
                            // _id: req.params.id
                        }).lean().exec();

                    case 4:
                        doc = _context3.sent;

                        if (doc) {
                            _context3.next = 7;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).end());

                    case 7:
                        return _context3.abrupt('return', res.status(200).json({ data: doc }));

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.status(400).send(_context3.t0));

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 10]]);
    }));

    return function getSearchById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

/**
* Update a search
* @param req
* @param res
* @returns void
*/

var updateOneSearch = exports.updateOneSearch = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var updatedDoc;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _model2.default.findOneAndUpdate({
                            // createdBy: req.user._id,
                            cuid: req.params.cuid
                            // _id: req.params.id
                        }, req.body, { new: true }).lean().exec();

                    case 3:
                        updatedDoc = _context4.sent;

                        if (updatedDoc) {
                            _context4.next = 6;
                            break;
                        }

                        return _context4.abrupt('return', res.status(400).end());

                    case 6:
                        return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

                    case 9:
                        _context4.prev = 9;
                        _context4.t0 = _context4['catch'](0);

                        console.error(_context4.t0);
                        return _context4.abrupt('return', res.status(400).send(_context4.t0));

                    case 13:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 9]]);
    }));

    return function updateOneSearch(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

/**
* Delete a search
* @param req
* @param res
* @returns void
*/

var deleteSearch = exports.deleteSearch = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var removed;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _model2.default.findOneAndRemove({
                            // createdBy:req.user._id,
                            cuid: req.params.cuid
                            // _id:req.params.id,
                        });

                    case 3:
                        removed = _context5.sent;

                        if (removed) {
                            _context5.next = 6;
                            break;
                        }

                        return _context5.abrupt('return', res.status(400).end());

                    case 6:
                        return _context5.abrupt('return', res.status(200).json({ data: removed }));

                    case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5['catch'](0);

                        console.error(_context5.t0);
                        return _context5.abrupt('return', res.status(400).send(_context5.t0));

                    case 13:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 9]]);
    }));

    return function deleteSearch(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _model = __webpack_require__(44);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = searchData;

var _model = __webpack_require__(44);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchData() {
    _model2.default.count().exec(function (err, count) {
        if (count > 0) {
            return;
        }
        _model2.default.find({}).remove(function () {
            _model2.default.create({
                item: 'Search item',
                info: 'Lorem ipsssum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdBy: 'Search',
                created_at: '2008-12-17T11:01:23.460Z'
            }, function (error) {
                if (!error) {
                    console.log('ready to go!');
                }
            });
        });
    });
} /*
  * Search dummy data
  *
  * This contains defalut Search dummy data.
  */

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _controller = __webpack_require__(127);

var SocialController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Social Routes
*
* This contains defalut Social Route for the API.
*/

var SocialRouter = new _express.Router();

// Get all Socials
SocialRouter.route('/socials').get(SocialController.getSocial);

// Get one Social by cuid
SocialRouter.route('/socials/:cuid').get(SocialController.getSocialById);

// Add a new Social
SocialRouter.route('/socials').post(SocialController.addSocial);

// Update a Social
SocialRouter.route('/socials/:cuid').put(SocialController.updateOneSocial);

// Delete a Social by cuid
SocialRouter.route('/socials/:cuid').delete(SocialController.deleteSocial);

exports.default = SocialRouter;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteSocial = exports.updateOneSocial = exports.getSocialById = exports.addSocial = exports.getSocial = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
* Get all socials
* @param req
* @param res
* @returns void
*/

/*
* Social Controller
*
* This contains default Social controller.
*/

var getSocial = exports.getSocial = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var doc;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _model2.default.find({
                            // {createdBy: req.user._id}
                        }).sort('-dateAdded').lean().exec();

                    case 3:
                        doc = _context.sent;
                        return _context.abrupt('return', res.status(200).json({ data: doc }));

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.error(_context.t0);
                        return _context.abrupt('return', res.status(400).send(_context.t0));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function getSocial(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/**
* Save a social
* @param req
* @param res
* @returns void
*/

var addSocial = exports.addSocial = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var sanitizedSocial, social;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        // Save model data for Sanitization
                        // const createdBy = req.user._id
                        // console.log('createdBy', createdBy);
                        sanitizedSocial = new _model2.default(req.body);

                        // Let's sanitize inputs

                        sanitizedSocial.item = (0, _sanitizeHtml2.default)(sanitizedSocial.item);
                        // sanitizedSocial.info = sanitizeHtml(sanitizedSocial.info); --}}
                        // sanitizedSocial.created_by = sanitizeHtml(sanitizedSocial.created_by);
                        // sanitizedSocial.created_at = sanitizeHtml(sanitizedSocial.created_at);

                        // Add slug data for specific field
                        sanitizedSocial.slug = (0, _limax2.default)(sanitizedSocial.item.toLowerCase(), { lowercase: true });

                        // Add cuid for the model
                        sanitizedSocial.cuid = (0, _cuid2.default)();

                        // Make asynchronous call to save the model to Database
                        _context2.next = 7;
                        return _model2.default.create(sanitizedSocial);

                    case 7:
                        social = _context2.sent;
                        return _context2.abrupt('return', res.status(201).json(social.toJSON()));

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);
                        return _context2.abrupt('return', res.status(400).send(_context2.t0));

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 11]]);
    }));

    return function addSocial(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

/**
* Get a single social By Id
* @param req
* @param res
* @returns void
*/

var getSocialById = exports.getSocialById = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var doc;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;

                        console.log("cuid is :", req.params.cuid);
                        _context3.next = 4;
                        return _model2.default.findOne({
                            // createdBy: req.user._id,
                            cuid: req.params.cuid
                            // _id: req.params.id
                        }).lean().exec();

                    case 4:
                        doc = _context3.sent;

                        if (doc) {
                            _context3.next = 7;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).end());

                    case 7:
                        return _context3.abrupt('return', res.status(200).json({ data: doc }));

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.status(400).send(_context3.t0));

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 10]]);
    }));

    return function getSocialById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

/**
* Update a social
* @param req
* @param res
* @returns void
*/

var updateOneSocial = exports.updateOneSocial = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var updatedDoc;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _model2.default.findOneAndUpdate({
                            // createdBy: req.user._id,
                            cuid: req.params.cuid
                            // _id: req.params.id
                        }, req.body, { new: true }).lean().exec();

                    case 3:
                        updatedDoc = _context4.sent;

                        if (updatedDoc) {
                            _context4.next = 6;
                            break;
                        }

                        return _context4.abrupt('return', res.status(400).end());

                    case 6:
                        return _context4.abrupt('return', res.status(200).json({ data: updatedDoc }));

                    case 9:
                        _context4.prev = 9;
                        _context4.t0 = _context4['catch'](0);

                        console.error(_context4.t0);
                        return _context4.abrupt('return', res.status(400).send(_context4.t0));

                    case 13:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 9]]);
    }));

    return function updateOneSocial(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

/**
* Delete a social
* @param req
* @param res
* @returns void
*/

var deleteSocial = exports.deleteSocial = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var removed;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _model2.default.findOneAndRemove({
                            // createdBy:req.user._id,
                            cuid: req.params.cuid
                            // _id:req.params.id,
                        });

                    case 3:
                        removed = _context5.sent;

                        if (removed) {
                            _context5.next = 6;
                            break;
                        }

                        return _context5.abrupt('return', res.status(400).end());

                    case 6:
                        return _context5.abrupt('return', res.status(200).json({ data: removed }));

                    case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5['catch'](0);

                        console.error(_context5.t0);
                        return _context5.abrupt('return', res.status(400).send(_context5.t0));

                    case 13:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 9]]);
    }));

    return function deleteSocial(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _model = __webpack_require__(45);

var _model2 = _interopRequireDefault(_model);

var _cuid = __webpack_require__(6);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(7);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(8);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = socialData;

var _model = __webpack_require__(45);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function socialData() {
    _model2.default.count().exec(function (err, count) {
        if (count > 0) {
            return;
        }
        _model2.default.find({}).remove(function () {
            _model2.default.create({
                item: 'Social item',
                info: 'Lorem ipsssum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdBy: 'Social',
                created_at: '2008-12-17T11:01:23.460Z'
            }, function (error) {
                if (!error) {
                    console.log('ready to go!');
                }
            });
        });
    });
} /*
  * Social dummy data
  *
  * This contains defalut Social dummy data.
  */

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _stringify = __webpack_require__(13);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpack = __webpack_require__(46);
var cssnext = __webpack_require__(133);
var postcssFocus = __webpack_require__(134);
var postcssReporter = __webpack_require__(135);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: (0, _stringify2.default)(true),
      'NODE_ENV': (0, _stringify2.default)('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);