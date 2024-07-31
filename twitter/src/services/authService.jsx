import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/'

const getCsrfToken = () => {
    return axios.get(API_URL + 'csrf/').then(response => {
        axios.defaults.headers.post['X-CSRFToken'] = response.data.csrfToken;
    });
};

const register = (username, password) => {
    console.log({ username, password });  // 
    return axios.post(API_URL + 'register/', {
        username,
        password,
    });
};

const login = (username, password) => {
    return axios.post(API_URL + 'login/', {
        username,
        password,
    }).then(response => {
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    login: async (username, password) => {
        const response = await apiClient.post('/login/', { username, password });
        // Make sure the response contains the username
        return {
            username: response.data.username, // Ensure the username is included
            access: response.data.access,
            refresh: response.data.refresh
        };
    },
    
    logout: () => {
        // Handle logout
    }
};


export default {
    register,
    login,
    logout,
    authService,
};
