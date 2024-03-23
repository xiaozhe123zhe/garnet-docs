import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Garnet",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/' },
      { text: '博客', link: '/markdown-examples' },
      { text: 'garnet概述', link: '/overview/garnet' }
    ],

    sidebar: [
      {
        text: '案例',
        items: [
          { text: 'garnet概述', link: '/overview/garnet' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/microsoft/garnet' }
    ]
  }
})
