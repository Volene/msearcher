import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import App from "./components/App";
import reducers from "./reducers";
import { rootSaga } from "./sagas/getMovies";

const sagas = createSagaMiddleware();
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhansers(applyMiddleware(sagas))
)

export const persistor = persistStore(store);
sagas.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
