import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {DarkModeContextProvider} from "./context/darkModeContext";
import {Provider} from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import {persistor, store} from "./store";
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
            <React.StrictMode>
                <DarkModeContextProvider>
                    <App/>
                </DarkModeContextProvider>
            </React.StrictMode>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
