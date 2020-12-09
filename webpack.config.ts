import * as path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config: Configuration = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: [/\.tsx?$/],
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: [/\.css$/i],
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
};

export default config;
