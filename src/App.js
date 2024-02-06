import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './Home';
import Rewards from "./Rewards";
import Menu from "./Menu";
import SingIn from "./SingIn";
import JoinNow from "./JoinNow";
import DrinksPage from "./DrinksPage";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rewards" element={<Rewards/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/:id" element={<DrinksPage/>}/>
        <Route path="/singIn" element={<SingIn/>}/>
        <Route path="/joinNow" element={<JoinNow/>}/>
      </Routes>
    </div>
  );
}

export default App;
