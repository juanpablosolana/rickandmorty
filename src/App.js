import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { ClipLoader, RingLoader } from "react-spinners";

const filterData = ["All", "Alive", "Dead", "Unknown"];
const API = "https://rickandmortyapi.com/api/character?page=";

function App() {
  const [character, setCharacter] = useState([])
  const [characterTarget, setCharacterTarget]= useState("")
  const [page, setPage]=useState(1)
  const [selectedOption, setSelectedOption] = useState("");
  document.title = `${characterTarget.name} | React Rick & Morty API`;
  useEffect(() => {
    const getcharacter = async () => {
      await axios
        .get(`${API}${page}&status=${selectedOption}`)
        .then(({ data }) => {
          setCharacter(data.results);
          setCharacterTarget(data.results[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getcharacter();
  }, [page,selectedOption])

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
          Status: {characterTarget.status} - - Specie: {characterTarget.species}
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
          {page>1?<label>&lt;</label>:null}
        </label>
        <select
          value={selectedOption}
          name="select"
          onChange={(e) =>
            e.target.value.toLocaleLowerCase() === "all"
              ? setSelectedOption("")
              : setSelectedOption(e.target.value.toLocaleLowerCase())
          }
        >
          {filterData.map((options) => {
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
