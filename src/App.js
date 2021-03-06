import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Super from "./components/Super";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import API from './services/api'
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
ReactGA.initialize('G-MLYWMQXC19');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [character, setCharacter] = useState([]);
  const [characterTarget, setCharacterTarget] = useState("");
  const [page, setPage] = useState(1);
  const [statusOption, setStatusOption] = useState("");
  const [speciesOption, setSpeciesOption] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0);

    const getcharacter = async () => {
      await axios
        .get(`${API}${page}&status=${statusOption}&species=${speciesOption}`)
        .then(({ data }) => {
          setCharacter(data.results);
          setCharacterTarget(data.results[0]);
        })
        .catch(({response}) => {
          response.request.responseURL.includes('poopybutthole') ? setStatusOption("") && setPage(1) : setPage(1);

        });
    };
    getcharacter();
  }, [page, statusOption, speciesOption]);

  return (

    <div className="App" id="top">
      <Helmet>
        <title>{`${characterTarget.name || "React Rick & Morty API"} | React Rick & Morty API`}</title>
        <meta name="description" content={` ${characterTarget.name || "React Rick & Morty API | Pablo Solana"}`}/>
      </Helmet>

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
