import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/laboratorio-lis-frontend" element={<Home />} />
    </Routes>
  );
}

export default App;
