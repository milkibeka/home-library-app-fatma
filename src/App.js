import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BooksOnLoan from './components/BooksOnLoan';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

library.add(faEllipsis);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BooksOnLoan" element={<BooksOnLoan />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
