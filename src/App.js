import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([])
  const [personajeSeleccionado, setPersonajeSeleccionado]= useState("")
  const [page, setPage]=useState(1)
  useEffect(() => {
    if(page<1){setPage(1)}
    const getPersonajes = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((res) => {
          setPersonajes(res.data.results);
          setPersonajeSeleccionado(res.data.results[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPersonajes()
  }, [page])

  return (
    <div className="App">
      <div className="super">
        <h3 className="nameMain">Name: {personajeSeleccionado.name}</h3>
        <img
          className="imgMain"
          src={personajeSeleccionado.image}
          alt={personajeSeleccionado.name}
        />
        <h3 className="nameMain">Status: {personajeSeleccionado.status}</h3>
      </div>
      <div className="grid">
        {personajes.map((personaje) => {
          return (
            <div className="personaje" key={personaje.id}>
              <img
                src={personaje.image}
                alt={personaje.name}
                onClick={() => setPersonajeSeleccionado(personaje)}
                width="100px"
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
          onClick={() => setPage(page + 1)}
        >
          <g data-name="Layer 2">
            <path d="M19 26a1 1 0 01-.71-.29 1 1 0 010-1.42l8.3-8.29-8.3-8.29a1 1 0 011.42-1.42l9 9a1 1 0 010 1.42l-9 9A1 1 0 0119 26z" />
            <path d="M28 17H4a1 1 0 010-2h24a1 1 0 010 2z" />
          </g>
          <path fill="none" d="M0 0h32v32H0z" />
        </svg>
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
      </div>
    </div>
  );
}

export default App;
