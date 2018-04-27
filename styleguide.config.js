const path = require('path');

module.exports = {
  components: 'src/components/[A-Z]*/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
  },
  ignore: ['src/components/index.js'],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
        },
      ],
    },
  },
};
