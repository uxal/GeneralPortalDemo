const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//put the dependencies from package.json here. Contains the items which update less often
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'react-tap-event-plugin', 'material-ui'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js' //chunkhash adds a hash which is changed only when the bundle is modified. This helps browser caching and alos makes sure the customers get the latest version of the scriptsnpm ins
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/

            },
            {
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                }),
                test: /\.css$/
            }
        ]
    },
    plugins: [
        //CommonsChunkPlugin -> this plugin is used to move the vendor scripts from bundle.js to the vendor.js file. vendor scripts are added in bundle by imports. This plugin makes sure they will be present only in vendor.js
        //Manfiest -> is a helper js file which decides if the vendor.js bundle was changed or not
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        //this plugin generates the index.html with the script chunks tags added automatically
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('style.[chunkhash].css')
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};