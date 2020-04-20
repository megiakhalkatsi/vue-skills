// vue.config.js
module.exports = {
    // options...
    
    // publicPath: '/vue-skills/'
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-skills/' : '/'
  }