'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('bisheng/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger: 0 */
function NotFound() {
  return _react2.default.createElement(
    'div',
    { id: 'page-404' },
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        '404'
      ),
      _react2.default.createElement(
        'p',
        null,
        '\u4F60\u8981\u627E\u7684\u9875\u9762\u4E0D\u5B58\u5728 ',
        _react2.default.createElement(
          _router.Link,
          { to: '/' },
          '\u8FD4\u56DE\u9996\u9875'
        )
      )
    ),
    _react2.default.createElement('style', {
      dangerouslySetInnerHTML: {
        __html: '#react-content { height: 100%; background-color: #fff }'
      }
    })
  );
}