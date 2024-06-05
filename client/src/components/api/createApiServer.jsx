import axios from "axios";

const createApiServer = (JwtToken) => {
  const apiServer = axios.create({
    baseURL: "http://127.0.0.1:3000", // Replace with your Rails API server URL
  });

  if (JwtToken) {
    apiServer.defaults.headers.common['Authorization'] = 'Bearer ' + JwtToken;
  }

  return apiServer;
};

export default createApiServer;