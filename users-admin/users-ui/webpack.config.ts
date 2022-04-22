import path from 'path'
import webpack, {
  Configuration
} from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig: Configuration = {
  devtool: !isProduction ? 'source-map' : false,
  target: 'web',
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json'
    ],
    fallback: {
      buffer: require.resolve('buffer'),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin(
      {
        /**
        in a development environment,
        (webpack-dev-server),
        our requests will point to the address:
        127.0.0.1:8080
        */
        template: './src/index.html',
        filename: './index.html',
        publicPath: !isProduction ? 'http://localhost:8080/' : ''
      }
    )
  ]
}

export default webpackConfig
