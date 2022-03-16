// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorial Timposu',
  tagline: 'Tempat Belajar Pemrograman Yang Asik dan Menyenangkan',
  url: 'https://tutorialtimposu.github.io',
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
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tutorial Timposu',
        logo: {
          alt: 'Tutorial Timposu Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://saweria.co/timposu',
            label: 'Donasi',
            position: 'right',
          },
          {
            href: 'https://github.com/tutorialtimposu',
            label: 'GitHub',
            position: 'right',
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/timposulabs',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/timposulabs',
              },              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Donasi',
                href: 'https://saweria.co/timposu',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tutorialtimposu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tutorial Timposu. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
