import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);

  useEffect(() => {
    if (isPictureInPicture) {
      video.current?.requestPictureInPicture();
    } else if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
  }, [isPictureInPicture]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <video ref={video} width={300} height={300} controls src="https://cdn.arnellebalane.com/videos/original-video.mp4"></video>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button type='button'
          className="App-link"
          onClick={() => setIsPictureInPicture(!isPictureInPicture) }
        >
          Picture in Picture
        </button>

      </header>
    </div>
  );
}

export default App;
