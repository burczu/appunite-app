# appunite-app

The news app for AppUnite.

## Tech stack

- TypeScript
- React
- Redux
- react-router
- redux-observable
- reselect
- webpack

## Testing

- Jest
- enzyme

## Running the app

First, install all the necessary dependencies:

```
yarn or yarn install
```

When it's done, you are ready to start. You can do it by running the start script:

```
yarn start
```

The script will build the app and start it locally. It should also automatically open itself in you browser. 
If it doesn't for any reason, you can open it manually by navigating to [http://localhost:8080](http://localhost:8080). 

## Other useful scripts

### Build for production:

```
yarn build
```

The app will be built into the `dist` folder.

### Running tests

```
yarn test
```

Starts the `Jest` test runner and performs all the test at once.

```
yarn test:watch
```

Starts the `Jest` test runner and waits for any new changes in tests.

### Prettier

```
yarn prettier
```

Makes the code beautiful.

### Linters

```
yarn tslint
```

Lints the typescript code.

```
yarn csslint
```

Lints styles and fix them if necessary/possible.

