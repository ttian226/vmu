'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactIntl = require('react-intl');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _enUS = require('../../en-US');

var _enUS2 = _interopRequireDefault(_enUS);

var _zhCN = require('../../zh-CN');

var _zhCN2 = _interopRequireDefault(_zhCN);

var _utils = require('../../../../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style');

  // Expose to iframe
  window.react = _react2.default;
  window['react-dom'] = _reactDom2.default;
}

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.onEnterChange = function (mode) {
      _this.setState({
        isFirstScreen: mode === 'enter'
      });
    };

    var pathname = props.location.pathname;
    var appLocale = utils.isZhCN(pathname) ? _zhCN2.default : _enUS2.default;
    (0, _reactIntl.addLocaleData)(appLocale.data);
    _this.state = {
      isFirstScreen: true,
      appLocale: appLocale
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window.ga !== 'undefined') {
        this.context.router.listen(function (loc) {
          window.ga('send', 'pageview', loc.pathname + loc.search);
        });
      }

      var nprogressHiddenStyle = document.getElementById('nprogress-style');
      if (nprogressHiddenStyle) {
        this.timer = setTimeout(function () {
          nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
        }, 0);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['children']);

      var _state = this.state,
          appLocale = _state.appLocale,
          isFirstScreen = _state.isFirstScreen;

      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: appLocale.locale, messages: appLocale.messages },
        _react2.default.createElement(
          'div',
          { className: 'page-wrapper' },
          _react2.default.createElement(_Header2.default, _extends({}, restProps, { isFirstScreen: isFirstScreen })),
          (0, _react.cloneElement)(children, { onEnterChange: this.onEnterChange }),
          _react2.default.createElement(_Footer2.default, restProps)
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.contextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Layout;