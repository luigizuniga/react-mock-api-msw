import { useCallback, useState } from "react";

export const Form = () => {
    const [ userData, setUserData ] = useState([]);
    const [ username , setUserName ] = useState('Luigi');

    const handleFormSubmit = useCallback(
        ( event )=>{
            event.preventDefault();
            // fetch('/login')
            console.log(event)
        }
    );

    return (
        <form onSubmit={ handleFormSubmit }>
            <div>
                <label htmlFor="username">User name:</label>
                <input 
                    id="username"
                    name="username"
                    value={ username }
                    onChange={ ()=>({})}
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
    // return ()
}