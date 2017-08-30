'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _router = require('bisheng/router');

var _reactGithubButton = require('react-github-button');

var _reactGithubButton2 = _interopRequireDefault(_reactGithubButton);

var _reactIntl = require('react-intl');

require('react-github-button/assets/style.css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _utils = require('../../../../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    var pathname = props.location.pathname;
    var isZhCN = utils.isZhCN(pathname);
    _this.state = {
      isZhCN: isZhCN
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (location.hash) {
        var pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
        location.href = pathname;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isZhCN = this.state.isZhCN;

      var iframeUrl = location.port ? 'http://localhost:8002/' : location.origin + '/kitchen-sink/';
      if (isZhCN) {
        iframeUrl = iframeUrl + '?lang=zh-CN';
      } else {
        iframeUrl = iframeUrl + '?lang=en-US';
      }
      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: 'Ant Design Mobile - ' + this.props.intl.formatMessage({ id: 'app.home.slogan' }) },
        _react2.default.createElement(
          'div',
          { className: 'home-main' },
          _react2.default.createElement(
            'div',
            { className: 'home-iframe' },
            _react2.default.createElement(
              'div',
              { style: { width: '377Px', height: '620Px' } },
              _react2.default.createElement(
                'div',
                { className: 'demo-preview-wrapper' },
                _react2.default.createElement(
                  'div',
                  { className: 'demo-preview-header' },
                  _react2.default.createElement(
                    'div',
                    { className: 'demo-preview-statbar' },
                    _react2.default.createElement('img', { width: '350Px', alt: 'presentation', style: { margin: '0 2Px' }, src: 'https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { style: { height: '40Px' } },
                    _react2.default.createElement(
                      'div',
                      { className: 'url-box' },
                      iframeUrl
                    )
                  )
                ),
                _react2.default.createElement(
                  'section',
                  { className: 'code-box-demo code-box-demo-preview' },
                  _react2.default.createElement('iframe', {
                    id: 'demoFrame',
                    title: 'antd-mobile',
                    name: 'demoFrame',
                    style: { width: '377Px', height: '548Px', border: '1Px solid #F7F7F7', borderTop: 'none', boxShadow: '0 2Px 4Px #ebebeb' },
                    src: iframeUrl
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'banner-text-wrapper' },
            _react2.default.createElement(
              'h2',
              { key: 'h2' },
              this.props.intl.formatMessage({ id: 'app.home.centerSlogan' })
            ),
            _react2.default.createElement(
              'div',
              null,
              this.props.intl.formatMessage({ id: 'app.home.centerSubSlogan' }),
              _react2.default.createElement(_reactGithubButton2.default, {
                key: 'github-button',
                type: 'stargazers',
                namespace: 'ant-design',
                repo: 'ant-design-mobile'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'start-button-wrap', key: 'button' },
              _react2.default.createElement(
                _router.Link,
                { to: '/docs/react/introduce' },
                _react2.default.createElement(_icon2.default, { type: 'smile-circle' }),
                ' ',
                this.props.intl.formatMessage({ id: 'app.home.centerStart' })
              )
            ),
            _react2.default.createElement('img', { className: 'qr', src: 'https://zos.alipayobjects.com/rmsportal/TrdkqxQcrAUcmYelQUNK.png', alt: 'qrcode' })
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = (0, _reactIntl.injectIntl)(Home);