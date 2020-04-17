import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const UseStatePage = lazy(() =>
	import(
		/* webpackChunkName: "useState" */ '../examples/useState/UseStatePage'
	)
);

const UseReducerPage = lazy(() =>
	import(
		/* webpackChunkName: "useReducer" */ '../examples/useReducer/UseReducerPage'
	)
);

const UseContextPage = lazy(() =>
	import(
		/* webpackChunkName: "useContext" */ '../examples/useContext/UseContextPage'
	)
);

const App = () => {
	return (
		<main>
			<BrowserRouter>
				<Suspense fallback={<p>Loading</p>}>
					<Switch>
						<Route path="/" exact>
							<ul>
								<li>
									<Link to="/usestate">
										useState Examples
									</Link>
								</li>
								<li>
									<Link to="/usereducer">
										useReducer Examples
									</Link>
								</li>
								<li>
									<Link to="/usecontext">
										useContext Examples
									</Link>
								</li>
							</ul>
						</Route>
						<Route path="/usestate" exact>
							<UseStatePage />
						</Route>
						<Route path="/usereducer" exact>
							<UseReducerPage />
						</Route>
						<Route path="/usecontext" exact>
							<UseContextPage />
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</main>
	);
};

export default App;
