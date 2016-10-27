webpackHotUpdate(3,{

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inherits2 = __webpack_require__(1);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _stringify = __webpack_require__(99);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getPrototypeOf = __webpack_require__(77);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(81);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(82);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(86);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Component) {
	  (0, _inherits3.default)(_class, _Component);

	  function _class(props) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

	    _this.submitLogin = _this.submitLogin.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: 'submitLogin',
	    value: function submitLogin(e) {
	      var _this2 = this;

	      e.preventDefault();

	      fetch('http://localhost:3001/login', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: (0, _stringify2.default)({
	          email: this.email.value,
	          password: this.password.value
	        })
	      }).then(function (res) {
	        _this2.props.url.pushTo('/profile');
	      }).catch(function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'h2',
	            { className: 'title' },
	            'Login'
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'description' },
	            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.'
	          ),
	          _react2.default.createElement(
	            'form',
	            { className: 'registration-form', onSubmit: this.submitLogin },
	            _react2.default.createElement(
	              'fieldset',
	              { className: 'form-input' },
	              _react2.default.createElement(
	                'label',
	                { className: 'label' },
	                'E-mail'
	              ),
	              _react2.default.createElement('input', { className: 'input', type: 'text', name: 'email', ref: function ref(input) {
	                  _this3.email = input;
	                } })
	            ),
	            _react2.default.createElement(
	              'fieldset',
	              { className: 'form-input' },
	              _react2.default.createElement(
	                'label',
	                { className: 'label' },
	                'Password'
	              ),
	              _react2.default.createElement('input', { className: 'input', type: 'password', name: 'password', ref: function ref(input) {
	                  _this3.password = input;
	                } })
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn -secondary -large', type: 'submit' },
	              'Login'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return _class;
	}(_react.Component);

	exports.default = _class;
	    if (true) {
	      module.hot.accept()
	      if (module.hot.status() !== 'idle') {
	        var Component = module.exports.default || module.exports
	        next.router.update('/login', Component)
	      }
	    }
	  

/***/ }

})