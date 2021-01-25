import { MuiThemeProvider } from "@material-ui/core";
import { Header } from "components";
import React from "react";
import "./App.css";
import { MuiTheme } from "theme";
import { Career, Hobbies, Intro } from "pages";

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <main className="App">
        <Header />
        <Intro id="intro"/>
        <Career id="career"/>
        <Hobbies id="hobbies"/>
        <div id="contact" style={{ height: "100vh" }}></div>
      </main>
    </MuiThemeProvider>
  );
}

export default App;
