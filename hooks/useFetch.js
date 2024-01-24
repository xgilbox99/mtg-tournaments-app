import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params ) => {
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        axios.get( `${url}?q=Fable%20of` )
            .then( res => {
                setIsLoading(false);
                setData(res.data);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        
    }, [url] )

    return { data, isLoading, error };
}

export default useFetch;