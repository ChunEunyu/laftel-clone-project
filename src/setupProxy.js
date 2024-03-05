const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
      target: 'https://laftel.net',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    }));
  };