import { useEffect, useRef, useState } from "react";
import axios from "axios";

const useGet = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
          setState({data:null, loading:true, error:null});
          const response = await axios.get(url);
          const { data } = response;
          setState({data, loading:false, error:null});
      } catch (error) {
          setState({data:null, loading:false, error:'error al cargar la data'}) 
      }
    };
    if(isMounted.current){
        getData();
    }
  }, [url]);

  return state;
};

export default useGet;
