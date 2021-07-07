import React from 'react';

const CharacterCard = (props) => {
    console.log(props)
    const { name, nickname } = props.character;
    return (
        <div>
            <p>{name}</p>
            <p>{nickname}</p>
        </div>
    )
}

export default CharacterCard;