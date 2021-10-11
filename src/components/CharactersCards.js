import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const CharactersCards = ({character, setCharacterTarget}) => {
  const change=()=>{
    window.scrollTo(0, 0);
    setCharacterTarget(character)
  }

  return (
    <div className="character">
      <Router>
        <Link to={`${character.name}`}>
        <img
          src={character.image}
          alt={character.name}
          onClick={() => change()}
          width="120px"
          className="imgGrid"
        />
        </Link>
      </Router>
    </div>
  );
};

export default CharactersCards