// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorial Timposu',
  tagline: 'Tempat Belajar Pemrograman Yang Asik dan Menyenangkan',
  url: 'https://tutorialtimposu.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TutorialTimposu', // Usually your GitHub org/user name.
  projectName: 'TutorialTimposu.github.io', // Usually your repo name.
  trailingSlash: false, // custom Github Pages

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/TutorialTimposu/TutorialTimposu.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/TutorialTimposu/TutorialTimposu.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-5NK2V38RCW',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia search
      algolia: {
        apiKey: "86bb44d643cacc23505267e5049716b9",
        indexName: "TutorialTimposu",
        appId: "EA5OG72GYH",
      },
      navbar: {
        title: 'Tutorial Timposu',
        logo: {
          alt: 'Tutorial Timposu Logo',
          src: 'img/logo-topekox.svg',
        },
        items: [
          // {
          //   position: 'left',
          //   to: 'https://udemy.com/',
          //   label: 'Kelas Online',
          // },
          // {
          //   position: 'left',
          //   label: 'Promo',
          //   items: [
          //       {
          //           to: 'https://udemy.com/',
          //           label: 'Promo Kelas Online',
          //       },
          //       {
          //           to: 'https://udemy.com/',
          //           label: 'Promo Kelas Online di Udemy',
          //       },               
          //   ]
          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            position: 'left',
            label: 'Tutorial',
            items: [
              {
                to: '/java/',
                label: 'Java',
              },
              // {
              //   to: '#',
              //   label: 'Python',
              // }
            ],
          },
          // {
          //   position: 'left',
          //   label: 'Linux Server',
          //   items: [
          //     {
          //       to: '#',
          //       label: 'Fedora 35',                
          //     },
          //     {
          //       to: '#',
          //       label: 'Ubuntu Server 20.04',
          //     },
          //   ],
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/TutorialTimposu/forum/discussions',
            label: 'Forum',
            position: 'right',
          }, 
          {
            href: 'https://saweria.co/tutorialtimposu',
            label: 'Donasi',
            position: 'right',
          },
          {
            href: 'https://github.com/TutorialTimposu',
            label: 'GitHub',
            position: 'right',
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '#',
              },
              {
                label: 'Kontak',
                to: '#',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Youtube',
                href: '#',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/TutorialTimposu',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/timposulabs',
              },              
            ],
          },
          {
            title: 'Link',
            items: [
              {
                label: 'Donasi',
                href: 'https://saweria.co/tutorialtimposu',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TutorialTimposu',
              },
              {
                label: 'Forum',
                href: 'https://github.com/TutorialTimposu/forum/discussions',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Tutorial Timposu.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'properties'],
      },
    }),

  plugins: [
   
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'java',
          path: 'tutorial/java/',
          routeBasePath: 'java',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/TutorialTimposu/TutorialTimposu.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'python',
          path: 'tutorial/python',
          routeBasePath: 'python',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/TutorialTimposu/TutorialTimposu.github.io/tree/main/',
      },
    ],
  ],
};

module.exports = config;
