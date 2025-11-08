import axios from 'axios';

async function apiClient(url, options) {
    try {
        const res = await axios(url, options);
        console.log("response", res.data);
        return res.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error:', error.response.status, error.response.data);
            return error.response.data;
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Network Error:', error.request);
            return null;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
            return null;
        }
    }
}

export { apiClient };