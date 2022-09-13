import React from "react";
import { Main } from "./Components/Home";
import { BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}
