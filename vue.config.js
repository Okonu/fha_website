  module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://app.foundershub.africa/',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
  
