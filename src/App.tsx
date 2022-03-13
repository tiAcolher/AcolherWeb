import React from "react";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Routes />
      </MuiPickersUtilsProvider>
    </Provider>
  );
}
