import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python documentation",
  description: "Python documentation in Uzbek language",
  srcDir: "src/pages/",
  head: [
    ['link', {rel: 'icon', href: 'https://www.python.org/static/favicon.ico'}],
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Documentation', link: '/guide/introduction'},
      {text: 'Examples', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          {text: 'Introduction', link: '/guide/introduction'},
          {text: 'Quick start', link: '/guide/quick-start'}
        ]
      },
      {
        text: 'Essentials',
        items: [
          {text: 'Syntax', link: '/guide/syntax'},
          {text: 'Printing data', link: '/guide/printing-data'},
          {text: 'Arithmetic operators', link: '/guide/arithmetic-operators'},
          {text: 'Variables', link: '/guide/variables'},
          {text: 'Data types', link: '/guide/data-types'},
          {text: 'Change data type', link: '/guide/change-data-type'},
          {text: 'Input', link: '/guide/input'},
          {text: 'Logical operators', link: '/guide/logical-operators'},
          {text: 'Comparison operators', link: '/guide/comparison-operators'},
          {text: 'String', link: '/guide/string'},
          {text: 'String methods', link: '/guide/string-methods'},
          {text: 'List', link: '/guide/list'},
          {text: 'List methods', link: '/guide/list-methods'},
          {text: 'Tuple', link: '/guide/tuple'},
          {text: 'Set', link: '/guide/set'},
          {text: 'Dictionary', link: '/guide/dictionary'},
          {text: 'If statement', link: '/guide/if-statement'},
          {text: 'For loop', link: '/guide/for-loop'},
          {text: 'While loop', link: '/guide/while-loop'},
          {text: 'Function', link: '/guide/function'},
          {text: '*args and **kwargs', link: '/guide/args-and-kwargs'},
          {text: 'Lambda', link: '/guide/lambda'},
          {text: 'Decorator', link: '/guide/decorator'},
          {text: 'Comments', link: '/guide/comments'}
        ]
      },
      {
        text: 'OOP',
        items: [
          {text: 'Class', link: '/oop/class.md'},
          {text: 'Methods', link: '/oop/methods.md'},
          {text: 'Inheritance', link: '/oop/inheritance.md'},
          {text: 'super()', link: '/oop/super.md'},
          {text: 'Magic methods', link: '/oop/magic-methods.md'},
        ]
      },
      {
        text: 'API Reference',
        items: [
          {text: 'print function', link: '/api/print'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'facebook', link: 'https://facebook.com/documentation-uz'},
      {icon: 'youtube', link: 'https://youtube.com/documentation-uz'},
      {icon: 'instagram', link: 'https://instagram.com/documentation-uz'},
      {icon: 'linkedin', link: 'https://linkedin.com/in/documentation-uz'},
      {icon: 'twitter', link: 'https://twitter.com/documentation-uz'},
      {icon: 'github', link: 'https://github.com/documentation-uz/python'}
    ]
  }
})
