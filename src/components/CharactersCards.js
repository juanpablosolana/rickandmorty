const CharactersCards = ({character, setCharacterTarget}) => {

  return (
    <div className="character">
      <img
        src={character.image}
        alt={character.name}
        onClick={() => setCharacterTarget(character)}
        width="120px"
        className="imgGrid"
      />
    </div>
  );
};

export default CharactersCards