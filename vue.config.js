  module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://web.foundershubafrica.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
  
