const path = require('path');

module.exports = (env) => {
    console.log('Value of env =>',env)
    if (env === "development") {
        return {
            entry: './src/index.js',
                output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'app.bundle.js'
            },
            mode: env || "development",
            devtool: 'eval-source-map',
            devServer: {
                contentBase: './',
                hot: true
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: "babel-loader",
                    },
                    {
                        test: /\.css$/,
                        use: [
                            { loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true
                                }
                            }
                        ]
                    }
                ]
            }
        }
    } else {
        return {
            entry: './src/index.js',
                output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'app.bundle.js'
            },
            mode: env || 'production',
            devtool: 'eval-source-map',
            devServer: {
                contentBase: './',
                hot: true
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: "babel-loader",
                    },
                    {
                        test: /\.css$/,
                        use: [
                            { loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
}  
