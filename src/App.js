import React from "react";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import './App.css';
import Header from './componenets/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

function App() {

  return (
    <Router>
      
      <div className="container dark">

          <div className="app">
          <Header />
          <Route path='/' exact component={NotesListPage} /> 
          {/* 'exact' in Route renders NotesListPage on exact path='/'. If you do not use exact it will render it in followin note page as well.*/}

          <Route path='/note/:id' component={NotePage} />
          {/* id is a dynamic parameter. */}
          </div>

      </div>

    </Router>
  );
}

export default App;
