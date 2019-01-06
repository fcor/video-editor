import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index.js';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
