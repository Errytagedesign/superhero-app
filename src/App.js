import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BreweriesIndex from "./pages/BreweriesIndex";
import BreweriesShow from "./pages/BreweriesShow";
import { Route, Routes } from "react-router-dom";

function App() {
  const [breweries, setBreweries] = useState([]);
console.log(breweries)
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/v1/breweries?per_page=20`,
        );
        const data = await response.json();
        setBreweries(data)
      } catch (error) {
        console.log("No data from API:", error);
      }
    };
    fetchBreweries();
  }, []);

  return (
    <div className="App">
      <Nav />
      <h1>Breweries Buddy</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BreweriesIndex" element={<BreweriesIndex />} />
        <Route path="/powerstats">
          <Route path="symbol" element={<BreweriesShow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
