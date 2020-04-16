import React from 'react';
import UseStateBasicExample from './components/UseStateBasicExample';
import UseStateLazyInitExample from './components/UseStateLazyInitExample';
import UseStatePreviousStateExample from './components/UseStatePreviousStateExample';

const UseStatePage = () => {
	return (
		<article>
			<h1>useState</h1>
			<UseStateBasicExample />
			<UseStateLazyInitExample />
			<UseStatePreviousStateExample />
		</article>
	);
};

export default UseStatePage;
