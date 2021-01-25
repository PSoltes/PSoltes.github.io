import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "theme";
import { Header, Heading, ParallaxCarousel } from "components";
import React from "react";
import "./App.css";
import { images } from "images";
import { MuiTheme } from "theme";
import { Career, Intro } from "pages";

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <main className="App">
        <Header />
        <Intro id="intro"/>
        <Career id="career"/>
        <ParallaxCarousel
          id="hobbies"
          overlayColor={theme.colors.darkBackground}
          content={images.map((image) => ({
            path: image.path,
            imageContent: (
              <div>
                <Heading level={2} colored>
                  {image.title}
                </Heading>
                <p>{image.content}</p>
              </div>
            ),
          }))}
        />
        <div id="contact" style={{ height: "100vh" }}></div>
      </main>
    </MuiThemeProvider>
  );
}

export default App;
