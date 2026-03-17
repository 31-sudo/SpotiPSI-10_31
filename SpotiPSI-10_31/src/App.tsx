import React from 'react';
import Page from './components/Page/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App
