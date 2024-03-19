  module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://fha.foundershubafrica.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
  
