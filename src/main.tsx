import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./app/store";
import { PageLoader } from "./components/Utils/PageLoader";
import "./index.css";
import "flag-icon-css/css/flag-icons.min.css";

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback={<PageLoader />}>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="top-center" reverseOrder={true} />
        </PersistGate>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
