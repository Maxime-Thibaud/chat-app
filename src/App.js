import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Contact image ="https://randomuser.me/api/portraits/med/men/75.jpg" name="Brad Gibson" online/>
      <Contact image ="https://randomuser.me/api/portraits/med/men/76.jpg" name="Bobby Summer"/>
      <Contact image ="https://randomuser.me/api/portraits/med/women/66.jpg" name="Sarah McDonald" online/>
    </div>
  );
}

export default App;
