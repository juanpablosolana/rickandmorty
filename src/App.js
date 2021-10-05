import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';

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
      <img className="imgMain" src={personajeSeleccionado.image} alt={personajeSeleccionado.name} />
      <h3 className="nameMain">{personajeSeleccionado.name}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "row",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Carousel
          plugins={[
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {personajes.map((personaje) => {
            return (
              <div className="personaje" key={personaje.id}>
                <img
                  src={personaje.image}
                  alt={personaje.name}
                  onClick={() => setPersonajeSeleccionado(personaje)}
                />
                <div></div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
