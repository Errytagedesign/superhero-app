import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import HerosIndex from "./pages/HerosIndex";
import HerosShow from "./pages/HerosShow";
import { Route, Routes } from "react-router-dom";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch(
          `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}/search/batman`,
          { headers: { "Access-Control-Allow-Origin": "*", Accept: "*/*", "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"} }
        );
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.log("No data from API:", error);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <div className="App">
      <Nav />
      <h1>Superhero App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero-index" element={<HerosIndex />} />
        <Route path="/powerstats">
          <Route path="symbol" element={<HerosShow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
