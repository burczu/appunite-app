import _Store from '@Store';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createEnhancersComposer from './createEnhancersComposer';
import history from './history';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import services from './services';

const epicMiddleware = createEpicMiddleware<
  _Store.IAction,
  _Store.IAction,
  _Store.IState,
  _Store.IService
>({ dependencies: services });

const enhancersComposer = createEnhancersComposer();

export default function configureStore() {
  const preLoadedState = {};

  const store = createStore(
    rootReducer,
    preLoadedState,
    enhancersComposer(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        epicMiddleware,
      ),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
