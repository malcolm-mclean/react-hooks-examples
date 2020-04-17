import React, { useContext } from 'react';
import EnvironmentContext from '../types/EnvironmentContext';
import Link from './Link';

const Article = () => {
	const { isFeatureEnabled } = useContext(EnvironmentContext);

	return (
		<article>
			<h2>This is an article</h2>
			{isFeatureEnabled && <p>The feature is enabled</p>}
			<Link />
		</article>
	);
};

export default Article;
