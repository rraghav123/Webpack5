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
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
                /*
                * right - left
                * css-loader -> collect all the css files referenced in your application and put it into a string
                * style-loader/MiniCssExtractPlugin -> would take a output string generated by css-loader and put it inside <style> tag
                * diff btw style-loader & MiniCssExtractPlugin
                *   style-loader will inject styles in a js bundle,
                *   MiniCssExtractPlugin will create a separate css file
                * postcss -> add vendor prefixes to css rules
                * */
            }
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: ['.js', '.jsx']
    },


    devtool: "source-map", //enable source-map dev-tools
    devServer: {
        contentBase: "./dist", // to render index.html directly instead of folder structure
        hot: true, // enable hot-reloading instead of live reloading
    }
}
