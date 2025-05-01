import { defineConfig } from 'vitepress'

const vitePressConfigs = {
  /* ... */
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  base: '/',
  title: "Wang Kaixin",
  description: "Wang Kaixin's personal website. A Computer Science Student at Wenzhou-Kean University.",

  head: [
    // ['link', { rel: 'icon', href: '/imgs/icon.ico' }],

    ['link', { rel: 'icon', href: '/icon_16x16.ico' }]

  ],


  themeConfig: {
    logo: {
      src: '/avatar.png',
      alt: 'Logo'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home', link: '/'
      },
      // { text: 'Examples', link: '/markdown-examples' }

      {
        text: 'About',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Resume', link: '/about/resume' }
        ]
      },

      {
        text: 'Contact', link: '/contact'
      },

      {
        text: 'External Links',
        items: [
          { text: 'Github', link: 'https://github.com/caseyisgood' },
          { text: 'CSDN', link: 'https://blog.csdn.net/qq_62540475?spm=1000.2115.3001.5343' }

        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },

    sidebar: {
      '/contact/': [
        {
          text: 'Contact',
          items: [
            { text: 'Contact', link: '/contact' }
          ]
        }
      ],

      'about/': [
        {
          text: 'About',
          items: [
            { text: 'About', link: '/about' },
            { text: 'Resume', link: '/about/resume' }
          ]
        }
      ]
    },

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/caseyisgood" target="_blank">Wang Kaixin</a>'

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caseyisgood' }
    ]
  }
})
