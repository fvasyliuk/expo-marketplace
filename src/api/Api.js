import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import SocketApi from './SocketApi';

const baseUrl = 'https://apiko-marketplace-api-2019.herokuapp.com';

const urls = {
    login: `${baseUrl}/auth/login`,
    register: `${baseUrl}/auth/register`,
    getViewer: `${baseUrl}/account/user`,
    productsLatest: `${baseUrl}/products/latest`,
    add: `${baseUrl}/products`,
    image: `${baseUrl}/upload/images`,
    products: `${baseUrl}/products`,
    users: `${baseUrl}/users`,
    chats: `${baseUrl}/chats`,
    saved: `${baseUrl}/products/saved`,
    search: `${baseUrl}/products/search`,
};

export const Auth = {
    _token: null,

    get isLoggedIn() {
        return !!this._token;
    },

    setToken(token) {        
        this._token = token;

        this._storeToken(token);
        
        this._setTokenToAxios(token);        
    },

    async init() {
        try {
            const token = await SecureStore.getItemAsync('token');
            this._token = token;            
            this._setTokenToAxios(token);            
            SocketApi.init(this._token);
            return token;
        } catch (err) {
            console.error(err);
        }
    },

    login(body) {
        return axios.post(urls.login, body)       
    },

    register(body) {
        return axios.post(urls.register, body)       
    },

    async logout() {
        this._token = null;
        try {
            await SecureStore.deleteItemAsync('token');
        } catch (err) {
            console.error(err);        }
        this._setTokenToAxios(null);
    },
    _storeToken(token) {
        try {
            SecureStore.setItemAsync('token', token);
        } catch (err) {
            console.error(err);
        } 
    },
    _setTokenToAxios(token) {        
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;          
    }
};

export const Viewer = {
    async get() {      
        await SecureStore.getItemAsync('token')
        return axios.get(urls.getViewer)
    }
};

export const Products = {
    getLatest({ offset = 0, limit = 20 }) {
        return axios.get(urls.productsLatest, {
            params: {
                offset,
                limit,
            },
        });
    },
    add(body) {
        return axios.post(urls.add, body);
    },
    get(id) {
        return axios.get(`${urls.products}/${id}`);
    },
    getUserProducts(id) {
        return axios.get(`${urls.users}/${id}/products`);
    },
    save(productId) {
        return axios.post(`${urls.products}/${productId}/save`)
    },
    unsave(productId) {
        return axios.post(`${urls.products}/${productId}/unsave`)
    },
    getSaved() {
        return axios.get(urls.saved);
    },
    search(params) {
        return axios.get(
            urls.search, 
            { params: {                
                offset: 0,
                limit: 20,
                ...params
            }}
        );
    },
};

export const Images = {
    upload(file) {
        console.log('file', file);
        const fd = new FormData();
        fd.append('image', {
            uri: file.uri,
            type: 'image/jpeg',
            name: 'photo', 
        });
        return axios.post(urls.image, fd);
    }
}

export const Chats = {
    createChat(productId) {
        return axios.post(`${urls.products}/${productId}/createChat`)
    },
    fetch() {
        return axios.get(urls.chats);
    }
}

export const Messages = {
    sendMessage(chatId, text) {
        return axios.post(`${urls.chats}/${chatId}/messages`, { text });
    },
    fetchMessages(chatId) {
        return axios.get(`${urls.chats}/${chatId}/messages`);
    }
} 
export const Users = {
    get(id) {
        return axios.get(`${urls.users}/${id}`)
    },
}
export function init() {
    return Auth.init();
};