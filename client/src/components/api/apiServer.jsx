import createApiServer from "./createApiServer";

const JwtToken = sessionStorage.getItem("Jwt_token"); // Replace with the actual session token value

const apiServer = createApiServer(JwtToken);

export default apiServer;