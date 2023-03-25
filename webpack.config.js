const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    experiments: {
        futureDefaults: true,
    },
    node: {
        global: true
    }
}