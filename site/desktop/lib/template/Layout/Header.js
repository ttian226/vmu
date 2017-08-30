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

var _router = require('bisheng/router');

var _reactIntl = require('react-intl');

var _enquire = require('enquire.js');

var _enquire2 = _interopRequireDefault(_enquire);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _antd = require('antd');

var _package = require('antd-mobile/package.json');

var _utils = require('../../../../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.handleMenuIconClick = function (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      _this.setState({
        menuVisible: true
      });
    };

    _this.handleSearch = function (value) {
      _this.context.router.push({
        pathname: _this.context.intl.locale === 'zh-CN' ? value + '-cn' : value
      });
    };

    _this.handleSelectFilter = function (value, option) {
      return option.props['data-label'].indexOf(value.toLowerCase()) > -1;
    };

    _this.handleLangChange = function () {
      var pathname = _this.props.location.pathname;
      var currentProtocol = location.protocol + '//';
      var currentHref = location.href.substr(currentProtocol.length);

      if (utils.isLocalStorageNameSupported()) {
        localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
      }

      location.href = currentProtocol + currentHref.replace(location.pathname, utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)));
    };

    _this.onScroll = (0, _lodash2.default)(function () {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var clientHeight = document.documentElement.clientHeight;

      if (scrollTop >= 2 * clientHeight) {
        _this.setState({ isFirstFrame: false });
      } else {
        _this.setState({ isFirstFrame: true });
      }
    }, 100);

    _this.onDocumentClick = function (e) {
      if (document.querySelector('#header .nav').contains(e.target)) {
        return;
      }
      _this.setState({
        menuVisible: false
      });
    };

    _this.state = {
      menuVisible: false,
      menuMode: 'horizontal',
      isFirstFrame: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', this.onScroll);

      document.addEventListener('click', this.onDocumentClick);
      document.addEventListener('touchstart', this.onDocumentClick);

      _enquire2.default.register('only screen and (min-width: 320Px) and (max-width: 767Px)', {
        match: function match() {
          _this2.setState({ menuMode: 'inline' });
        },
        unmatch: function unmatch() {
          _this2.setState({ menuMode: 'horizontal' });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
      document.removeEventListener('click', this.onDocumentClick);
      document.removeEventListener('touchstart', this.onDocumentClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          location = _props.location,
          picked = _props.picked,
          themeConfig = _props.themeConfig;
      var siteTitle = themeConfig.siteTitle;

      var docVersions = _extends({}, themeConfig.docVersions, _defineProperty({}, _package.version, _package.version));
      var components = picked.components;
      var module = location.pathname.split('/').slice(0, -1).join('/');
      var activeMenuItem = module || 'home';

      if (activeMenuItem === 'components' || activeMenuItem === 'docs/react' || location.pathname === 'changelog') {
        activeMenuItem = 'components';
      }

      var locale = this.context.intl.locale;
      var isZhCN = locale === 'zh-CN';
      var excludedSuffix = isZhCN ? 'en-US.md' : 'zh-CN.md';
      var options = components.filter(function (_ref) {
        var meta = _ref.meta;
        return !meta.filename.endsWith(excludedSuffix);
      }).map(function (_ref2) {
        var meta = _ref2.meta;

        var pathSnippet = meta.filename.split('/')[1];
        var url = '/components/' + pathSnippet;
        var subtitle = meta.subtitle;
        return _react2.default.createElement(
          Option,
          { value: url, key: url, 'data-label': (meta.title || meta.english).toLowerCase() + ' ' + (meta.subtitle || meta.chinese) },
          _react2.default.createElement(
            'strong',
            null,
            meta.title || meta.english
          ),
          subtitle && _react2.default.createElement(
            'span',
            { className: 'ant-component-decs' },
            meta.subtitle || meta.chinese
          )
        );
      });

      var headerClassName = (0, _classnames2.default)({
        clearfix: true,
        'home-nav-white': !this.state.isFirstFrame
      });

      var docOptions = Object.keys(docVersions).map(function (version) {
        return _react2.default.createElement(
          Option,
          { value: docVersions[version], key: version },
          version
        );
      });

      return _react2.default.createElement(
        'header',
        { id: 'header', className: headerClassName },
        _react2.default.createElement(
          _antd.Row,
          null,
          _react2.default.createElement(
            _antd.Col,
            { lg: 5, md: 6, sm: 7, xs: 24 },
            _react2.default.createElement(_antd.Icon, {
              className: 'nav-phone-icon',
              onClick: this.handleMenuIconClick,
              type: 'menu'
            }),
            _react2.default.createElement(
              _router.Link,
              { to: utils.getLocalizedPathname('/', isZhCN), id: 'logo' },
              _react2.default.createElement('img', { alt: 'logo', src: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png' }),
              _react2.default.createElement(
                'span',
                null,
                siteTitle
              )
            )
          ),
          _react2.default.createElement(
            _antd.Col,
            { className: 'nav ' + (this.state.menuVisible ? 'nav-show' : ''),
              lg: 19,
              md: 18,
              sm: 17,
              xs: 0,
              style: { display: 'block' }
            },
            _react2.default.createElement(
              'div',
              { id: 'search-box' },
              _react2.default.createElement(
                _antd.Select,
                {
                  mode: 'combobox',
                  dropdownClassName: 'component-select',
                  placeholder: locale === 'zh-CN' ? '搜索组件...' : 'Search Components...',
                  value: undefined,
                  optionFilterProp: 'data-label',
                  optionLabelProp: 'data-label',
                  filterOption: this.handleSelectFilter,
                  onSelect: this.handleSearch
                },
                options
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { float: 'right', margin: '29Px 0 0 10Px' } },
              _react2.default.createElement(
                _antd.Button,
                { className: 'lang', type: 'ghost', size: 'small', onClick: this.handleLangChange, key: 'lang' },
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.header.lang' })
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { float: 'right', margin: '29Px 0 0 10Px' } },
              _react2.default.createElement(
                _antd.Select,
                {
                  size: 'small',
                  dropdownMatchSelectWidth: false,
                  defaultValue: _package.version,
                  onChange: function onChange(url) {
                    window.location.href = url;
                  }
                },
                docOptions
              )
            ),
            _react2.default.createElement(
              _antd.Menu,
              { mode: this.state.menuMode, selectedKeys: [activeMenuItem], id: 'nav', key: 'nav' },
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'home' },
                _react2.default.createElement(
                  _router.Link,
                  { to: utils.getLocalizedPathname('/', isZhCN) },
                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.header.menu.home' })
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'docs/react' },
                _react2.default.createElement(
                  _router.Link,
                  { to: utils.getLocalizedPathname('/docs/react/introduce', isZhCN) },
                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.header.menu.components' })
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'design' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://design.alipay.com/design/mobile/easy', target: '_blank', rel: 'noopener noreferrer' },
                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.header.menu.design' }),
                  _react2.default.createElement(_antd.Icon, {
                    style: { marginLeft: 6, verticalAlign: 3 },
                    type: 'export'
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.contextTypes = {
  router: _propTypes2.default.object.isRequired,
  intl: _propTypes2.default.object.isRequired
};
exports.default = Header;