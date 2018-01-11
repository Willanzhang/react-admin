const webpack = require('webpack');
const path = require('path');

const vendors = [
  'antd'
  // ...其它库
];

// const vendors = [
//   'antd',
//   'react',
//   'react-dom',
//   'react-router',
//   'history',
//   'redux',
//   'react-redux',
//   'redux-thunk',
//   'immutable',
//   'whatwg-fetch',
//   // ...其它库
// ];

module.exports = {
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  entry: {
    "lib": vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      // path: './config/manifest.json',
      path: path.join(__dirname, 'config', 'manifest.json'),
      name: '[name]',
      context: __dirname,
    }),
  ],
};