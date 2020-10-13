import { MuiThemeProvider } from '@material-ui/core';
import {MuiTheme} from 'theme';
import { Header, Parallax, ParallaxCarousel } from 'components';
import React from 'react';
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
    <main className="App">
      <Header/>
      <Parallax hasOverlay backgroundImageUrl={'/main-page-background.jpg'}><div style={{height: 64}}></div></Parallax>
      <div style={{height: "100vh"}}>  
      </div>
      <ParallaxCarousel content={[{path: '/image1.jpg', imageContent: <div>lel</div>},{path: '/image2.jpg', imageContent: <div>lul</div>}]}/>
    </main>
    </MuiThemeProvider>
  );
}

export default App;
