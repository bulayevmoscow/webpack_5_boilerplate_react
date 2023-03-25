const path = require('path')

module.exports = {
    entry: './src/main.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        {}
    ],

    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules:{
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
                            modules:{
                                localIdentName: "[local]_[hash:base64:5]",
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],

    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    }
}