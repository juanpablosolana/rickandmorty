import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    const getPersonajes = async () => {
      await axios.get(`https://rickandmortyapi.com/api/character`)
        .then(res => {
          setPersonajes(res.data.results)
        })
        .catch(err => {
          console.log(err);
        });
    }
    getPersonajes()
  }, [])
  return (
    <div className="App">

      {personajes.map(personaje => {
        return (
          <div className="personaje" key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <p>{personaje.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
