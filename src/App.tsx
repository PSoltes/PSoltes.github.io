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
        <Parallax hasOverlay backgroundImageUrl={'/main-page-background.jpg'}>
          <div style={{ height: 64 }}></div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontFamily: 'PermanentMarker', fontSize: '25vmin' }}>
              Hello
            </span>
            <p
              style={{ textAlign: 'left', color: '#ffffff', fontSize: '6vmin' }}
            >
              To base of <span style={{ color: '#E44D26' }}>HTML</span> and{' '}
              <span style={{ color: '#2965F1' }}>CSS</span> add love to{' '}
              <span
                style={{
                  backgroundColor: '#007ACC',
                  borderRadius: 5,
                  padding: '4px',
                }}
              >
                typescript
              </span>
              . Gently whisk in
              <span style={{
                  backgroundColor: '#B52E31',
                  borderRadius: 5,
                  padding: '4px',
                  color: '#000000'
                }}> Angular</span> and <span>React</span>. Bake for few years at{' '}
              <span>FIIT STU</span> and voila.... you got me. (I also love
              baking.... :D)
            </p>
          </div>
        </Parallax>
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
