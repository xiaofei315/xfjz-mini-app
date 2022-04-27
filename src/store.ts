import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import thunkMiddleware from 'redux-thunk'
import {models, RootModel} from './models';

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

export const store = init({
  models: models,
  ...middlewares,
  plugins: [],
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
export default store;


