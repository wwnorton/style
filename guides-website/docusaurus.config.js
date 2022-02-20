const baseUrl = process.env.BASE_URL || '/';
const base = baseUrl.replace(/\/$/, '');

module.exports = {
	title: 'W. W. Norton & Company Code Guidelines',
	tagline: 'A collection of guidelines for your coding needs.',
	url: 'https://wwnorton.github.io',
	baseUrl,
	onBrokenLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'wwnorton', // Usually your GitHub org/user name.
	projectName: 'style', // Usually your repo name.
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
				{
					href: 'https://wwnorton.github.io/design-system/',
					label: 'NDS',
					title: 'wwNDS',
					position: 'left',
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
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
							label: 'Javascript',
							to: 'docs/javascript',
						},
						{
							label: 'React',
							to: 'docs/react',
						},
						{
							label: 'TypeScript',
							to: 'docs/typescript',
						},
					],
				},
				{
					title: 'W. W. Norton & Company',
					items: [
						{
							label: 'Books that Live',
							href: 'https://wwnorton.com/who-we-are',
						},
						{
							label: 'Catalog',
							href: 'https://wwnorton.com/catalog',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/wwnorton',
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
							href: 'https://github.com/wwnorton/style',
						},
					],
				},
			],
			logo: {
				alt: 'Norton Style Guides',
				src: 'img/seagull-light.svg',
				href: 'https://www.wwnorton.com',
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
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					// Please change this to your repo.
					editUrl:
            'https://github.com/wwnorton/style/edit/main/guides-website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
            'https://github.com/wwnorton/style/edit/main/guides-website/',
				},
				theme: {
					customCss: require.resolve('./src/scss/main.scss'),
				},
			},
		],
	],
	plugins: [
		'docusaurus-lunr-search',
		'docusaurus-plugin-sass',
		[
			'@docusaurus/plugin-pwa',
			{
				debug: process.env.NODE_ENV !== 'production',
				offlineModeActivationStrategies: ['appInstalled', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: `${base}/img/android-chrome-512x512.png`,
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: `${base}/manifest.json`,
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
						href: `${base}/img/android-chrome-512x512.png`,
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
						content: `${base}/img/android-chrome-512x512.png`,
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileColor',
						content: '#000',
					},
				],
			},
		],
	],
};
