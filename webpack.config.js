const path = require('path');
const baseDir = path.join(__dirname, '..');
const NODE_ENV = process.env.NODE_ENV;
const utils = require('./build/utils');

module.exports = { 
  egg: true,
  framework: 'vue',
  env: ['production', 'test'].indexOf(NODE_ENV) >= 0 ? 'prod' : 'dev',
  alias: {
    app: 'app/web/framework/entry/app.ts',
    storeEntry: 'app/web/store/index.ts',
    layout: 'app/web/component/layout/index.vue',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  proxy: false,
  entry: {
    include: utils.getIncludeList('app/web/page'),
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  loaders: {
    typescript: true,
    sass: {
      options: {
        includePaths: [
          path.join(baseDir, 'app/web'),
          path.join(baseDir, 'app/web/asset/css'),
        ]
      }
    }
  },
  plugins: [
    {
      eslint: {
        options: {
          fix: false
        }
      }
    }, 
    {
      copy: [{
        from: 'app/web/asset',
        to: 'asset'
      }]
    }
  ],
  install: {
    npm: 'tnpm',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json', '.vue' ]
  },
  customize(webpackConfig){
    return webpackConfig;
  }
};
