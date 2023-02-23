import { NavLink, Link } from "@remix-run/react";
import logo from '../../logo/logo90x90.png';
export default function NoteNav() {
    return(
        <nav id="note-nav">
            <Link to={"/"}><img src={logo} id="nav-logo" alt="Notelify Logo" /></Link>
            <ul>
                <li> <NavLink to={"/quotes"}>Quotes</NavLink> </li>
                <li> <NavLink to={"/notes"}>Notes</NavLink> </li>
            </ul>
        </nav>
    )
}