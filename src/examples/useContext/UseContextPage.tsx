import React from 'react';
import Article from './components/Article';
import Title from './components/Title';
import EnvironmentContext from './types/EnvironmentContext';
import { defaultEnvironment } from './types/Environment';

const UseContextContainer = () => {
	return (
		<EnvironmentContext.Provider value={defaultEnvironment}>
			<Title />
			<Article />
		</EnvironmentContext.Provider>
	);
};

export default UseContextContainer;
