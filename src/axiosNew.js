import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://global-news-backend.herokuapp.com'
    }
);
export default instance;