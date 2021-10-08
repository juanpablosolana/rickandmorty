const CharactersCards = ({character, setCharacterTarget}) => {

  const change=()=>{
    window.scrollTo(0, 0);
    setCharacterTarget(character)
  }

  return (
    <div className="character">
      <img
        src={character.image}
        alt={character.name}
        onClick={() => change()}
        width="120px"
        className="imgGrid"
      />
    </div>
  );
};

export default CharactersCards