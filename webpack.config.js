const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development"
// Hack required because HMR doesn't watch css (webpack-5) because of browerslist
let target = "web"


if(process.env.NODE_ENV === "production") {
    mode = "production"
    target = "browserslist"
}

module.exports = {
    mode,
    target,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, "postcss-loader", "sass-loader"]
            }
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'inline-source-map',
     //enable source-map dev-tools
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist", // to render index.html directly instead of folder structure
        hot: true, // enable hot-reloading instead of live reloading
    }
}
