import React from "react";
import NavBar from "./components/Navbar";
import './App.css';
import Hero from "./components/Hero";
import data from "./components/Data"

export default function App () {

  const cards = data.map(item => {
    return(
    <Hero key={item.id}
    {...item}/>
  )
})

  return (
    <div>
      <NavBar/>
      <section className="list">
        {cards}
      </section>
    </div>
  )
}