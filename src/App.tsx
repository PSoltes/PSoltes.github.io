import { MuiThemeProvider, Grid } from "@material-ui/core";
import { MuiTheme, theme } from "theme";
import { Header, Heading, Parallax, ParallaxCarousel } from "components";
import React from "react";
import "./App.css";
import { images } from "images";

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <main className="App">
        <Header />
        <Parallax
          overlayColor={theme.colors.darkBackground}
          backgroundImageUrl={"/main-page-background.jpg"}
        >
          <Grid container direction="column">
            <Heading level={1} colored>
              Hello
            </Heading>
            <p>
              To base of HTML and CSS add love to typescript. Gently whisk in
              Angular and React. Bake for few years at FIIT STU and voila....
              you got me. (I also love baking.... :D)
            </p>
          </Grid>
        </Parallax>
        <div id="career" style={{ height: "100vh", margin: theme.spacing.xl }}>
          <Heading level={3}>Education</Heading>
          <Grid container>
            <Grid item md={9}>
              <p>
                I am currently studying second year of masters studies at FIIT
                STU. I finished bachelors studies with honors (cum laude) in
                2019. During study i mostly specialize in web app developement
                and bio-inspired optimization algorithms.
              </p>
            </Grid>
            <Grid item md={3}>
              <img alt="FIIT STU logo" src="/fiit_logo.png" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={4}>
              <img
                alt="Web frameworks logos"
                src="/frameworklogos.png"
                
              />
            </Grid>
            <Grid item md={8}>
              <h2>Career</h2>
              <p>
                My programming work experience started in 2019 at the start of
                my master studies. As i was always interested in web design and
                developement I found my place at <strong>AMCEF</strong> , small
                company founded at FIIT by FIIT students. There i improved my
                skills with Angular and React. I worked on few projects like
                custom e-shop for ski centers, website for transfers providers
                or site for finance advisors. During my time there i acquired my
                love to Typescript and React. As i continue to work there i
                strive to be better at design and be on lookout for new
                technologies such as Svelte. For more structured info, please,
                see my{" "}
                <a href="/CV_placeholder.pdf" target="_blank">
                  CV
                </a>{" "}
                or head on out to my linked.in.
              </p>
            </Grid>
          </Grid>
        </div>
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
