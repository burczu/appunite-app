import { LocationChangeAction, RouterAction } from 'connected-react-router';
import { Epic } from 'redux-observable';
import { StateType } from 'typesafe-actions';

// Import root reducer
import rootReducer from './rootReducer';

// Import services
import { IServices } from './services';

// Import model actions
/* @@STORE_COMPONENT@@ */
import { IAction as IArticlesActions } from '@Model/articles/types';

// Prepare types for router
type IRouterAction = RouterAction | LocationChangeAction;

declare module '@Store' {
  export type IState = StateType<typeof rootReducer>;

  /* @@STORE_COMPONENT@@ */
  export type IAction = IArticlesActions | IRouterAction;

  export type IService = IServices;

  export type IEpic = Epic<IAction, IAction, IState, IService>;
}
