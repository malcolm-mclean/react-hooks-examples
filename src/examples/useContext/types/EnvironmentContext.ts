import { createContext } from 'react';
import Environment, { defaultEnvironment } from './Environment';

const EnvironmentContext = createContext<Environment>(defaultEnvironment);

export default EnvironmentContext;
