import React, { useState } from 'react';
import { expensiveCalculation } from '../utils/utils';

const UseStateLazyInitExample = () => {
	const [count, setCount] = useState(() => {
		// this will only be run on the initial render
		// check the console for proof!
		const initialCount = expensiveCalculation();

		return initialCount;
	});

	const onButtonClick = () => {
		setCount(1);
	};

	const onResetClick = () => {
		setCount(0);
	};

	return (
		<section>
			<h2>Lazy Initialization</h2>
			<p>Count: {count}</p>
			<button onClick={onButtonClick}>Set count to 1</button>
			<button onClick={onResetClick}>Reset to 0</button>
		</section>
	);
};

export default UseStateLazyInitExample;
