import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import PokemonTCG from "../PokemonTCG/PokemonTCG";
import MemoryLane from "../MemoryLane/MemoryLane";
import AboutPage from "../AboutPage/AboutPage";
import PokedexPage from "../PokedexPage/PokedexPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemontcg" element={<PokemonTCG />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/memorylane" element={<MemoryLane />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </>
    </main>
  );
}
