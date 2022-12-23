import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
