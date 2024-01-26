import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, params, isParamsRequired = false, method = "GET" ) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      
      const paramsCheck = ( !isParamsRequired || ( isParamsRequired && Object.keys(params).length > 0 ) )

      if( paramsCheck ){

        let paramsUrl = url
        
        if( method == "GET" ){
          paramsUrl = `${url}?${new URLSearchParams(params)}`

          axios.get(paramsUrl)
            .then(res => {
              setIsLoading(false);
              setData(res.data);
              setError(null);
            })
            .catch(err => {
              setIsLoading(false);
              setError(err.message);
            })

        }else{

          axios.post(paramsUrl, params )
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
      }
    }, [url, params]
  )

  return {data, isLoading, error};
}

export default useFetch;