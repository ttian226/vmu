'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    { id: 'footer' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(_antd.Icon, { type: 'github' }),
          ' GitHub'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { target: '_blank ', rel: 'noopener noreferrer', href: 'http://github.com/ant-design' },
            'antd'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { target: '_blank ', rel: 'noopener noreferrer', href: 'http://github.com/ant-design/ant-design-mobile' },
            'antd-mobile'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/react-component' },
            'react-component'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(_antd.Icon, { type: 'link' }),
          ' ',
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.links' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://motion.ant.design' },
            'Ant Motion'
          ),
          _react2.default.createElement(
            'span',
            null,
            ' - '
          ),
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.motion' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://ux.ant.design' },
            'Ant UX'
          ),
          _react2.default.createElement(
            'span',
            null,
            ' - '
          ),
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.antux' })
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(_antd.Icon, { type: 'customer-service' }),
          ' ',
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.community' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { target: '_blank', rel: 'noopener noreferrer', href: 'https://gitter.im/ant-design/ant-design' },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.discuss' })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { target: '_blank', rel: 'noopener noreferrer', href: 'http://github.com/ant-design/ant-design-mobile/issues' },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.bug-report' })
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Copyright \xA9 ',
          new Date().getFullYear()
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.footer.author' })
        ),
        _react2.default.createElement(
          'div',
          null,
          'Built with ',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/benjycui/bisheng' },
            'BiSheng'
          )
        )
      )
    )
  );
};

exports.default = (0, _reactIntl.injectIntl)(Footer);