  module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://13.48.195.128',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
  