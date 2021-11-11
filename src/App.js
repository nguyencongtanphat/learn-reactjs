import logo from './logo.svg';
import React from 'react';
import Todo from './features/Todo/index.jsx'
import Album from './features/Album/index.jsx'
import Counter from './features/Counter/index.jsx'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
    </div>
  );
}

export default App;
