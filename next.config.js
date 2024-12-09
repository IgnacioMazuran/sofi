const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/sofi' : '', // Cambia esto al nombre de tu repositorio en GitHub
  assetPrefix: isProd ? '/sofi' : '',
  // Comentamos la línea para desactivar el bundle analyzer por ahora
  // ...withBundleAnalyzer({
};
