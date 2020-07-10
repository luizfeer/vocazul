module.exports = {
  /*
  ** Headers of the page
  */
 server: {
  port: 8000, // default: 3000
  host: '0.0.0.0' // default: localhost
},
 mode: 'spa',
  head: {
    title: 'Você Azul',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'teste' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
      
    ],
    
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

