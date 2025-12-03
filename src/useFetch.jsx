import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useFetch(url) {

  const {id} = useParams();
  const [data, setData] = useState();     // always an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setData(null);
        setLoading(false);
      });
  }, [url]);

  return [data, loading];    
}
