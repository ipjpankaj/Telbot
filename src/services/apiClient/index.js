import axios from 'axios';

async function apiClient(url, options) {
    try {
        const res = await axios(url, options);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { apiClient };