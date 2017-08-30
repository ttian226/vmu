'use strict';

var path = require('path');
var enLocale = require('./en-US');
var cnLocale = require('./zh-CN');

var homeTmpl = './template/Home/index';
var contentTmpl = './template/Content/index';

function pickerGenerator(module) {
  var tester = new RegExp('^docs/' + module);
  /* eslint-disable consistent-return */
  return function (markdownData) {
    var filename = markdownData.meta.filename;
    if (tester.test(filename)) {
      return {
        meta: markdownData.meta
      };
    }
  };
  /* eslint-enable consistent-return */
}

module.exports = {
  enLocale: enLocale,
  cnLocale: cnLocale,
  lazyLoad: function lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },

  pick: {
    components: function components(markdownData) {
      var filename = markdownData.meta.filename;
      if (!/^components/.test(filename) || /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta
      };
      /* eslint-enable consistent-return */
    },

    /* eslint-disable consistent-return */
    changelog: function changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta
        };
      }
    },

    /* eslint-enable consistent-return */
    'docs/react': pickerGenerator('react')
  },
  plugins: ['bisheng-plugin-description', 'bisheng-plugin-toc?maxDepth=2', 'bisheng-plugin-antd?noPreview'],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [{
      path: 'index-cn',
      component: homeTmpl
    }, {
      path: '/docs/practice/:children',
      component: contentTmpl
    }, {
      path: '/docs/pattern/:children',
      component: contentTmpl
    }, {
      path: '/docs/react/:children',
      component: contentTmpl
    }, {
      path: 'changelog',
      component: contentTmpl
    }, {
      path: 'changelog-cn',
      component: contentTmpl
    }, {
      path: '/components/:children',
      component: contentTmpl
    }]
  }
};