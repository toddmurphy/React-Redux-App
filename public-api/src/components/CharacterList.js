import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    return(
        <div>
            <h1>Breaking Bad Characters</h1>
            {props.characters.map((character) => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </div>
    )
}

export default CharacterList;