const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  output: 'export',
  // Comentamos la línea para desactivar el bundle analyzer por ahora
  // ...withBundleAnalyzer({
};
