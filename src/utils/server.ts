import axios from 'axios';

// export const API_URL = 'http://192.168.2.252:50001/api/v0/';
// export const API_URL: string = 'https://jsonplaceholder.typicode.com';
export const API_URL: string = 'http://localhost:8001/api/v0';

export default axios.create({ baseURL: API_URL });
