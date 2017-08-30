'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _collect = require('bisheng/collect');

var _collect2 = _interopRequireDefault(_collect);

var _MainContent = require('./MainContent');

var _MainContent2 = _interopRequireDefault(_MainContent);

var _utils = require('../../../../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function isChangelog(pathname) {
  return pathname.indexOf('changelog') >= 0;
}

exports.default = (0, _collect2.default)(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nextProps) {
    var pathname, pageDataPath, pageData, locale, pageDataPromise, demosFetcher, _ref2, _ref3, localizedPageData, demos;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathname = nextProps.location.pathname;
            pageDataPath = pathname.replace('-cn', '').split('/');
            pageData = isChangelog(pathname) ? nextProps.data.changelog.CHANGELOG : nextProps.utils.get(nextProps.data, pageDataPath);

            if (pageData) {
              _context.next = 5;
              break;
            }

            throw 404;

          case 5:
            locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
            pageDataPromise = typeof pageData === 'function' ? pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
            demosFetcher = nextProps.utils.get(nextProps.data, [].concat(_toConsumableArray(pageDataPath), ['demo']));

            if (!demosFetcher) {
              _context.next = 16;
              break;
            }

            _context.next = 11;
            return Promise.all([pageDataPromise, demosFetcher()]);

          case 11:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            localizedPageData = _ref3[0];
            demos = _ref3[1];
            return _context.abrupt('return', { localizedPageData: localizedPageData, demos: demos });

          case 16:
            _context.next = 18;
            return pageDataPromise;

          case 18:
            _context.t0 = _context.sent;
            return _context.abrupt('return', {
              localizedPageData: _context.t0
            });

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())(_MainContent2.default);