require('dotenv').config()
module.exports = {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mis XV Años Sofi',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ven a festejar mis XV en compañia de mis seres queridos' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#00C4B3' },
      {
        name: 'msapplication-TileImage',
        content: './static/favicon.ico'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Josefin+Sans:wght@500&display=swap" 
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/tailwind.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
