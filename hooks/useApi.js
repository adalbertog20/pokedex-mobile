import axios from "axios";
import { useState, useEffect } from "react";

const useApi = (sendEndpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endpoint, setEndpoint] = useState(sendEndpoint);
  const url = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${url}${endpoint}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    if (sendEndpoint) {
      fetchData();
    }
  }, [sendEndpoint]);

  const refresh = () => {
    setEndpoint(endpoint);
  };

  return { data, loading, error, refresh };
};

export default useApi;
