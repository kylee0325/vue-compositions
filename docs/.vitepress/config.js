const config = {
  title: 'vue-compositions',
  base: '/vue-compositions/',
  lang: 'ZH-CN',
  description: 'Collection of Vue Composition Apis',
  header: [],
  themeConfig: {
    repo: 'kylee0325/vue-compositions',
    docsRepo: 'kylee0325/vue-compositions',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        nav: [
          {
            text: 'Changelog',
            link: 'https://github.com/kylee0325/vue-compositions/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: [
          { text: 'Introduction', link: '/' },
          {
            text: 'State',
            children: [
              { text: 'useTitle', link: '/state/useTitle' },
              { text: 'useToggle', link: '/state/useToggle' },
              { text: 'useBoolean', link: '/state/useBoolean' },
              { text: 'useHash', link: '/state/useHash' },
              { text: 'useHistory', link: '/state/useHistory' }
            ]
          },
          {
            text: 'Dom',
            children: [
              { text: 'useEvent', link: '/dom/useEvent' },
              { text: 'useEventRef', link: '/dom/useEventRef' }
            ]
          },
          {
            text: 'Lifecycles',
            children: [{ text: 'useLifecycles', link: '/lifecycles/useLifecycles' }]
          },
          {
            text: 'SideEffects',
            children: [
              { text: 'useDebounce', link: '/effects/useDebounce' },
              { text: 'useDebounceFn', link: '/effects/useDebounceFn' },
              { text: 'useInterval', link: '/effects/useInterval' },
              { text: 'useTimeout', link: '/effects/useTimeout' },
              { text: 'useTimeoutFn', link: '/effects/useTimeoutFn' }
            ]
          },
          {
            text: 'Storage',
            children: [
              { text: 'useLocalStorage', link: '/storage/useLocalStorage' },
              { text: 'useSessionStorage', link: '/storage/useSessionStorage' },
              { text: 'useStorage', link: '/storage/useStorage' }
            ]
          },
          {
            text: 'Sensors',
            children: [
              { text: 'useWindowScroll', link: '/sensors/useWindowScroll' },
              { text: 'useResize', link: '/sensors/useResize' },
              { text: 'useScroll', link: '/sensors/useScroll' },
              { text: 'useScrollRef', link: '/sensors/useScrollRef' }
            ]
          },
          {
            text: 'Utils',
            children: [{ text: 'arrayToTree', link: '/utils/arrayToTree' }]
          }
        ]
      }
    }
  },
  locales: {
    '/': {
      lang: 'ZH-CN',
      title: 'vue-compositions',
      description: 'Collection of Vue Composition Apis'
    }
  }
}

module.exports = config
