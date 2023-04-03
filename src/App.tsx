import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Content from './components/Content/Content';
import Control from './components/Control/Control';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/control" element={<Control />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
