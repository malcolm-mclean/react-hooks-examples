import React, { useState } from 'react';

const UseStatePreviousStateExample = () => {
	const [count, setCount] = useState(0);

	const onButtonClick = () => {
		setCount(previousCount => ++previousCount);
	};

	const onResetClick = () => {
		setCount(0);
	};

	return (
		<section>
			<h2>Previous State</h2>
			<p>Count: {count}</p>
			<button onClick={onButtonClick}>Increment count</button>
			<button onClick={onResetClick}>Reset to 0</button>
		</section>
	);
};

export default UseStatePreviousStateExample;
