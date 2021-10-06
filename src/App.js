import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { ClipLoader, RingLoader } from "react-spinners";

const statusData = ["Chose status","All", "Alive", "Dead", "Unknown"];
const speciesData = [
  "Chose species",
  "All",
  "Alien",
  "Cronenberg",
  "Human",
  "Mythological Creature",
  "Poopybutthole",
  "Unknown",
];
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
      <div className="super">
        <h3 className="nameMain">Name: {characterTarget.name}</h3>
        {characterTarget ? (
          <img
            className="imgMain"
            src={characterTarget.image}
            alt={characterTarget.name}
            width="300px"
          />
        ) : (
          <ClipLoader color={"fff"} loading={"loading"} size={150} />
        )}

        <h3 className="nameMain">
          Status: {characterTarget.status} - - Species:{" "}
          {characterTarget.species}
        </h3>
      </div>
      <div className="grid">
        {characterTarget ? (
          character.map((character) => {
            return (
              <div className="character" key={character.id}>
                <img
                  src={character.image}
                  alt={character.name}
                  onClick={() => setCharacterTarget(character)}
                  width="120px"
                  className="imgGrid"
                />
              </div>
            );
          })
        ) : (
          <RingLoader />
        )}
      </div>
      <div className="page">
        <label className="back" onClick={() => setPage(page - 1)}>
          {page > 1 ? <label>&lt;</label> : null}
        </label>
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
        <label className="next" onClick={() => setPage(page + 1)}>
          &gt;
        </label>
      </div>
    </div>
  );
}

export default App;
