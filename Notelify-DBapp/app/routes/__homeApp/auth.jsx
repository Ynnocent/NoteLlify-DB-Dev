import { redirect } from "@remix-run/node";
import AuthForm from "../../components/auth/authform";
import { login, signup } from "../../data/auth.server";
import { validateCredentials } from "../../data/validation.server";
export default function AuthPage() {
    return( 
        <>
        <section>
        <div className="auth-div">
            <div id="auth-form">
             <AuthForm/>
            </div>
        </div>
        </section>
        
        
        </>
    )
}

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';

    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    
    try {
        console.log(credentials)
        validateCredentials(credentials);
    } catch (error) {
        return error;
    }

    try {
        if (authMode === 'login') {
            return await login(credentials);
        } else if (authMode === 'signup'){
            console.log(authMode)
            return await signup(credentials);
            
        }        
    } catch (error) {
        if (error.status === 422) {
            return {credentials: error.message}
        }
        
        else if (error.status === 401) {
            return {credentials: error.message}
        }
    }

}