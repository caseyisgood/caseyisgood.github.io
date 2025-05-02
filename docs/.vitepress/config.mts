import { defineConfig } from 'vitepress'

const vitePressConfigs = {
  /* ... */
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // head: [
  //   ['script', {
  //     src: 'https://webapi.amap.com/loader.js'
  //   }]
  // ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Wang Kaixin',
      description: "Wang Kaixin's personal website. A Computer Science Student at Wenzhou-Kean University.",
      themeConfig: {
        "docFooter": {
          "prev": "Previous page",
          "next": "Next page"
        },
        "outline": {
          "label": "On this page"
        },
        "lastUpdated": {
          "text": "Last updated"
        },
        "langMenuLabel": "Change language",
        "returnToTopLabel": "Return to top",
        "sidebarMenuLabel": "Menu",
        "darkModeSwitchLabel": "Appearance",
        "lightModeSwitchTitle": "Switch to light theme",
        "darkModeSwitchTitle": "Switch to dark theme"
      }

    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      title: '王凯鑫',
      description: '王凯鑫的个人网站。温州肯恩大学计算机科学专业学生。',
      link: '/zh-CN/',
      themeConfig: {
        "docFooter": {
          "prev": "上一页",
          "next": "下一页"
        },
        "outline": {
          "label": "本页目录"
        },
        "lastUpdated": {
          "text": "最后更新"
        },
        "langMenuLabel": "切换语言",
        "returnToTopLabel": "返回顶部",
        "sidebarMenuLabel": "菜单",
        "darkModeSwitchLabel": "外观",
        "lightModeSwitchTitle": "切换至浅色主题",
        "darkModeSwitchTitle": "切换至深色主题",

        nav: [
          { text: '首页', link: '/zh-CN/' }, // 确保路径前缀与语言配置一致
          {
            text: '关于',
            items: [
              { text: '关于我', link: '/zh-CN/about' },
              { text: '简历', link: '/zh-CN/about/resume' }
            ]
          },
          { text: '联系', link: '/zh-CN/contact' },
          {
            text: '外部链接',
            items: [
              { text: 'Github', link: 'https://github.com/caseyisgood' },
              { text: 'CSDN', link: 'https://blog.csdn.net/qq_62540475?spm=1000.2115.3001.5343' }
            ]
          }
        ],

        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索"
              },
              modal: {
                displayDetails: "显示详细信息",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "未找到结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "选择",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "向上",
                  navigateDownKeyAriaLabel: "向下",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc"
                }
              }
            },

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
          '/zh-CN/contact/': [
            {
              text: '联系',
              items: [
                { text: '联系我', link: '/zh-CN/contact' }
              ]
            }
          ],
          '/zh-CN/about/': [
            {
              text: '关于',
              items: [
                { text: '关于我', link: '/zh-CN/about' },
                { text: '简历', link: '/zh-CN/about/resume' }
              ]
            }
          ]
        },

        footer: {
          copyright: '版权所有 © 2025-至今 <a href="https://github.com/caseyisgood" target="_blank">王凯鑫</a>'
        }

      }

    }
  },

  lang: 'en-US',
  base: '/',
  title: "Wang Kaixin",
  description: "Wang Kaixin's personal website. A Computer Science Student at Wenzhou-Kean University.",

  head: [
    // ['link', { rel: 'icon', href: '/imgs/icon.ico' }],

    ['link', { rel: 'icon', href: '/icon_16x16.ico' }],
    // ['script', {
    //   src: 'https://webapi.amap.com/loader.js'
    // }]

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
    ],

    // // Add localized theme configuration
    // "locales": {

    //   'zh-CN': {
    //     nav: [
    //       { text: '首页', link: '/zh-CN/' },
    //       {
    //         text: '关于',
    //         items: [
    //           { text: '关于我', link: '/zh-CN/about' },
    //           { text: '简历', link: '/zh-CN/about/resume' }
    //         ]
    //       },
    //       { text: '联系', link: '/zh-CN/contact' },
    //       {
    //         text: '外部链接',
    //         items: [
    //           { text: 'Github', link: 'https://github.com/caseyisgood' },
    //           { text: 'CSDN', link: 'https://blog.csdn.net/qq_62540475?spm=1000.2115.3001.5343' }
    //         ]
    //       }
    //     ],

    //     sidebar: {
    //       '/zh-CN/contact/': [
    //         {
    //           text: '联系',
    //           items: [
    //             { text: '联系我', link: '/zh-CN/contact' }
    //           ]
    //         }
    //       ],
    //       '/zh-CN/about/': [
    //         {
    //           text: '关于',
    //           items: [
    //             { text: '关于我', link: '/zh-CN/about' },
    //             { text: '简历', link: '/zh-CN/about/resume' }
    //           ]
    //         }
    //       ]
    //     },

    //     footer: {
    //       copyright: '版权所有 © 2025-至今 <a href="https://github.com/caseyisgood" target="_blank">王凯鑫</a>'
    //     }
    //   }

    // }
  }
})

// interface LocaleSpecificConfig<ThemeConfig = any> {
//   lang?: string
//   dir?: string
//   title?: string
//   titleTemplate?: string | boolean
//   description?: string
//   head?: HeadConfig[] // 将与现有的头部条目合并，重复的元标签将自动删除
//   themeConfig?: ThemeConfig // 会进行浅层合并，常见内容可放在顶层的 themeConfig 属性中
// }