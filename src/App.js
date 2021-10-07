import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Super from "./components/Super";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import API from './services/api'

function App() {
  const [character, setCharacter] = useState([]);
  const [characterTarget, setCharacterTarget] = useState("");
  const [page, setPage] = useState(1);
  const [statusOption, setStatusOption] = useState("");
  const [speciesOption, setSpeciesOption] = useState("");
  document.title = `${characterTarget.name} | React Rick & Morty API`;

  useEffect(() => {
    const getcharacter = async () => {
      await axios
        .get(`${API}${page}&status=${statusOption}&species=${speciesOption}`)
        .then(({ data }) => {
          setCharacter(data.results);
          setCharacterTarget(data.results[0]);
        })
        .catch((err) => {
          setPage(1);
          console.log(err);
        });
    };
    getcharacter();
  }, [page, statusOption, speciesOption]);

  return (
    <div className="App">
      <Super characterTarget={characterTarget} />
      <Grid
        character={character}
        setCharacterTarget={setCharacterTarget}
        characterTarget={characterTarget}
      />
      <Footer
        setPage={setPage}
        page={page}
        statusOption={statusOption}
        setSpeciesOption={setSpeciesOption}
        setStatusOption={setStatusOption}
        setCharacterTarget={setCharacterTarget}
      />
    </div>
  );
}

export default App;
