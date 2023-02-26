import { NavLink, Link, useLoaderData, Form } from "@remix-run/react";
import logo from '../../logo/logo90x90.png'

export default function MainNav() {

    const userId = useLoaderData();
    return(
        <nav id="main-nav">
            <div id="main-nav-div">
                <Link to={"/"}><img src={logo} id="nav-logo" alt="Notelify Logo" /></Link>
                
                   <ul className="main-ul">
                        <li>
                            {userId && 
                                <Form method="post" action="/logout" id="logout-form">
                                    <button className="logout-btn">Logout</button>
                                </Form> }
                            {!userId && (<button className="button-main-nav"><NavLink to={"/auth"}>Log In</NavLink></button>)}
                              </li>
                        <li><button className="button-main-nav"><NavLink to={"/about"}>About Me</NavLink></button>  </li>
                    </ul>
            </div>
            
        </nav>
    )
}