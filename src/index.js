import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // App을 Provider로 감싸주고, configStore에서 export한 store을 넣어주기
  <Provider store={store}>
    <App />
  </Provider>
);
