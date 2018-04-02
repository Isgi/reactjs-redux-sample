import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Hello from "./Hello";
import store from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
