export default interface Environment {
	rootUrl: string;
	isFeatureEnabled: boolean;
}

export const defaultEnvironment: Environment = {
	rootUrl: 'http://localhost:8080/',
	isFeatureEnabled: true
};
