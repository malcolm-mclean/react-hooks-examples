import React, { useReducer } from 'react';
import { reducer } from './reducers/reducer';

const UseReducerPage = () => {
	const [state, dispatch] = useReducer(reducer, {
		isLoading: false,
		isLoadingFailure: false,
		isLoadingSuccess: false,
	});

	return (
		<article>
			<h1>useReducer</h1>
			<button onClick={() => dispatch('IS_LOADING')}>
				Set isLoading
			</button>
			<button onClick={() => dispatch('IS_LOADING_SUCCESS')}>
				Set isLoadingSuccess
			</button>
			<button onClick={() => dispatch('IS_LOADING_FAILURE')}>
				Set isLoadingFailure
			</button>
			<section>
				<p>
					isLoading: {state.isLoading ? 'Yes' : 'No'}
					<br />
					isLoadingSuccess: {state.isLoadingSuccess ? 'Yes' : 'No'}
					<br />
					isLoadingFailure: {state.isLoadingFailure ? 'Yes' : 'No'}
				</p>
			</section>
		</article>
	);
};

export default UseReducerPage;
