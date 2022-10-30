import process from 'node:process'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue 3d loader',
      description: 'VueJS + ThreeJS 3d viewer component'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue 3d loader',
      description: '基于threeJS的vue 3D展示组件'
    }
  },
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'king2088/vue-3d-loader',
    docsDir: 'docs',
    locales: {
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn,
        editLinkText: 'Edit this page on Github',
        // editLink: false,
        editLinkPattern: 'https://github.com/king2088/vue-3d-loader-docs/edit/main/:path'
      },
      '/zh/': {
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        sidebar: sidebarZh,
        editLinkText: '在 GitHub 上编辑此页',
        editLinkPattern: 'https://github.com/king2088/vue-3d-loader-docs/edit/main/:path',
        lastUpdatedText: '上次更新',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    }
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }) as any,
  ]
})