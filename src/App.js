import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, comedy,  Horror, Orginals, romance } from './urls'

function App() {
  return (
    <div className="App">
         
        <NavBar/>    
        <Banner/>  
        <RowPost url = {Orginals} title ="Netflix Orginals"/> 
        <RowPost url = {Horror} title = "Horror" isSmall /> 
        <RowPost url = {action} title = "Action" isSmall />
        <RowPost url = {comedy} title = "Comedy" isSmall />
         <RowPost url = {romance} title = "Romance" isSmall /> 

    </div>
  );

}

export default App;
