import { MuiThemeProvider } from '@material-ui/core';
import { MuiTheme } from 'theme';
import { Header, Parallax, ParallaxCarousel } from 'components';
import React from 'react';
import './App.css';
import { images } from 'images';

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <main className="App">
        <Header />
        <Parallax
          hasOverlay
          backgroundImageUrl={'/main-page-background.jpg'}
          title="Hello"
          content="To base of HTML and CSS add love to typescript. Gently whisk in Angular and React. Bake for few years at FIIT STU and voila.... you got me.
(I also love baking....  :D)"
        />
        <div style={{ height: '100vh' }}></div>
        <ParallaxCarousel
          content={Object.values(images).map((path) => ({
            path,
            imageContent: <div>lel</div>,
          }))}
        />
        <div style={{ height: '100vh' }}></div>
      </main>
    </MuiThemeProvider>
  );
}

export default App;
