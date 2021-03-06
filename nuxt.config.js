export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru',
    },

    title: 'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/fonts/fonts.css' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/route.js' },
    { src: '@/plugins/swiper.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  env: {
    BASE_URL: 'https://strapi.kruzhok.io',
    INSTA_URL: 'https://www.instagram.com/raklechitsa/?__a=1',
  },

  router: {
    middleware: 'data',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
