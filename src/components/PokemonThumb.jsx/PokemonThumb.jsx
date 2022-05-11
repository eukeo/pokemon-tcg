import React from 'react'

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="number">#0{id}</div>
                <h3>{name}</h3>
            <div className="detail-wrapper">
            </div>
        </div>
    )
}

export default PokemonThumb