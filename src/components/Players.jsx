import { useState } from "react";

export default function Players({symbol, initialName, isActive, onPlayer}){
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName)

    function handleEditing(){
        setIsEditing((prevIsEditing) => !prevIsEditing);
        if(isEditing){
            onPlayer(symbol, playerName);
        }
    }

    function handleChange(event){
        let value = event.target.value;
        setPlayerName((prevPlayerName) => value);
    }

    return (
        <li className={`player ${isActive && 'active'}`}>
            <span className="player">
                {!isEditing ?
                (<span className="player-name">{playerName}</span>) :
                (<input type="text" onChange={handleChange} value={playerName} />)
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    )
}