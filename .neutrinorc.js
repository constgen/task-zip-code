module.exports = {
  use: [
    '@neutrinojs/airbnb',
    ['@neutrinojs/react', {
      html: {
        title: 'zip-codes'
      }
    }],
    function ({ config }) {
      const devRun = (process.env.NODE_ENV === 'development')
      const decoratorsPlugin = require.resolve('babel-plugin-transform-decorators-legacy');
      const classPropertiesPlugin = require.resolve('babel-plugin-transform-class-properties');

      config.module.rule('compile').use('babel').tap((options) => {
        options.plugins.unshift(decoratorsPlugin, classPropertiesPlugin);

        return options;
      });
    }
  ]
};
