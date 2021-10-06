import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
const API = "https://rickandmortyapi.com/api/character?page=";

function App() {
  const [character, setCharacter] = useState([])
  const [characterTarget, setCharacterTarget]= useState("")
  const [page, setPage]=useState(1)
  document.title = `${characterTarget.name} | React Rick & Morty API`;
  useEffect(() => {
    /* ** API: only this endpoints   ** */
    if (page < 1) {
      setPage(34);
    } else if (page > 34) {
      setPage(1);
    }
    const getcharacter = async () => {
      await axios
        .get(`${API}${page}`)
        .then(({ data }) => {
          setCharacter(data.results);
          setCharacterTarget(data.results[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getcharacter();
  }, [page])

  return (
    <div className="App">
      <div className="super">
        <h3 className="nameMain">Name: {characterTarget.name}</h3>
        <img
          className="imgMain"
          src={characterTarget.image}
          alt={characterTarget.name}
          width="300px"
        />
        <h3 className="nameMain">
          Status: {characterTarget.status} - - Specie: {characterTarget.species}
        </h3>
      </div>
      <div className="grid">
        {character.map((character) => {
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
        })}
      </div>
      <div className="page">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setPage(page - 1)}
        >
          <g data-name="Layer 2">
            <path d="M13 26a1 1 0 01-.71-.29l-9-9a1 1 0 010-1.42l9-9a1 1 0 111.42 1.42L5.41 16l8.3 8.29a1 1 0 010 1.42A1 1 0 0113 26z" />
            <path d="M28 17H4a1 1 0 010-2h24a1 1 0 010 2z" />
          </g>
          <path fill="none" d="M0 0h32v32H0z" />
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setPage(page + 1)}
        >
          <g data-name="Layer 2">
            <path d="M19 26a1 1 0 01-.71-.29 1 1 0 010-1.42l8.3-8.29-8.3-8.29a1 1 0 011.42-1.42l9 9a1 1 0 010 1.42l-9 9A1 1 0 0119 26z" />
            <path d="M28 17H4a1 1 0 010-2h24a1 1 0 010 2z" />
          </g>
          <path fill="none" d="M0 0h32v32H0z" />
        </svg>
      </div>
    </div>
  );
}

export default App;
