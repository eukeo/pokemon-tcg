import "./HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="home-container">
      <br></br>
      <div id="info-container">
        <div id="comingsoon-container" data-aos="fade-right">
          <img
            src="https://i0.wp.com/www.vooks.net/img/2022/02/pokemon-scarlet-violet.jpg?fit=1000%2C562&ssl=1"
            id="comingsoon"
          ></img>
          <h2>New Release!</h2>
          <p>
            Various towns blend seamlessly into the wilderness with no borders.
            You’ll be able to see the Pokémon of this region in the skies, in
            the seas, in the forests, on the streets—all over! You’ll be able to
            experience the true joy of the Pokémon series—battling against wild
            Pokémon in order to catch them—now in an open-world game that
            players of any age can enjoy.
          </p>
        </div>
        <div id="sandv-container" data-aos="fade-up">
          <iframe
            width="420"
            height="172"
            src="https://www.youtube.com/embed/MAmueMsFR1o?autoplay=1&mute=1"
            id="sandv-video"
          ></iframe>
          <h2>Scarlet & Violet: Trailer</h2>
          <p>
            The Pokémon Scarlet and Pokémon Violet games, the newest chapters in
            the Pokémon series, are coming to Nintendo Switch later this year.
            With these new titles, the Pokémon series takes a new evolutionary
            step, allowing you to explore freely in a richly expressed open
            world.
          </p>
        </div>
        <div id="start-container" data-aos="fade-left">
          <img
            src="https://www.well-played.com.au/wp-content/uploads/2022/02/POkemon-Gen-9-e1645999960828.jpeg"
            id="start"
          ></img>
          <h2>Your New Starters!</h2>
          <p>
            <span>Sprigatito:</span> OvergrowThe capricious, attention-seeking
            Grass Cat Pokémon.
          </p>
          <p>
            <span>Fuecoco:</span> BlazeThe laid-back Fire Croc Pokémon that does
            things at its own pace.
          </p>
          <p>
            <span>Quaxly:</span> The earnest and tidy Duckling Pokémon.
          </p>
        </div>
        <div id="unite-container" data-aos="fade-right">
          <img
            src="https://assets.mspimages.in/wp-content/uploads/2021/08/pjimage-2021-08-19T104651.644.jpg"
            id="unite-pic"
          ></img>
          <h2>Pokémon Unite</h2>
          <p>
            Pokémon Unite is a free-to-play, multiplayer online battle arena
            video game developed by TiMi Studio Group and published by The
            Pokémon Company for Android and iOS and by Nintendo for the Nintendo
            Switch. It was announced in a Pokémon Presents presentation on 24
            June 2020.
          </p>
        </div>
        <div id="yt-container" data-aos="fade-up">
          <iframe
            width="420"
            height="172"
            src="https://www.youtube.com/embed/AKN4zY2x_ao?autoplay=1&mute=1"
            id="yt-video"
          ></iframe>
          <h2>Pokkén Tournament DX</h2>
          <p>
            Pokkén Tournament is a fighting game developed by Bandai Namco
            Entertainment. The game combines gameplay elements from Bandai
            Namco's Tekken series and other fighting games, such as 3D and 2D
            movement, with characters from the Pokémon franchise.
          </p>
        </div>
        <div id="champ-container" data-aos="fade-left">
          <img
            src="https://i.ytimg.com/vi/KtcjrWHCFN0/maxresdefault.jpg"
            id="champs"
          ></img>
          <h2>Pokémon World Championships</h2>
          <p>
            The Pokémon World Championships is an invite-only esports event
            organized by The Pokémon Company. It is held annually in August and
            features games from the Pokémon series such as the Pokémon video
            games, Pokémon Trading Card Game, Pokkén Tournament, Pokémon Unite
            and Pokémon Go.
          </p>
        </div>
        <div id="lavender-container" data-aos="fade-right">
          <img
            src="https://pa1.narvii.com/6270/865d2f1314513d77a7ac9134cc0707911176df20_hq.gif"
            id="lavender-town"
          ></img>
          <h2>Lavender Town Syndrome</h2>
          <p>
            A creepypasta named "Lavender Town Syndrome" first spawned in the
            early 2010s as another work of internet horror fiction. According to
            the narrative, more than 200 Japanese children between the ages of 7
            and 12, were driven to suicide by an eerie, high-pitched frequency
            encoded in the town's theme music in the spring of 1996. The more
            fortunate children suffered from headaches, nosebleeds, and
            irrationally violent behavior.
          </p>
        </div>
        <div id="go-container" data-aos="fade-up">
          <img
            src="https://venturebeat.com/wp-content/uploads/2018/12/pokemon-go-art-3.jpg?w=1200&strip=all"
            id="go-pic"
          ></img>
          <h2>Pokémon Go</h2>
          <p>
            Pokémon Go is a 2016 augmented reality mobile game, part of the
            Pokémon franchise, developed and published by Niantic in
            collaboration with Nintendo and The Pokémon Company for iOS and
            Android devices.
          </p>
        </div>
        <div id="hisuian-container" data-aos="fade-left">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/_tiles/hisuian-snow/announce/pokemon-hisuian-snow-169-en.jpg"
            id="hisuian"
          ></img>
          <h2>Pokémon: Hisuian Snow on Pokémon TV and YouTube</h2>
          <p>
            Pokémon: Hisuian Snow tells the story of a boy named Alec and his
            encounter with a Hisuian Zorua. When he was younger, Alec's father
            taught him that people and Pokémon cannot live together. But Alec's
            interactions with the Zorua might offer a different lesson.
          </p>
        </div>
        <div id="pkmn-tcg-container" data-aos="fade-right">
          <img
            src="https://tcg.pokemon.com/assets/img/home/whats-new/en-us/tcg-sv01-announce-169-en.jpg"
            id="pkmn-tcg"
          ></img>
          <h2>Pokémon Trading Cards</h2>
          <p>
            The Pokémon Trading Card Game, abbreviated to PTCG or Pokémon TCG,
            is a collectible card game based on the Pokémon franchise. It was
            first published in October 1996 by Media Factory in Japan.
          </p>
        </div>
        <div id="legends-container" data-aos="fade-up">
          <iframe
            width="420"
            height="172"
            src="https://www.youtube.com/embed/CUhP8-uA5vc?autoplay=1&mute=1"
            id="yt-video"
          ></iframe>
          <h2>Pokémon Legends: Arceus</h2>
          <p>
            Pokémon Legends: Arceus is a 2022 action role-playing game developed
            by Game Freak and published by Nintendo and The Pokémon Company for
            the Nintendo Switch.
          </p>
        </div>
        <div id="evo-container" data-aos="fade-left">
          <iframe
            width="420"
            height="174"
            src="https://www.youtube.com/embed/bBMg3NCtXOQ?autoplay=1&mute=1"
            id="evo-video"
          ></iframe>
          <h2>The Evolution of Pokémon</h2>
          <p>
            From 1996 to 2022, Pokémon has continued to elevate their animations
            with each new release. Take a blast to the past with this nostalgic
            video showcasing all animations from the start of it all.
          </p>
        </div>
      </div>
    </div>
  );
}
