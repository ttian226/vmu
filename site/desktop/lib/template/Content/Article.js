'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _utils = require('jsonml.js/lib/utils');

var _timeline = require('antd/lib/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _utils2 = require('../../../../utils');

var utils = _interopRequireWildcard(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_React$Component) {
  _inherits(Article, _React$Component);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  _createClass(Article, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var links = document.querySelectorAll('.outside-link.internal');
      if (links.length === 0) {
        return;
      }
      var checkImgUrl = 'http://alipay-rmsdeploy-dev-image.oss-cn-hangzhou-zmf.aliyuncs.com/rmsportal/JdVaTbZzPxEldUi.png';
      utils.ping(checkImgUrl, function (status) {
        if (status === 'responded') {
          links.forEach(function (link) {
            return link.style.display = 'block';
          });
        }
      });
    }
  }, {
    key: 'getArticle',
    value: function getArticle(article) {
      var content = this.props.content;
      var meta = content.meta;

      if (!meta.timeline) {
        return article;
      }
      var timelineItems = [];
      var temp = [];
      _react.Children.forEach(article.props.children, function (child, i) {
        if (child.type === 'h2' && temp.length > 0) {
          timelineItems.push(_react2.default.createElement(
            _timeline2.default.Item,
            { key: i },
            temp
          ));
          temp = [];
        }
        temp.push(child);
      });
      return (0, _react.cloneElement)(article, {
        children: _react2.default.createElement(
          _timeline2.default,
          null,
          timelineItems
        )
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.content;

      var meta = content.meta,
          description = content.description;
      var title = meta.title,
          subtitle = meta.subtitle,
          chinese = meta.chinese,
          english = meta.english;

      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: (title || chinese || english) + ' - Ant Design' },
        _react2.default.createElement(
          'article',
          { className: 'markdown' },
          _react2.default.createElement(
            'h1',
            null,
            title || english,
            !subtitle && !chinese ? null : _react2.default.createElement(
              'span',
              { className: 'subtitle' },
              subtitle || chinese
            )
          ),
          !description ? null : props.utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(description))),
          !(content.toc && meta.toc) ? null : _react2.default.createElement(
            'section',
            { className: 'toc' },
            props.utils.toReactComponent(content.toc)
          ),
          this.getArticle(props.utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(content.content))))
        )
      );
    }
  }]);

  return Article;
}(_react2.default.Component);

exports.default = Article;