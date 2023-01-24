import "./MemoryLane.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MemoryLane() {
  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  return (
    <div id="timeline-container">
      <div id="inner-container">
        <div class="content" data-aos="fade-right" id="ranb">
          <img
            src="https://c.tenor.com/xldX1gSDw4sAAAAd/pokemon-pokemon-red.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Red & Blue (1997)</h3>
          <h5>Platform: Gameboy Color</h5>
        </div>
        <div class="content" data-aos="fade-up" id="yellow">
          <img
            src="https://i0.wp.com/superchartisland.com/wp-content/uploads/2020/10/pywalk.gif?resize=400%2C360&ssl=1"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Yellow (1998)</h3>
          <h5>Platform: Gameboy Color</h5>
        </div>
        <div class="content" data-aos="fade-left" id="gands">
          <img src="https://i.gifer.com/WP3s.gif" id="pokemon-game"></img>
          <h3>Pokémon Gold & Silver (2000)</h3>
          <h5>Platform: Gameboy Color</h5>
        </div>
        <div class="content" data-aos="fade-right" id="crystal">
          <img
            src="https://thumbs.gfycat.com/FittingHealthyAmericanwigeon-size_restricted.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Crystal (2001)</h3>
          <h5>Platform: Gameboy Color</h5>
        </div>
        <div class="content" data-aos="fade-up" id="rands">
          <img
            src="https://i.pinimg.com/originals/f4/2c/96/f42c96cb3282ee1ec72c414576f695c6.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Ruby & Sapphire (2002)</h3>
          <h5>Platform: Gameboy Advance</h5>
        </div>
        <div class="content" data-aos="fade-left" id="frlg">
          <img
            src="https://c.tenor.com/wj-MSRM26WEAAAAC/pokemon-fire-red.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Fire Red & Leaf Green (2004)</h3>
          <h5>Platform: Gameboy Advance</h5>
        </div>
        <div class="content" data-aos="fade-right" id="emmy">
          <img
            src="https://camo.githubusercontent.com/4b255d99c220c53537c59818cc9176b898e8de7244027d152dc8129bb412aaae/68747470733a2f2f692e696d6775722e636f6d2f69736749524c442e676966"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Emerald (2004)</h3>
          <h5>Platform: Gameboy Advance</h5>
        </div>
        <div class="content" data-aos="fade-up">
          <img
            src="https://c.tenor.com/6FdLVSnnUWMAAAAd/pokemon-pokemon-diamond.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Diamond & Pearl (2006)</h3>
          <h5>Platform: Nintendo DS</h5>
        </div>
        <div class="content" data-aos="fade-left">
          <img
            src="https://thumbs.gfycat.com/UnripeDescriptiveBasilisk-max-1mb.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Platinum (2008)</h3>
          <h5>Platform: Nintendo DS</h5>
        </div>
        <div class="content" data-aos="fade-right">
          <img
            src="https://31.media.tumblr.com/b46639af6a4cd7654feda93aa0429308/tumblr_mromilJb081rv6iido1_500.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Heart Gold & Soul Silver (2009)</h3>
          <h5>Platform: Nintendo DS</h5>
        </div>
        <div class="content" data-aos="fade-up" id="baw">
          <img
            src="https://images.hive.blog/p/B69zEhWZA8UCHxjagwibdXCLMYNxrPY6YRrJip9MJrz1rjPicCHTMRBcf6gsXqcT1FgT4H8uE8JQb7vsMzZgAC6sHAJxCFdfgZPrjH6d?format=match&mode=fit"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Black & White (2011)</h3>
          <h5>Platform: Nintendo DS</h5>
        </div>
        <div class="content" data-aos="fade-left">
          <img
            src="https://24.media.tumblr.com/tumblr_mbsj3nB9nV1r3ifxzo1_500.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Black 2 & White 2 (2012)</h3>
          <h5>Platform: Nintendo DS</h5>
        </div>
        <div class="content" data-aos="fade-right" id="xandy">
          <img
            src="https://abload.de/img/benchsitr8sn8.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon X & Y (2013)</h3>
          <h5>Platform: Nintendo 3DS</h5>
        </div>
        <div class="content" data-aos="fade-up">
          <img
            src="https://64.media.tumblr.com/a9d6d7566d0c01ed467065a4ee51833e/tumblr_o9ixg2BZGH1u3e4cro1_r1_540.gifv"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Omega Ruby & Alpha Sapphire (2014)</h3>
          <h5>Platform: Nintendo 3DS</h5>
        </div>
        <div class="content" data-aos="fade-left" id="sandm">
          <img
            src="https://64.media.tumblr.com/4881625f7021b0fc956e36bbf4546ed8/tumblr_ouvz4gkIFW1v68t0mo1_540.gifv"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Sun & Moon (2016)</h3>
          <h5>Platform: Nintendo 3DS</h5>
        </div>
        <div class="content" data-aos="fade-right">
          <img
            src="https://64.media.tumblr.com/06cfe9a364aa89a6e0679c0953e3da4e/tumblr_ow8tobNnhQ1r8sc3ro1_540.gifv"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Ultra Sun & Ultra Moon (2017)</h3>
          <h5>Platform: Nintendo 3DS</h5>
        </div>
        <div class="content" data-aos="fade-up">
          <img
            src="https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/strategy/lets-go/starters-guide/inline/05.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Let's Go Pikachu! & Let's Go Eevee! (2018)</h3>
          <h5>Platform: Nintendo Switch</h5>
        </div>
        <div class="content" data-aos="fade-left" id="sands">
          <img
            src="https://i0.wp.com/www.imore.com/sites/imore.com/files/field/image/2019/11/pokemon-sword-shield-get-rich-quick.gif?resize=360%2C202&ssl=1"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Sword & Shield (2019)</h3>
          <h5>Platform: Nintendo Switch</h5>
        </div>
        <div class="content" data-aos="fade-right">
          <img
            src="https://64.media.tumblr.com/ceafe1b1381e9dd33f53f08a57f915b8/1dbcb090920dcb7b-df/s540x810/b6794fe39f49650153b24f95a0f1a1055b3caa85.gifv"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Brilliant Diamond & Shining Pearl (2021)</h3>
          <h5>Platform: Nintendo Switch</h5>
        </div>
        <div class="content" data-aos="fade-up">
          <img
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/strategy/legends-arceus/outbreaks/inline/05.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon Legends: Arceus (2022)</h3>
          <h5>Platform: Nintendo Switch</h5>
        </div>
        <div class="content" data-aos="fade-left">
          <img
            src="https://64.media.tumblr.com/50c19085b8d39c902f0ef31da6ec6dc1/49d29e84abece4c2-63/s540x810/d5e48508fca1850014e5141a5aad64e95f483451.gif"
            id="pokemon-game"
          ></img>
          <h3>Pokémon: Scarlet & Violet (2022)</h3>
          <h5>Platform: Nintendo Switch</h5>
        </div>
      </div>
    </div>
  );
}
