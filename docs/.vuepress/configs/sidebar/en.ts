import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/event.md',
        '/guide/api.md',
        '/guide/pay.md'
      ],
    },
    {
      text: 'Example',
      children: [
        '/guide/example/load-a-model.md',
        '/guide/example/load-multiple-models.md',
        '/guide/example/load-json-model.md',
        '/guide/example/load-draco-model.md',
        '/guide/example/set-width-height.md',
        '/guide/example/load-materials-and-textures.md',
        '/guide/example/background-color-and-alpha.md',
        '/guide/example/interactive-controls.md',
        '/guide/example/rotate-model.md',
        '/guide/example/events.md',
        '/guide/example/lights.md',
        '/guide/example/camera-position-and-rotate.md',
        '/guide/example/parallel-load-models.md',
        '/guide/example/add-labels.md',
        '/guide/example/play-animations.md',
        '/guide/example/enable-damping.md',
        '/guide/example/progress-bar.md',
        '/guide/example/set-vertical-horizontal.md',
        '/guide/example/enable-axes-grid.md',
        '/guide/example/min-max-distance.md',
        '/guide/example/point-light-follow-camera.md'
      ],
    },
  ],
}
