import { NavLink, Link, useLoaderData,Form } from "@remix-run/react";
import logo from '../../logo/logo90x90.png';
export default function NoteNav() {
    const userId = useLoaderData();
    return(
        <nav id="note-nav">
            <Link to={"/"}><img src={logo} id="nav-logo" alt="Notelify Logo" /></Link>
            <ul>
            <li>
                {!userId && 
                    <Form method="post" action="/logout" id="logout-form">
                        <button className="logout-btn">Logout</button>
                    </Form> }
                    </li>
                <li> <button className="note-nav-button"><NavLink to={"/quotes"}>Quotes</NavLink></button> </li>
                <li> <button className="note-nav-button"><NavLink to={"/notes"}>Notes</NavLink></button> </li>
            </ul>
        </nav>
    )
}