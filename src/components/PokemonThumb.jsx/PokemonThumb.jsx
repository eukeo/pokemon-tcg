
import './PokemonThumb.css'

const PokemonThumb = ({id, image, name, type, weight, height, encounters, _callback }) => {
    const style = type + " thumb-container";
    return (
            <div className={style}>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h3 id="pkmn-name">{name}</h3>
                <h4 className="number">#0{id}</h4>
                    <h5 class="pkmn-details">Type: {type}</h5>
                    <h5 class="pkmn-details">Weight: {weight}lb</h5>
                    <h5 class="pkmn-details">Height: {height}"</h5>
                </div>
            </div>
    )
}

export default PokemonThumb