const path = require('path')

module.exports = {
    entry: './src/main.tsx',
    mode: "production",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },


    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    },
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:5]",
                            }
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:5]",
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],

    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    }
}