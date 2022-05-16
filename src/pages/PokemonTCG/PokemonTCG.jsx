import './PokemonTCG.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function PokemonTCG() {
    useEffect(() => {
        Aos.init({duration: 1700});
    }, []);

    return (
        <div id="tcg-container">
            <br></br>
            <div>
                {/* <img src="https://www.dexerto.com/wp-content/uploads/2022/03/25/How-many-Pokemon-cards-are-there.jpg" id="tcg-banner"></img> */}
            </div>
            <div id="all-tcg">
                <div id="ar-container" data-aos="fade-right">
                    <img src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/swsh10/preview-cards/swsh10-preview-cards-1-169-en.jpg" id="Astral"></img>
                    <h2>Astral Radiance</h2>
                    <h5>Release Date: May 27, 2022</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-astral-radiance/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="bs-container" data-aos="fade-up">
                    <img src="https://www.dexerto.com/wp-content/uploads/2022/02/18/best-rarest-pokemon-cards-in-brilliant-stars-tcg-expansion.jpg" id="brilliant-stars"></img>
                    <h2>Brilliant Stars</h2>
                    <h5>Release Date: February 25, 2022</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-brilliant-stars/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="fs-container" data-aos="fade-left">
                    <img src="https://assets.pokemon.com/assets/cms2/img/trading-card-game/_tiles/strategy/swsh08/top-cards/swsh08-top-cards-169-en.jpg" id="fusion-strike"></img>
                    <h2>Fusion Strike</h2>
                    <h5>Release Date: November 12, 2021</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-fusion-strike/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="clb-container" data-aos="fade-right">
                    <img src="https://www.digitaltq.com/images/uploads/featured_image/pokemon_celebrations_all_products.png" id="celebrations"></img>
                    <h2>Celebrations</h2>
                    <h5>Release Date: October 8, 2021</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/celebrations/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="es-container" data-aos="fade-up">
                    <img src="https://poketouch.files.wordpress.com/2021/08/pokemon_tcg_sword_and_shield_evolving_skies_sylveon_vmax_rayquaza_vmax_umbreon_vmax.jpg?w=578" id="evolving-skies"></img>
                    <h2>Evolving Skies</h2>
                    <h5>Release Date: August 27, 2021</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-evolving-skies/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="chr-container" data-aos="fade-left">
                    <img src="https://cdn1.dotesports.com/wp-content/uploads/2021/05/19171343/E1xDN62X0AYhiCe-1.jpg" id="chilling-reign"></img>
                    <h2>Chilling Reign</h2>
                    <h5>Release Date: June 18, 2021</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-chilling-reign/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="battle-container" data-aos="fade-right">
                    <img src="https://assets.pokemon.com/assets/cms2/img/trading-card-game/_tiles/swsh05/featured-cards/swsh05-featured-cards-2-169-en.jpg" id="battle-styles"></img>
                    <h2>Battle Styles</h2>
                    <h5>Release Date: March 19, 2021</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-battle-styles/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="sh-container" data-aos="fade-up">
                    <img src="https://m.media-amazon.com/images/S/aplus-media/vc/37ee06a4-65d7-445d-9e3f-b9b8fc458794.__CR0,0,1940,1200_PT0_SX970_V1___.jpg" id="shining-fates"></img>
                    <h2>Shining Fates</h2>
                    <h5>Release Date: February 19, 2021</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/shining-fates/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="vv-container" data-aos="fade-left">
                    <img src="https://assets.pokemon.com/assets/cms2/img/trading-card-game/_tiles/swsh04/featured-cards/swsh04-featured-cards-2-169-en.jpg" id="vivid-voltage"></img>
                    <h2>Vivid Voltage</h2>
                    <h5>Release Date: November 13, 2020</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-vivid-voltage/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="cpath-container" data-aos="fade-right">
                    <img src="https://bleedingcool.com/wp-content/uploads/2021/09/EitJnbZXkAAvp2T-1-copy-92-18-1200x628.jpg" id="champs-path"></img>
                    <h2>Champion's Path</h2>
                    <h5>Release Date: September 25, 2020</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/champions-path/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="dab-container" data-aos="fade-up">
                    <img src="https://assets.pokemon.com/assets/cms2/img/trading-card-game/_tiles/strategy/swsh03/top-cards/swsh03-top-cards-169-en.jpg" id="dablaze"></img>
                    <h2>Darkness Ablaze</h2>
                    <h5>Release Date: August 14, 2020</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-darkness-ablaze/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="rebel-container" data-aos="fade-left">
                    <img src="https://www.phdgames.com/wp-content/uploads/elementor/thumbs/pokemon-sw-clash-vmax-featured-1-ot7emx9xs1so0fp2kzzz34ufdb9xh5uj22nggoq1rk.jpg" id="rebel-clash"></img>
                    <h2>Rebel Clash</h2>
                    <h5>Release Date: Mat 01, 2020</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield-rebel-clash/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="sands-container" data-aos="fade-right">
                    <img src="https://i0.wp.com/nintendosoup.com/wp-content/uploads/2020/01/tcg-swsh01-featured-cards-2-169-en.jpg?fit=578%2C327&ssl=1" id="sword-and-shield"></img>
                    <h2>Sword & Shield</h2>
                    <h5>Release Date: February 7, 2020</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sword-shield/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="clips-container" data-aos="fade-up">
                    <img src="https://poketouch.files.wordpress.com/2019/10/pokemon_tcg_sun_and_moon_cosmic_eclipse_red_and_blue_and_togepi_cleffa_igglybuff_gx.jpg?w=640" id="clips"></img>
                    <h2>Cosmic Eclipse</h2>
                    <h5>Release Date: November 01, 2019</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/sun-moon-cosmic-eclipse/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
                <div id="hidden-container" data-aos="fade-left">
                    <img src="https://assets.pokemon.com/assets/cms2-en-uk/img/trading-card-game/_tiles/sm115/shiny-vault/sm115-shiny-vault-explainer-169-en.jpg" id="hidden"></img>
                    <h2>Hidden Fates</h2>
                    <h5>Release Date: August 23, 2019</h5>
                    <a href='https://www.pokemon.com/us/pokemon-tcg/hidden-fates/explore-and-watch/' class="buy-button" target="_blank">Buy Now!</a>
                </div>
            </div>
        </div>
    )
}