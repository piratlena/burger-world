// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
      '@nuxt/image'
  ],
  app: {
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        link: [
            {
                rel: 'icon',
                href: '/favicon.svg'
            }
        ],
        meta: [
            {
                charset: 'UTF-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                name: 'description',
                content: 'Burger World'
            }
        ]
    }
},
css: [
    "~/assets/scss/index.scss"
]
})
