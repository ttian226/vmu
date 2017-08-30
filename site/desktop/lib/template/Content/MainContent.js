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

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _Article = require('./Article');

var _Article2 = _interopRequireDefault(_Article);

var _ComponentDoc = require('./ComponentDoc');

var _ComponentDoc2 = _interopRequireDefault(_ComponentDoc);

var _utils = require('../../../../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SubMenu = _menu2.default.SubMenu;

function getModuleData(props) {
  var pathname = props.location.pathname;
  var moduleName = /^\/?components/.test(pathname) ? 'components' : pathname.split('/').filter(function (item) {
    return item;
  }).slice(0, 2).join('/');
  var moduleData = moduleName === 'components' || moduleName === 'docs/react' || moduleName === 'changelog' || moduleName === 'changelog-cn' ? [].concat(_toConsumableArray(props.picked.components), _toConsumableArray(props.picked['docs/react']), _toConsumableArray(props.picked.changelog)) : props.picked[moduleName];
  var excludedSuffix = utils.isZhCN(props.location.pathname) ? 'en-US.md' : 'zh-CN.md';
  return moduleData.filter(function (_ref) {
    var meta = _ref.meta;
    return !meta.filename.endsWith(excludedSuffix);
  });
}

function getActiveMenuItem(props) {
  var children = props.params.children;
  return children && children.replace('-cn', '') || props.location.pathname.replace(/(^\/|-cn$)/g, '');
}

var MainContent = function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent(props) {
    _classCallCheck(this, MainContent);

    var _this = _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).call(this, props));

    _this.handleMenuOpenChange = function (openKeys) {
      _this.setState({ openKeys: openKeys });
    };

    _this.state = { openKeys: _this.getSideBarOpenKeys(props) || [] };
    return _this;
  }

  _createClass(MainContent, [{
    key: 'getSideBarOpenKeys',
    value: function getSideBarOpenKeys(nextProps) {
      var pathname = nextProps.location.pathname;
      var prevModule = this.currentModule;
      this.currentModule = pathname.replace(/^\//).split('/')[1] || 'components';
      if (this.currentModule === 'react') {
        this.currentModule = 'components';
      }
      var locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
      if (prevModule !== this.currentModule) {
        var moduleData = getModuleData(nextProps);
        var shouldOpenKeys = Object.keys(utils.getMenuItems(moduleData, locale));
        return shouldOpenKeys;
      }
      return '';
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var pathname = this.props.location.pathname;
      return pathname !== nextProps.location.pathname || /^\/components\//i.test(pathname);
    }
  }, {
    key: 'fileNameToPath',
    value: function fileNameToPath(filename) {
      var snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').split('/');
      return snippets[snippets.length - 1];
    }
  }, {
    key: 'generateMenuItem',
    value: function generateMenuItem(isTop, item) {
      var key = this.fileNameToPath(item.filename);
      var text = void 0;
      if (isTop) {
        text = item.title || item.chinese || item.english;
      } else {
        text = [_react2.default.createElement(
          'span',
          { key: 'english' },
          item.title || item.english
        ), _react2.default.createElement(
          'span',
          { className: 'chinese', key: 'chinese' },
          item.subtitle || item.chinese
        )];
      }
      var disabled = item.disabled;
      var url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').toLowerCase();
      if (item.filename.includes('zh-CN')) {
        url = url + '-cn';
      }
      var child = !item.link ? _react2.default.createElement(
        _router.Link,
        { to: /^components/.test(url) ? url + '/' : url, disabled: disabled },
        text
      ) : _react2.default.createElement(
        'a',
        { href: item.link, target: '_blank', rel: 'noopener noreferrer', disabled: disabled },
        text
      );

      return _react2.default.createElement(
        _menu2.default.Item,
        { key: key.toLowerCase(), disabled: disabled },
        child
      );
    }
  }, {
    key: 'isNotTopLevel',
    value: function isNotTopLevel(level) {
      return level !== 'topLevel';
    }
  }, {
    key: 'generateSubMenuItems',
    value: function generateSubMenuItems(obj) {
      var _this2 = this;

      var themeConfig = this.props.themeConfig;
      var categoryOrder = themeConfig.categoryOrder;

      var topLevel = (obj.topLevel || []).map(this.generateMenuItem.bind(this, true));
      var itemGroups = Object.keys(obj).filter(this.isNotTopLevel).sort(function (a, b) {
        return categoryOrder[a] - categoryOrder[b];
      }).map(function (type, index) {
        var groupItems = obj[type].sort(function (a, b) {
          return (a.title || a.english).charCodeAt(0) - (b.title || b.english).charCodeAt(0);
        }).map(_this2.generateMenuItem.bind(_this2, false));
        return _react2.default.createElement(
          _menu2.default.ItemGroup,
          { title: type, key: index },
          groupItems
        );
      });
      return [].concat(_toConsumableArray(topLevel), _toConsumableArray(itemGroups));
    }
  }, {
    key: 'getModuleData',
    value: function getModuleData() {
      var _this3 = this;

      var props = this.props;
      var pathname = props.location.pathname;
      var moduleName = /^components/.test(pathname) ? 'components' : pathname.split('/').slice(0, 2).join('/');
      var moduleData = moduleName === 'components' || moduleName.includes('changelog') || moduleName === 'docs/react' ? [].concat(_toConsumableArray(props.picked.components), _toConsumableArray(props.picked['docs/react']), _toConsumableArray(props.picked.changelog)).filter(function (item) {
        return item.meta.filename.includes(_this3.context.intl.locale);
      }) : props.picked[moduleName];

      return moduleData;
    }
  }, {
    key: 'getMenuItems',
    value: function getMenuItems() {
      var _this4 = this;

      var moduleData = this.getModuleData();
      var menuItems = utils.getMenuItems(moduleData);
      var topLevel = this.generateSubMenuItems(menuItems.topLevel);
      var subMenu = Object.keys(menuItems).filter(this.isNotTopLevel).sort(function (a, b) {
        return _this4.props.themeConfig.categoryOrder[a] - _this4.props.themeConfig.categoryOrder[b];
      }).map(function (category) {
        var subMenuItems = _this4.generateSubMenuItems(menuItems[category]);
        return _react2.default.createElement(
          SubMenu,
          { title: _react2.default.createElement(
              'h4',
              null,
              category
            ), key: category },
          subMenuItems
        );
      });
      return [].concat(_toConsumableArray(topLevel), _toConsumableArray(subMenu));
    }
  }, {
    key: 'flattenMenu',
    value: function flattenMenu(menu) {
      var _this5 = this;

      if (menu.type === _menu2.default.Item) {
        return menu;
      }

      if (Array.isArray(menu)) {
        return menu.reduce(function (acc, item) {
          return acc.concat(_this5.flattenMenu(item));
        }, []);
      }

      return this.flattenMenu(menu.props.children);
    }
  }, {
    key: 'getFooterNav',
    value: function getFooterNav(menuItems, activeMenuItem) {
      var menuItemsList = this.flattenMenu(menuItems);
      var activeMenuItemIndex = -1;
      menuItemsList.forEach(function (menuItem, i) {
        if (menuItem.key === activeMenuItem) {
          activeMenuItemIndex = i;
        }
      });
      var prev = menuItemsList[activeMenuItemIndex - 1];
      var next = menuItemsList[activeMenuItemIndex + 1];
      return { prev: prev, next: next };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var openKeys = this.getSideBarOpenKeys(nextProps);
      if (openKeys) {
        this.setState({ openKeys: openKeys });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var activeMenuItem = getActiveMenuItem(props);
      var menuItems = this.getMenuItems();

      var _getFooterNav = this.getFooterNav(menuItems, activeMenuItem),
          prev = _getFooterNav.prev,
          next = _getFooterNav.next;

      var localizedPageData = props.localizedPageData;
      var demos = props.demos;

      var DemoEl = demos ? _react2.default.createElement(_ComponentDoc2.default, _extends({}, props, { doc: localizedPageData, demos: demos })) : _react2.default.createElement(_Article2.default, _extends({}, props, { content: localizedPageData }));
      return _react2.default.createElement(
        'div',
        { className: 'main-wrapper' },
        _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { lg: 5, md: 6, sm: 24, xs: 24 },
            _react2.default.createElement(
              _menu2.default,
              {
                className: 'aside-container',
                mode: 'inline',
                openKeys: this.state.openKeys,
                selectedKeys: [activeMenuItem],
                onOpenChange: this.handleMenuOpenChange
              },
              menuItems
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { lg: 19, md: 18, sm: 24, xs: 24, className: 'main-container' },
            DemoEl
          )
        ),
        _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            {
              lg: { span: 19, offset: 5 },
              md: { span: 18, offset: 6 },
              sm: 24,
              xs: 24
            },
            _react2.default.createElement(
              'section',
              { className: 'prev-next-nav' },
              prev ? _react2.default.cloneElement(prev.props.children, { className: 'prev-page' }) : null,
              next ? _react2.default.cloneElement(next.props.children, { className: 'next-page' }) : null
            )
          )
        )
      );
    }
  }]);

  return MainContent;
}(_react2.default.Component);

MainContent.contextTypes = {
  intl: _propTypes2.default.object.isRequired
};
exports.default = MainContent;