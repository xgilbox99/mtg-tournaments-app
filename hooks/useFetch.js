import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, params) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      if (params) {
        axios.get(`${url}?q=${params}`)
          .then(res => {
            setIsLoading(false);
            setData(res.data);
            setError(null);
          })
          .catch(err => {
            setIsLoading(false);
            setError(err.message);
          })
      }
    }, [url, params]
  )

  return {data, isLoading, error};
}

export default useFetch;