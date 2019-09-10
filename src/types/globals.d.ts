/* tslint:disable: interface-name */

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;

  store: any;
}

declare interface NodeModule {
  hot: {
    accept: (path?: string, callback?: any) => void;
  };
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
