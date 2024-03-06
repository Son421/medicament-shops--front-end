import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Routes from './components/navigation/routes';
import Header from './components/chapters/header/Header'

function App() {
  return (
    <div>
       <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;