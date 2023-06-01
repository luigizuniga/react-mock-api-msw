import React , { useState, useEffect } from 'react';

export const App = () => {
    const [ data, setData ] = useState([]);
     
    useEffect(() => {
        fetch('/api/data').then( resp => resp.json()).then( data => setData(data))
    },[]);


    return (
        <div>
            <p>{ data ? JSON.stringify(data) : 'Loading....'}</p>
        </div>
    )
}
