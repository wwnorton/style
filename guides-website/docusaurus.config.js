module.exports = {
  title: 'W.W. Norton & Company Code Guidelines',
  tagline: 'A collection of guidelines for your coding needs.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wwnorton', // Usually your GitHub org/user name.
  projectName: 'style-guides', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Code Guidelines',
      logo: {
        alt: 'My Site Logo',
        src: 'img/seagull-dark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/wwnorton/style',
          title: 'GitHub',
					position: 'right',
					className: 'navbar__link--github',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/javascript-style',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
			],
			logo: {
				alt: 'Norton Style Guides',
				src: 'img/seagull-light.svg',
				href: 'https://wnorton.com',
			},
      copyright: `Copyright © ${new Date().getFullYear()} W. W. Norton & Company.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'javascript',
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
	],
	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				debug: process.env.NODE_ENV !== 'production',
				offlineModeActivationStrategies: ['appInstalled', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/android-chrome-512x512.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json',
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(26, 128, 130)',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-capable',
						content: 'yes',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-status-bar-style',
						content: '#000',
					},
					{
						tagName: 'link',
						rel: 'apple-touch-icon',
						href: '/img/android-chrome-512x512.png',
					},
					{
						tagName: 'link',
						rel: 'mask-icon',
						href: '/img/seagull-dark.svg',
						color: 'rgb(50, 71, 94)',
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileImage',
						content: '/img/android-chrome-512x512.png',
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileColor',
						content: '#000',
					},
				],
			},
		],
	]
};
