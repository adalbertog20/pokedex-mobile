import axios from "axios";

const useApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export { useApi };
