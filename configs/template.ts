import { DefaultTheme, UserConfig } from 'vitepress';
import { nav } from './nav';
import { fileURLToPath } from 'node:url';

const BASE_URL = '/';

const description =
    'Documentation for the Ultra.io Blockchain and various other APIs. Learn about our blockchain, uniqs, technology, and much more.';

export const templateConfig: UserConfig<DefaultTheme.Config> = {
    base: BASE_URL,
    title: 'Ultra.io Blockchain Docs',
    description: 'Blockchain Documentation for Ultra.io',
    ignoreDeadLinks: false,
    lastUpdated: true,
    cleanUrls: false,

    themeConfig: {
        nav,
        sidebar: [],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ultraio/docs-blockchain' },
            { icon: 'discord', link: 'https://discord.gg/invite/U7raPf6qZu' },
        ],
        search: {
            provider: 'local',
        },
        lastUpdatedText: 'Last Updated',
        editLink: {
            pattern: 'https://github.com/ultraio/docs-blockchain/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        // Open Graph
        ['meta', { name: 'description', content: description }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://docs.ultra.io' }],
        ['meta', { property: 'og:title', content: 'Ultra.io Documentation' }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { property: 'og:image', content: '/meta.png' }],
        // Twitter
        ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'twitter:url', content: 'https://docs.ultra.io' }],
        ['meta', { property: 'twitter:title', content: 'Ultra.io Docs' }],
        ['meta', { property: 'twitter:description', content: description }],
        ['meta', { property: 'twitter:image', content: '/meta.png' }],
    ],
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.toLowerCase().search(/.*-.*/g) !== -1;
                },
            },
        },
    },
    vite: {
        resolve: {
            alias: [
                {
                    find: /^.*\/VPHome\.vue$/,
                    replacement: fileURLToPath(new URL('/layout/UltraHome.vue', import.meta.url)),
                },
            ],
        },
    },
};
