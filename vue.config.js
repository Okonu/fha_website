  module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://web.foundershub.africa',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
  
