const CharactersCards = ({character, setCharacterTarget,key}) => {
  const changeCharacter = (character) => {
    setCharacterTarget(character);
  };
  return (
    <div className="character">
      <img
        src={character.image}
        alt={character.name}
        key={key}
        onClick={() => changeCharacter(character)}
        width="120px"
        className="imgGrid"
      />
    </div>
  );
};

export default CharactersCards