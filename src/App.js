import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import statusData from './services/statusData';
import speciesData from './services/speciesData';
import Super from './components/Super'
import Grid from './components/Grid'
const API = "https://rickandmortyapi.com/api/character?page=";

function App() {
  const [character, setCharacter] = useState([])
  const [characterTarget, setCharacterTarget]= useState("")
  const [page, setPage]=useState(1)
  const [statusOption, setStatusOption] = useState("");
  const [speciesOption, setSpeciesOption] = useState("")
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
          setPage(1)
          console.log(err);
        });
    };
    getcharacter();
  }, [page,statusOption,speciesOption])

  return (
    <div className="App">
      <Super characterTarget={characterTarget} />
      <Grid
        character={character}
        setCharacterTarget={setCharacterTarget}
        characterTarget={characterTarget}
      />

      <div className="page">
        <label className="back" onClick={() => setPage(page - 1)}>
          {page > 1 ? <label>&lt;</label> : null}
        </label>

        <select
          value={statusOption}
          name="select"
          onChange={(e) =>
            e.target.value.toLocaleLowerCase() === "all"
              ? setSpeciesOption("")
              : setSpeciesOption(e.target.value.toLocaleLowerCase())
          }
        >
          {speciesData.map((options) => {
            return (
              <option value={`${options}`} key={options}>
                {options}
              </option>
            );
          })}
        </select>
        <select
          value={statusOption}
          name="select"
          onChange={(e) =>
            e.target.value.toLocaleLowerCase() === "all"
              ? setStatusOption("")
              : setStatusOption(e.target.value.toLocaleLowerCase())
          }
        >
          {statusData.map((options) => {
            return (
              <option value={`${options}`} key={options}>
                {options}
              </option>
            );
          })}
        </select>
        <label className="next" onClick={() => setPage(page + 1)}>
          &gt;
        </label>
      </div>
    </div>
  );
}

export default App;
