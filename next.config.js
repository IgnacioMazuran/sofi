const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  output: 'export',
  basePath: '/sofi', // Cambia esto al nombre de tu repositorio en GitHub
  assetPrefix: '/sofi',
  // Comentamos la línea para desactivar el bundle analyzer por ahora
  // ...withBundleAnalyzer({
};
