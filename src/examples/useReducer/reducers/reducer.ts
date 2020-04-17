interface State {
	isLoading: boolean;
	isLoadingSuccess: boolean;
	isLoadingFailure: boolean;
}

type Action = 'IS_LOADING' | 'IS_LOADING_SUCCESS' | 'IS_LOADING_FAILURE';

export const reducer = (state: State, action: Action): State => {
	switch (action) {
		case 'IS_LOADING':
			return {
				...state,
				isLoading: true,
				isLoadingFailure: false,
				isLoadingSuccess: false,
			};
		case 'IS_LOADING_SUCCESS':
			return {
				...state,
				isLoading: false,
				isLoadingFailure: false,
				isLoadingSuccess: true,
			};
		case 'IS_LOADING_FAILURE':
			return {
				...state,
				isLoading: false,
				isLoadingFailure: true,
				isLoadingSuccess: false,
			};
		default:
			return state;
	}
};
