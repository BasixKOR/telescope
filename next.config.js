const withCSS = require('@zeit/next-css')
const path = require('path')
require('dotenv').config()

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.[tj]sx?$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })
    return config
  },
  env: {
    ALGOLIA_APP: process.env.ALGOLIA_APP,
    ALGOLIA_KEY: process.env.ALGOLIA_KEY
  },
})
