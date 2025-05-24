import { defineConfig } from 'vitepress'

import Redirect from './components/Redirect.vue';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/icon_16x16.ico' }]
  ],

  // markdown: {
  //   container: {
  //     tipLabel: 'TIP',
  //     warningLabel: 'WARNING',
  //     dangerLabel: 'DANGER',
  //     infoLabel: 'INFO',
  //     detailsLabel: 'Details',
  //     custom: [
  //       {
  //         type: 'note',
  //         defaultTitle: {
  //           '/': 'NOTE',
  //           '/zh-CN/': '备注'
  //         }
  //       },
  //       {
  //         type: 'important',
  //         defaultTitle: {
  //           '/': 'IMPORTANT',
  //           '/zh-CN/': '重要'
  //         }
  //       }
  //     ]
  //   } as any
  // },

  locales: {
    'en': {
      label: 'English',
      lang: 'en-US',
      title: 'Wang Kaixin',
      description: "Wang Kaixin's personal website. A Computer Science Student at Wenzhou-Kean University.",
      themeConfig: {
        logo: {
          src: '/avatar.png',
          alt: 'Logo'
        },
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'About',
            items: [
              { text: 'About', link: '/about' },
              { text: 'Resume', link: '/about/resume' }
            ]
          },
          {
            text: 'Tutorials',
            link: '/tutorials/',
          },
          { text: 'Contact', link: '/contact' },
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
              options: { /* ... */ },
              searchOptions: { /* ... */ }
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
          '/about/': [
            {
              text: 'About',
              items: [
                { text: 'About', link: '/about' },
                { text: 'Resume', link: '/about/resume' }
              ]
            }
          ],
          '/tutorials/java01': [
            {
              text: 'Java Programming: From Words to Works - Ⅰ',
              items: [
                { text: 'Preface', link: '/tutorials/java01' },
                { text: 'Chapter 1 - Introduction', link: '/tutorials/java01/chapter01' }
              ]
            }
          ]
        },
        footer: {
          copyright: 'Copyright © 2025-present <a href="https://github.com/caseyisgood" target="_blank">Wang Kaixin</a>'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/caseyisgood' }
        ],
        docFooter: {
          prev: "Previous page",
          next: "Next page"
        },
        outline: {
          label: "On this page"
        },
        lastUpdated: {
          text: "Last updated"
        },
        langMenuLabel: "Change language",
        returnToTopLabel: "Return to top",
        sidebarMenuLabel: "Menu",
        darkModeSwitchLabel: "Appearance",
        lightModeSwitchTitle: "Switch to light theme",
        darkModeSwitchTitle: "Switch to dark theme"
      }
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      title: '王凯鑫',
      description: '王凯鑫的个人网站。温州肯恩大学计算机科学专业学生。',
      link: '/zh-CN/',
      themeConfig: {
        logo: {
          src: '/avatar.png',
          alt: 'Logo'
        },
        nav: [
          { text: '首页', link: '/zh-CN/' },
          {
            text: '关于',
            items: [
              { text: '关于我', link: '/zh-CN/about' },
              { text: '简历', link: '/zh-CN/about/resume' }
            ]
          },
          {
            text: '教程',
            link: '/zh-CN/tutorials/',
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
              options: { /* ... */ },
              searchOptions: { /* ... */ }
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
          ],
          '/zh-CN/tutorials/java01': [
            {
              text: 'Java编程：从识字到创作 · Ⅰ',
              items: [
                { text: '前言', link: '/zh-CN/tutorials/java01' },
                { text: '第1章 - 绪论', link: '/zh-CN/tutorials/java01/chapter01' },
                { text: '第2章 - 初识程序与Java', link: '/zh-CN/tutorials/java01/chapter02' },
              ]
            }
          ]
        },
        footer: {
          copyright: '版权所有 © 2025-至今 <a href="https://github.com/caseyisgood" target="_blank">王凯鑫</a>'
        },
        docFooter: {
          prev: "上一页",
          next: "下一页"
        },
        outline: {
          label: "本页目录"
        },
        lastUpdated: {
          text: "最后更新"
        },
        langMenuLabel: "切换语言",
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "外观",
        lightModeSwitchTitle: "切换至浅色主题",
        darkModeSwitchTitle: "切换至深色主题"
      }
    }
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