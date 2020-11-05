import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: <a href="https://github.com/wwnorton/style/tree/main/packages/eslint-config-norton">eslint-config-norton</a>,
		// imageUrl: 'img/undraw_docusaurus_mountain.svg',
		description: (
			<>
				An <a href="https://eslint.org/">ESLint</a> shareable config for Norton code style. Currently defaulted to provide React linting.
				Be sure to use this alongside our prettier-config-norton for your formatting needs.
			</>
		),
	},
	{
		title: <a href="https://github.com/wwnorton/style/tree/main/packages/stylelint-config-norton">stylelint-config-norton</a>,
		// imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				A <a href="https://stylelint.io/">Stylelint</a> shareable config for the Norton stylesheet guide. Helps to avoid errors and enforce conventions in your styles.
			</>
		),
	},
	{
		title: <a href="https://github.com/wwnorton/style/tree/main/packages/prettier-config-norton">prettier-config-norton</a>,
		// imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
				An opinionated <a href="https://prettier.io/">Prettier</a> shareable config for Norton Code style. Made to work alongside our eslint-config-norton for your linting needs.
			</>
		),
	},
];

function Feature({imageUrl, title, description}) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />">
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								'button button--outline button--secondary button--lg',
								styles.getStarted,
							)}
							to={useBaseUrl('docs/')}>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
