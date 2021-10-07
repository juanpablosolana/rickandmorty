import { RingLoader } from "react-spinners";
import CharactersCards from "./CharactersCards";

const Grid = ({ character, setCharacterTarget, characterTarget }) => {

  return (
    <div className="grid">
      {characterTarget ? (
        character.map((character) => {
          return (
            <CharactersCards
              character={character}
              setCharacterTarget={setCharacterTarget}
              key={character.id}
            />
          );
        })
      ) : (
        <RingLoader />
      )}
    </div>
  );
};

export default Grid