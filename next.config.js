module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }]
      })
      return typeof defaultConfig.webpack === 'function'
        ? defaultConfig.webpack(config, options)
        : config
    },
    bundleAnalyzer: () =>
      require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true'
      }),
    reactStrictMode: true
  }

  return nextConfig
}
