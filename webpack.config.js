let path = require('path');

module.exports = {
    // Change to your "entry-point".
    devtool: "source-map",
    entry: './src/client/index',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.png']
    },
    devServer: {
        overlay: true,
        // contentBase: ""
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                }
            ]
        }],
    }
};
