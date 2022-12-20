import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          ;
          <Route path="/calculator" element={<Calculator />} />
          ;
          <Route path="/quote" element={<Quote />} />
          ;
        </Routes>
      </>
    );
  }
}

export default App;
