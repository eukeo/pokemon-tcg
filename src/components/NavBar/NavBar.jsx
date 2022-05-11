import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    return (
        <>
        <div id="banner-container">
        <img src="https://crystal-cdn2.crystalcommerce.com/photos/6330565/splashBanner_pokemon.jpg" id="banner"></img>
        </div>
            <nav>
                <ul>
                    {/* <span> Welcome, &nbsp;{user.name}! </span> */}
                    &nbsp; &nbsp;
                    <Link to="/" id="home">Home</Link>
                    &nbsp; &nbsp;
                    <Link to="/pokemontcg" id="tcg">Trading Cards</Link>
                    &nbsp; &nbsp;
                    <Link to="/pokedex" id="pokedex">Pokédex</Link>
                    &nbsp; &nbsp;
                    <Link to="/memorylane" id="memory-lane">Memory Lane</Link>
                    &nbsp; &nbsp;
                    <Link to="/about" id="about">About</Link>
                    &nbsp; &nbsp;
                    <Link to="" onClick={handleLogOut} id="logout">Log Out</Link>
                </ul>
            </nav>
        </>
    )
}