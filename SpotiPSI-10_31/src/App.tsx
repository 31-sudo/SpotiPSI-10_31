import React, { useState } from 'react';
import Page from './components/Page/Page';
import SongsFetch from './components/SongsFetch/SongsFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import type { Song } from './data/song';

const App: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>();
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const [queue, setQueue] = useState<Song[]>([]);
  const [currentTime, setCurrentTime] = useState<string>();
  const [duretions, setDuretion] = useState<string>();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page currentSong={currentSong} />} >
          <Route path='/api/songs' element={<SongsFetch setCurrentSong={setCurrentSong} />}/>
          <Route path='/api/playlists' element={<SongsFetch setCurrentSong={setCurrentSong} />}/>
          <Route path='/api/favorites' element={<SongsFetch setCurrentSong={setCurrentSong} />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
