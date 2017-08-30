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

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _reactIntl = require('react-intl');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _qrcode = require('qrcode.react');

var _qrcode2 = _interopRequireDefault(_qrcode);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('jsonml.js/lib/utils');

var _throttleByAnimationFrame = require('antd/lib/_util/throttleByAnimationFrame');

var _throttleByAnimationFrame2 = _interopRequireDefault(_throttleByAnimationFrame);

var _Demo = require('./Demo');

var _Demo2 = _interopRequireDefault(_Demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getFixedMode(demoEl, inFixedDemoMode) {
  var _demoEl$getBoundingCl = demoEl.getBoundingClientRect(),
      demoTop = _demoEl$getBoundingCl.top,
      demoBottom = _demoEl$getBoundingCl.bottom;

  if (inFixedDemoMode) {
    if (demoTop > 0 || demoBottom < 600) {
      return false;
    }
    return true;
  }
  if (demoTop < 0 && demoBottom > 600) {
    return true;
  }
  return false;
}

function getDemos(props) {
  return Object.keys(props.demos).map(function (key) {
    return props.demos[key];
  }).filter(function (demoData) {
    return !demoData.meta.hidden;
  });
}

var ComponentDoc = function (_React$Component) {
  _inherits(ComponentDoc, _React$Component);

  function ComponentDoc(props) {
    _classCallCheck(this, ComponentDoc);

    var _this = _possibleConstructorReturn(this, (ComponentDoc.__proto__ || Object.getPrototypeOf(ComponentDoc)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      var inMultiDemoMode = getDemos(nextProps).length >= 2;
      if (!inMultiDemoMode && _this.state.inMultiDemoMode) {
        _this.cleanScroll();
      }
      if (inMultiDemoMode && !_this.state.inFixedDemoMode) {
        _this.bindScroll();
      }
      _this.setState({
        currentIndex: 0,
        toggle: false,
        inMultiDemoMode: inMultiDemoMode,
        inFixedDemoMode: false
      });
    };

    _this.togglePreview = function (e) {
      _this.setState({
        currentIndex: e.index,
        toggle: true
      });
    };

    _this.doScroll = function () {
      var demoEl = document.getElementById('demo-code');

      var inFixedDemoMode = getFixedMode(demoEl, _this.state.inFixedDemoMode);

      if (_this.state.inFixedDemoMode !== inFixedDemoMode) {
        _this.setState({ inFixedDemoMode: inFixedDemoMode });
      }
    };

    _this.bindScroll = function () {
      document.addEventListener('scroll', _this.handleScroll, false);
      setTimeout(_this.handleScroll, 0);
    };

    _this.cleanScroll = function () {
      document.removeEventListener('scroll', _this.handleScroll, false);
    };

    _this.state = {
      currentIndex: _this.getIndex(props),
      toggle: false,
      inMultiDemoMode: getDemos(props).length >= 2,
      inFixedDemoMode: false
    };
    _this.handleScroll = (0, _throttleByAnimationFrame2.default)(_this.doScroll);
    return _this;
  }

  _createClass(ComponentDoc, [{
    key: 'getIndex',
    value: function getIndex(props) {
      var linkTo = props.location.hash.replace('#', '');

      var demos = Object.keys(props.demos).map(function (key) {
        return props.demos[key];
      }).filter(function (demoData) {
        return !demoData.meta.hidden;
      });
      var demoSort = demos.sort(function (a, b) {
        return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
      });

      demos.map(function (item, index) {
        item.index = index;
      });

      var targetDemo = demoSort.filter(function (item) {
        return item.meta.id === linkTo;
      })[0];
      var linkIndex = linkTo && targetDemo ? targetDemo.index : 0;
      return linkIndex;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.inMultiDemoMode) {
        this.bindScroll();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cleanScroll();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var doc = props.doc,
          location = props.location;
      var content = doc.content,
          meta = doc.meta;


      var demos = Object.keys(props.demos).map(function (key) {
        return props.demos[key];
      }).filter(function (demoData) {
        return !demoData.meta.hidden;
      });

      var leftChildren = [];

      var currentIndex = this.state.currentIndex;

      demos.sort(function (a, b) {
        return a.meta.order - b.meta.order;
      }).forEach(function (demoData, index) {
        leftChildren.push(_react2.default.createElement(_Demo2.default, _extends({
          togglePreview: _this2.togglePreview
        }, demoData, {
          className: currentIndex === index ? 'code-box-target' : '',
          key: index,
          index: index,
          currentIndex: currentIndex,
          utils: props.utils,
          pathname: location.pathname
        })));
      });

      var protocol = window.location.protocol;
      var path = doc.meta.filename.split('/')[1];
      var isLocalMode = window.location.port;
      var host = isLocalMode ? 'localhost:8002' : window.location.host;
      var demoUrl = protocol + '//' + host + '/kitchen-sink/components/' + path;

      var PopoverContent = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          { style: { margin: '8Px 0 12Px', textAlign: 'center' } },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.ComponentDoc.codeQrcode' })
        ),
        _react2.default.createElement(_qrcode2.default, { size: 144, value: demoUrl })
      );

      var title = meta.title,
          subtitle = meta.subtitle,
          chinese = meta.chinese,
          english = meta.english;

      var hash = '#' + path + '-demo-' + currentIndex;
      var mainPath = isLocalMode ? 'components' : 'kitchen-sink/components';
      var search = this.context.intl.locale === 'zh-CN' ? '?lang=zh-CN' : '?lang=en-US';
      var iframeUrl = protocol + '//' + host + '/' + mainPath + '/' + path + search + hash;

      var codeContainerCls = (0, _classnames2.default)('clearfix demo-code-container', {
        'demo-code-container-mutli': this.state.inMultiDemoMode,
        'demo-code-container-fixed': this.state.inFixedDemoMode
      });

      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: (subtitle || chinese || '') + ' ' + (title || english) + ' - Ant Design' },
        _react2.default.createElement(
          'article',
          null,
          _react2.default.createElement(
            'section',
            { className: 'markdown' },
            _react2.default.createElement(
              'h1',
              { className: 'section-title' },
              meta.title || meta.english,
              ' ',
              meta.subtitle || meta.chinese,
              _react2.default.createElement(
                _popover2.default,
                { content: PopoverContent, placement: 'bottom' },
                _react2.default.createElement(_icon2.default, { type: 'qrcode' })
              )
            ),
            props.utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(content))),
            _react2.default.createElement(
              'section',
              { id: 'demoTitle', className: 'demo-title-wrapper' },
              _react2.default.createElement(
                'h2',
                { id: 'demoTitle', className: 'demo-title' },
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.ComponentDoc.codeTitle' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'demo-code', className: codeContainerCls },
            _react2.default.createElement(
              'div',
              { style: { width: '100%', float: 'left' } },
              leftChildren
            ),
            _react2.default.createElement(
              'div',
              { className: 'mobile-wrapper' },
              _react2.default.createElement(
                'div',
                { id: 'aside-demo', className: 'aside-demo' },
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
                      _react2.default.createElement('iframe', { id: 'demoFrame',
                        name: 'demoFrame',
                        title: 'antd-mobile',
                        style: {
                          width: '377Px',
                          height: '548Px',
                          border: '1Px solid #F7F7F7',
                          borderTop: 'none',
                          boxShadow: '0 2Px 4Px #ebebeb'
                        },
                        src: iframeUrl
                      })
                    )
                  )
                )
              )
            )
          ),
          props.utils.toReactComponent(['section', {
            id: 'api',
            className: 'markdown api-container'
          }].concat((0, _utils.getChildren)(doc.api || ['placeholder'])))
        )
      );
    }
  }]);

  return ComponentDoc;
}(_react2.default.Component);

ComponentDoc.contextTypes = {
  intl: _propTypes2.default.object
};
exports.default = ComponentDoc;