import { useState } from "react"

export default function Players({initialName, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditing(){
        setIsEditing((editing) => !editing)
    }

    function handleChange(event){
        let value = event.target.value
        setPlayerName(() => value);
    }
    
    return (
        <li className={`player ${isActive && 'active'}`}>
            <span className="player">
                    {!isEditing ? (
                    <span className="player-name">{playerName}</span>
                    ) : <input type='text' onChange={handleChange} value={playerName} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    )
}