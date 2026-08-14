import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Archive from './views/Archive/Archive';
import Home from './views/Home/Home';
import RecipeDetails from './views/RecipeDetails/RecipeDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive/:categoryName" element={<Archive />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


