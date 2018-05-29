module.exports = {
  components: 'src/components/[A-Z]*/**/*.js',
  template: {
    head: {
      scripts: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCvHK8yZ11dL4nZ5QtXw97m_Ji9TEqlbkY&libraries=geometry,drawing,places',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500',
        },
      ],
    },
  },
  ignore: ['src/components/Icon/fontawesome.js'],
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
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
            },
          }],
        },
      ],
    },
  },
};
