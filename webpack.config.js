const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMod = process.env.NODE_ENV !=='production';

module.exports = {
    entry: './src/frontend/app.js',
    output: {
        path: path.join(__dirname, 'src/backend/public'),
        filename: 'js/bundle.js',
    },
    // cargar codigo css a webpack
    module: {
        rules: [
            { 
                test: /\.css/, 
                use: [
                    devMod ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'                
                ]
            }
        ],
    },

    mode: "development",
    // cargar codigo html a webpack
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    

}