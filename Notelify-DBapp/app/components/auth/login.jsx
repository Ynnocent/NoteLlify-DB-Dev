import { Form } from "@remix-run/react";

export default function LoginForm() {
    return(
        <>
            <Form method="post" id="login-form">
                <p>
                    <label htmlFor="username"> Username: </label>
                    <input type="text" required></input>
                </p>
                <p>
                    <label htmlFor="passord"> Password: </label>
                    <input type="password" required></input>
                </p>
                <button className="login-btn">Login</button>
            </Form>
            
            <button className="create-btn">Create New Account</button>
        </>
    )
}