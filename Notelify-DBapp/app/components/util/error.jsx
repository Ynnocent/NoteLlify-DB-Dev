import {FaExclamation} from 'react-icons/fa';

export default function Error({title, children}) {
    return(
        <div id='error-container'>
            <div id='error-div'>
            <div id='error-exclamation'>
                <FaExclamation/>
            </div>
            <h1>{title}</h1>
            {children}
        </div>
        </div>
        
    )
}

