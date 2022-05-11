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
        <img src="https://crystal-cdn2.crystalcommerce.com/photos/6330565/splashBanner_pokemon.jpg" id="banner"></img>
            <nav>
                <span> Welcome, &nbsp;{user.name}! </span>
                &nbsp; &nbsp;
                <Link to="/">Home</Link>
                &nbsp; &nbsp;
                <Link to="/pokemontcg">Trading Cards</Link>
                &nbsp; &nbsp;
                <Link to="/pokedex">Pokédex</Link>
                &nbsp; &nbsp;
                <Link to="/memorylane">Memory Lane</Link>
                &nbsp; &nbsp;
                <Link to="/about">About</Link>
                &nbsp; &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        </>
    )
}