import axios from "axios";

const apiRequest = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export default apiRequest;
