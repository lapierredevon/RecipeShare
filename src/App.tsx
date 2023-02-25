import React from 'react'; 
import "./App.css"
import Header from "./layout/Header"
import Main from './layout/Main';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className=' flex flex-col md:flex-row md:h-screen'>
        <div className='bg-amber-200  h-24 w-full md:w-1/6 md:h-full'>
          <NavBar /> 
        </div>
        <div className=' w-full md:w-5/6'>
           <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
