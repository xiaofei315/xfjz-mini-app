import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import LoadingPlugin from '@rematch/loading';
import thunkMiddleware from 'redux-thunk'
import immerPlugin from '@rematch/immer'
import updatedPlugin from '@rematch/updated'
import { models, RootModel } from './models';

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

export const store = init({
  models: models,
  ...middlewares,
  plugins: [
    LoadingPlugin(),
    immerPlugin(),
    updatedPlugin() ,// 在必定的时间段内防止昂贵（频繁）的获取请求
    // createLoadingPlugin<RootModel, RootModel, any>({
    //   blacklist: ['shoppingCart/getCodeInfo'],
    // }),
  ],
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
export default store;


