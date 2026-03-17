import React from 'react';
import Page from './components/Page/Page';
import SongsFetch from './components/SongsFetch/SongsFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />} >
          <Route path='/api/songs' element={<SongsFetch/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
