/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2021-03-20
 * @modify date 2021-02-03
 * @desc The first component of the application, all the required context and routes are used here
 * to setup the application.
 */

import React from "react";

import AppAuth from "./App.auth";
import AppTheme from "./App.theme";
import AppAlert from "./App.alert";
import AppErrorBoundary from "./App.errorBoundry";
import RouterApp from "./router";

import { CssBaseline } from "@material-ui/core";
import AppDialog from "./App.dialog";
import AppBackdrop from "./App.backdrop";

// Reactive Core Setup
// import { store as UIstore } from "binder-engine";
// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={UIstore}>
    <AppAuth>
      <AppErrorBoundary>
        <AppTheme>
          <CssBaseline />
          <AppAlert>
            <AppDialog>
              <AppBackdrop>
                <RouterApp />
              </AppBackdrop>
            </AppDialog>
          </AppAlert>
        </AppTheme>
      </AppErrorBoundary>
    </AppAuth>
    // </Provider>
  );
}

export default App;
