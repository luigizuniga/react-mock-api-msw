import React , { useState, useEffect } from 'react';

import { Form } from './components/Form/Form';

export const App = () => {
    const [ data, setData ] = useState([]);
     
    useEffect(() => {
        fetch('/api/data').then( resp => resp.json()).then( data => setData(data))
    },[]);

    return (
        <div>
            <Form/>
            {/* // Example api/data response */}
            {/* <p>{ data ? JSON.stringify(data) : 'Loading....'}</p> */}
        </div>
    )
}
