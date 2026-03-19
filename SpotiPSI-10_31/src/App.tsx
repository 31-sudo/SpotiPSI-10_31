import React, { useState } from 'react';
import Page from './components/Page/Page';
import SongsFetch from './components/SongsFetch/SongsFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import type { Song } from './data/song';

const App: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>();
  const [queue, setQueue] = useState<Song[]>([]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page currentSong={currentSong} setCurrentSong={setCurrentSong} queue={queue}/>} >
          <Route path='/api/songs' element={<SongsFetch setCurrentSong={setCurrentSong} setQueue={setQueue} queue={queue}/>}/>
          <Route path='/api/playlists' element={<SongsFetch setCurrentSong={setCurrentSong} setQueue={setQueue} queue={queue}/>}/>
          <Route path='/api/favorites' element={<SongsFetch setCurrentSong={setCurrentSong} setQueue={setQueue} queue={queue}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
