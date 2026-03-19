import React, { useState } from 'react';
import Page from './components/Page/Page';
import SongsFetch from './components/useSongsFetch/useSongsFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import type { Song } from './data/song';
import AllSongs from './components/SongsTable/AllSongs/AllSongs';
import FavoritesPage from './components/SongsTable/FavoritesPage/FavoritesPage';

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
          <Route path='/api/songs' element={<AllSongs setQueue={setQueue} setCurrentSong={setCurrentSong} />}/>
          <Route path='/api/favorites' element={<FavoritesPage setCurrentSong={setCurrentSong} setQueue={setQueue} />}/>
          <Route path='' element={<SongsFetch setCurrentSong={setCurrentSong} setQueue={setQueue} queue={queue}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
