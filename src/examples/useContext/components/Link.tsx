import React, { useContext } from 'react';
import EnvironmentContext from '../types/EnvironmentContext';

const Link = () => {
	const { rootUrl, isFeatureEnabled } = useContext(EnvironmentContext);

	if (!isFeatureEnabled) {
		return null;
	}

	return <a href={rootUrl}>Home</a>;
};

export default Link;
