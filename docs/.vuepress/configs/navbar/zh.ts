import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'v2.x',
        link: 'https://github.com/king2088/vue-3d-loader',
      },
      {
        text: 'v1.x',
        link: 'https://github.com/king2088/vue-3d-loader/tree/1.2.x',
      },
    ],
  },
]
