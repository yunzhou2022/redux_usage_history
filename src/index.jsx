import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.jsx";
import counterSlice from "./store/reducers.js";
import { Provider } from "react-redux";
import { userSlice } from "./store/user.js";

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  devTools: true,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
