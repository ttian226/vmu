'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _reactIntl = require('react-intl');

var _antd = require('antd');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-danger: 0 */


var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fullscreen: false,
      lang: 'es6',
      copied: false,
      sourceCode: '',
      showRiddleButton: false
    }, _this.saveAnchor = function (anchor) {
      _this.anchor = anchor;
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          togglePreview = _this$props.togglePreview,
          index = _this$props.index,
          currentIndex = _this$props.currentIndex,
          meta = _this$props.meta;


      if (index !== currentIndex && e.target.className !== 'collapse anticon anticon-circle-o-right' && e.target.className !== 'fullscreen anticon anticon-arrow-salt') {
        togglePreview({
          index: index
        });
      }

      location.hash = meta.id;
    }, _this.viewFullscreen = function (e) {
      e.stopPropagation();
      _this.setState({
        fullscreen: true
      });
    }, _this.handleCancel = function () {
      _this.setState({
        fullscreen: false
      });
    }, _this.handleCodeCopied = function () {
      _this.setState({ copied: true });
    }, _this.onCopyTooltipVisibleChange = function (visible) {
      if (visible) {
        _this.setState({
          copyTooltipVisible: visible,
          copied: false
        });
        return;
      }
      _this.setState({
        copyTooltipVisible: visible
      });
    }, _this.handleProgrammingLangChange = function (e) {
      _this.setState({ lang: e.target.value });
    }, _this.renderDemoCode = function (highlightedCode, inModal) {
      var _this$props2 = _this.props,
          meta = _this$props2.meta,
          style = _this$props2.style;
      var _this$state = _this.state,
          lang = _this$state.lang,
          sourceCode = _this$state.sourceCode;

      var locale = _this.context.intl.locale;
      var localizedTitle = meta.title[locale] || meta.title;
      var prefillStyle = ('@import \'antd-mobile/dist/antd-mobile.min.css\';\n\n' + (style || '')).replace(new RegExp('#' + meta.id + '\\s*', 'g'), '');

      var codepenPrefillConfig = {
        title: localizedTitle + ' - Ant Design Mobile Demo',
        html: '<div id="container" style="padding: 24px"></div>\n              <script>\n                var mountNode = document.getElementById(\'container\');\n              </script>',
        js: sourceCode.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'antd-mobile';/, 'const { $1 } = window["antd-mobile"];'),
        css: prefillStyle,
        editors: '001',
        css_external: 'https://unpkg.com/antd-mobile/dist/antd-mobile.min.css',
        js_external: ['react/dist/react.js', 'react-dom/dist/react-dom.js', 'moment/min/moment-with-locales.js', 'antd-mobile/dist/antd-mobile.min.js'].map(function (url) {
          return 'https://unpkg.com/' + url;
        }).concat(['https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js']).join(';'),
        js_pre_processor: 'typescript',
        head: _utils.head
      };
      var riddlePrefillConfig = {
        title: localizedTitle + ' - Ant Design Mobile Demo',
        js: sourceCode,
        css: prefillStyle
      };
      return Array.isArray(highlightedCode) ? _react2.default.createElement(
        'div',
        { className: 'highlight' },
        _react2.default.createElement(
          'div',
          { className: 'code-box-actions' },
          _this.state.showRiddleButton ? _react2.default.createElement(
            'form',
            { action: '//riddle.alibaba-inc.com/riddles/define', method: 'POST', target: '_blank' },
            _react2.default.createElement('input', { type: 'hidden', name: 'data', value: JSON.stringify(riddlePrefillConfig) }),
            _react2.default.createElement(
              _antd.Tooltip,
              { title: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.demo.riddle' }) },
              _react2.default.createElement('input', { type: 'submit', value: 'Create New Riddle with Prefilled Data', className: 'code-box-riddle' })
            )
          ) : null,
          _react2.default.createElement(
            'form',
            { action: 'https://codepen.io/pen/define', method: 'POST', target: '_blank' },
            _react2.default.createElement('input', { type: 'hidden', name: 'data', value: JSON.stringify(codepenPrefillConfig) }),
            _react2.default.createElement(
              _antd.Tooltip,
              { title: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.demo.codepen' }) },
              _react2.default.createElement('input', { type: 'submit', value: 'Create New Pen with Prefilled Data', className: 'code-box-codepen' })
            )
          ),
          _react2.default.createElement(
            _reactCopyToClipboard2.default,
            {
              text: _this.state.sourceCode,
              onCopy: _this.handleCodeCopied
            },
            _react2.default.createElement(
              _antd.Tooltip,
              {
                title: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.demo.' + (_this.state.copied ? 'copied' : 'copy') }),
                visible: _this.state.copyTooltipVisible,
                onVisibleChange: _this.onCopyTooltipVisibleChange
              },
              _react2.default.createElement(
                'span',
                {
                  className: 'code-box-code-copy',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  }
                },
                _react2.default.createElement(_antd.Icon, { type: _this.state.copied && _this.state.copyTooltipVisible ? 'check' : 'copy' })
              )
            )
          )
        ),
        _this.props.utils.toReactComponent(highlightedCode)
      ) : _react2.default.createElement(
        'div',
        { className: 'highlight' },
        inModal && _react2.default.createElement(
          _antd.Radio.Group,
          {
            value: lang,
            onChange: _this.handleProgrammingLangChange
          },
          _react2.default.createElement(
            _antd.Radio.Button,
            { value: 'es6' },
            'ES2016'
          ),
          _react2.default.createElement(
            _antd.Radio.Button,
            { value: 'ts' },
            'TypeScript'
          )
        ),
        _react2.default.createElement(
          'pre',
          { className: 'language-jsx' },
          _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: highlightedCode[lang] } })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var meta = this.props.meta;

      if (meta.id === location.hash.slice(1)) {
        this.anchor.click();
      }
      this.componentWillReceiveProps(this.props);

      this.pingTimer = (0, _utils.ping)(function (status) {
        if (status !== 'timeout' && status !== 'error') {
          _this2.setState({
            showRiddleButton: true
          });
        }
      });
    }
    /* eslint-disable react/jsx-indent */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var highlightedCode = nextProps.highlightedCode;

      var div = document.createElement('div');
      div.innerHTML = highlightedCode[1].highlighted;
      this.setState({ sourceCode: div.textContent });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          state = this.state;
      var meta = props.meta,
          content = props.content,
          highlightedCode = props.highlightedCode,
          highlightedStyle = props.highlightedStyle,
          className = props.className,
          utils = props.utils;


      var codeBoxClass = (0, _classnames2.default)(_defineProperty({
        'code-box': true
      }, className, className));

      var locale = this.context.intl.locale;
      var localizedTitle = meta.title[locale] || meta.title;
      var localizeIntro = content[locale] || content;
      var introChildren = utils.toReactComponent(['div'].concat(localizeIntro));

      var hsNode = highlightedStyle ? _react2.default.createElement(
        'div',
        { key: 'style', className: 'highlight' },
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement('code', {
            className: 'css',
            dangerouslySetInnerHTML: {
              __html: highlightedStyle
            }
          })
        )
      ) : null;

      return _react2.default.createElement(
        'section',
        { className: codeBoxClass, id: meta.id, onClick: this.handleClick },
        _react2.default.createElement(
          _antd.Modal,
          {
            ref: 'modal',
            visible: state.fullscreen,
            title: localizedTitle,
            onCancel: this.handleCancel,
            width: 900,
            footer: [_react2.default.createElement(
              _antd.Button,
              { key: 'back', type: 'ghost', size: 'large', onClick: this.handleCancel },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.ComponentDoc.Modal.return' })
            )]
          },
          this.renderDemoCode(highlightedCode, true),
          hsNode
        ),
        _react2.default.createElement(
          'section',
          { className: 'code-box-meta markdown' },
          _react2.default.createElement(
            'div',
            { className: 'code-box-title' },
            _react2.default.createElement(
              'a',
              { href: '#' + meta.id, ref: this.saveAnchor },
              localizedTitle
            )
          ),
          introChildren,
          _react2.default.createElement('span', {
            className: 'fullscreen anticon anticon-arrow-salt',
            onClick: this.viewFullscreen,
            unselectable: 'none'
          }),
          !Array.isArray(highlightedCode) && _react2.default.createElement(
            _antd.Radio.Group,
            {
              value: state.lang,
              onChange: this.handleProgrammingLangChange
            },
            _react2.default.createElement(
              _antd.Radio.Button,
              { value: 'es6' },
              'ES2016'
            ),
            _react2.default.createElement(
              _antd.Radio.Button,
              { value: 'ts' },
              'TypeScript'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          {
            className: 'highlight-wrapper',
            key: 'code'
          },
          this.renderDemoCode(highlightedCode, false),
          hsNode
        )
      );
    }
  }]);

  return Demo;
}(_react2.default.Component);

Demo.contextTypes = {
  intl: _propTypes2.default.object
};
exports.default = Demo;