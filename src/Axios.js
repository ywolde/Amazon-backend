import axios from "axios";

const instance = axios.create({

  baseURL: " https://us-central1-fir-51fd4.cloudfunctions.net/app",
});

export default instance;