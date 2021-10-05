import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([])
  const [personajeSeleccionado, setPersonajeSeleccionado]= useState("")
  useEffect(() => {
    const getPersonajes = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character?page=1`)
        .then((res) => {
          setPersonajes(res.data.results);
          setPersonajeSeleccionado(res.data.results[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPersonajes()
  }, [])

  return (
    <div className="App">
      <div className="super">
        <h3 className="nameMain">{personajeSeleccionado.name}</h3>
        <img
          className="imgMain"
          src={personajeSeleccionado.image}
          alt={personajeSeleccionado.name}
        />
        <h3 className="nameMain">{personajeSeleccionado.status}</h3>
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
