const CharactersCards = ({character, setCharacterTarget}) => {
  const changeCharacter = (character) => {
    setCharacterTarget(character);
  };
  return (
    <div className="character">
      <img
        src={character.image}
        alt={character.name}
        onClick={() => changeCharacter(character)}
        width="120px"
        className="imgGrid"
      />
    </div>
  );
};

export default CharactersCards