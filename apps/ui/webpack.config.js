const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
    issuer: {
      and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
    },
  });
  config.plugins.push(
    new CompressionPlugin({
      algorithm: 'gzip',
      deleteOriginalAssets: false,
      test: /\.(js|css|html|svg|ttf)$/,
      threshold: 1024,
      minRatio: 0.8,
      compressionOptions: {
        level: 9,
      },
    })
  );

  config.plugins.push(
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      deleteOriginalAssets: false,
      test: /\.(js|css|html|svg|ttf)$/,
      threshold: 1024,
      minRatio: 0.8,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    })
  );
  return config;
});
