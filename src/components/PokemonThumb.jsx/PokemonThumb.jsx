import React from 'react'
import './PokemonThumb.css'

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="number">#0{id}</div>
                <h3 id="pkmn-name">{name}</h3>
                <h4>Type: {type}</h4>
            <div className="detail-wrapper">
            </div>
        </div>
    )
}

export default PokemonThumb