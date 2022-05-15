import './AboutPage.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function AboutPage() {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, [])

    return (
        <div id="about-container">
            <section id="about-header">
                <img src="https://www.pngplay.com/wp-content/uploads/11/Mew-Pokemon-Transparent-Image.png" id="mew" data-aos="fade-right"></img>
                <h1 data-aos="fade-down">About</h1>
                <img src="https://static.wikia.nocookie.net/sonicpokemon/images/a/a7/Lugia.png/" id="lugia" data-aos="fade-left"></img>
            </section>
            <p id="about-section" data-aos="fade-down">Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator.
            Back in 1982 Satoshi started a gaming magazine together with his friends called Game Freak, but after a while he decided to start making his own video games, instead of writing about them.
            In 1989 Satoshi turned Game Freak into a gaming company, and together with his friends they released a few games such as Pulseman, Yoshi and Mario & Wario, which did pretty well.
            In the early 1990s, inspired by his childhood exploring forests and finding bugs and tadpoles, Satoshi came up with the idea for Pocket Monsters (or as it's better known Pokémon), and pitched it to Nintendo.
            </p>
            <br></br><br></br><br></br>
            <p id="about-section" data-aos="fade-down">
            Nintendo was a bit unsure about Pocket Monsters at first, but eventually accepted, and Satoshi spent the next six years working with legendary game maker Shigeru Miyamoto (the man behind Mario and The Legend of Zelda) to make Pocket Monsters a reality.
            On 27 February 1996, Pocket Monsters was released in a Red and Green version for the Gameboy, in Japan.
            The games were on a cartridge, and players could trade Pokémon using a cable to connect to each other's Gameboy.
            </p>
            <br></br><br></br><br></br>
            <p id="about-section" data-aos="fade-down">
            The games went on to sell millions of copies, and were later released to the US in 1998, and the UK a year later, as a Red and Blue version (instead of Green).
            The name was also shortened from Pocket Monsters to Pokémon.
            Since then, more generations of Pokémon games have been released, from Gold and Silver, to Ruby and Sapphire, Diamond and Pearl, Black and White, X and Y, Sun and Moon, and most recently to soon be released, Scarlet and Violet.
            With each new generation more Pokémon joined the games, in fact there are now around 1000 different species of Pokémon! (So it's going to take a long time to Catch 'Em All!)
            </p>
            <br></br><br></br><br></br>
            <p id="about-section" data-aos="fade-down">
            After the success of the first games, a company called Media Factory created the Pokémon Trading Card Game (or TCG for short).
            The first set of cards was released on October 20, 1996, containing 102 cards, with drawings by Ken Sugimori, Mitsuhiro Arita and Keiji Kinebuchi.
            The cards soon became very popular, and three years later in 1999, they were introduced to North America by Wizards of the Coast and shortly after the rest of the world.
            Pokémon card tournaments sprang up, where players could battle it out, and there is now even a world championship tournament.
            Since then, more than 30 billion cards have been printed, and some people will even pay hundreds of thousands of pounds for some of the more rare cards.
            </p>
            <br></br><br></br>
            <a href="https://www.bbc.co.uk/newsround/56167405" id="read-more" target="_blank">Read More Here!</a>
        </div>
    )
}