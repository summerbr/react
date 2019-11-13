import React from 'react';
import './App.css';
import Menu from './Menu';
import Post from './Post';
import Comment from './Comment';

function App() {
  return (
    <div className="App">
      <Menu />
      <Post />
      <Comment />
    </div>
  );
}

export default App;