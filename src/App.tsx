import React from 'react'; 
import "./App.css"
import Header from "./layout/Header"
import Main from './layout/Main';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex flex-col md:flex-row'>
        <NavBar />
        <Main />
      </div>
    </div>
  )
}

export default App;
