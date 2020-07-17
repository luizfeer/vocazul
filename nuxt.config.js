module.exports = {
  /*
  ** Headers of the page
  */
<<<<<<< HEAD

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  mode: 'spa',
  head: {
    title: 'Você Azul',
=======
  head: {
    title: 'teste',
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'teste' }
    ],
    link: [
<<<<<<< HEAD
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }

    ]

=======
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  buildModules: [
<<<<<<< HEAD
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
=======
    '@nuxtjs/tailwindcss'
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
<<<<<<< HEAD
    transpile: [
      'vee-validate/dist/rules'
    ],

=======
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
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
<<<<<<< HEAD
=======

>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
