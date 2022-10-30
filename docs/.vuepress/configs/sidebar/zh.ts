import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/event.md',
        '/zh/guide/api.md',
      ],
    },
    {
      text: '样例',
      children: [
        '/zh/guide/example/load-a-model.md',
        '/zh/guide/example/load-multiple-models.md',
        '/zh/guide/example/load-json-model.md',
        '/zh/guide/example/load-draco-model.md',
        '/zh/guide/example/set-width-height.md',
        '/zh/guide/example/load-materials-and-textures.md',
        '/zh/guide/example/background-color-and-alpha.md',
        '/zh/guide/example/interactive-controls.md',
        '/zh/guide/example/rotate-model.md',
        '/zh/guide/example/events.md',
        '/zh/guide/example/lights.md',
        '/zh/guide/example/camera-position-and-rotate.md',
        '/zh/guide/example/parallel-load-models.md',
        '/zh/guide/example/add-labels.md',
        '/zh/guide/example/play-animations.md',
        '/zh/guide/example/enable-damping.md',
        '/zh/guide/example/progress-bar.md'
      ],
    },
  ],
}
