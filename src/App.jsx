import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import CartItem from './components/CartItem';
import TodoList from './components/TodoList';
import UsersDirectory from './components/UsersDirectory';
import './App.css'


function App() {

  return (
    <>
    {/* <Header /> */}
     {/*<About />
    <Footer /> */}
        {/* <div className="app">
      <CartItem productName="لابتوب" price={1200} />
      <CartItem productName="سماعة" price={150} />
     </div> */}

   {/* <TodoList /> */}

<div className="app">
   <UsersDirectory />
    </div>



    </>
  );
}

export default App
