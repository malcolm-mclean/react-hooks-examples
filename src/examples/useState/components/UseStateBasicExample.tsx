import React, { useState } from 'react';

const UseStateBasicExample = () => {
	const [count, setCount] = useState(0);

	const onButtonClick = () => {
		setCount(1);
	};

	const onResetClick = () => {
		setCount(0);
	};

	return (
		<section>
			<h2>Basic Example</h2>
			<p>Count: {count}</p>
			<button onClick={onButtonClick}>Set count to 1</button>
			<button onClick={onResetClick}>Reset to 0</button>
		</section>
	);
};

export default UseStateBasicExample;
