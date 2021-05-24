import axios from 'axios'
import Config from "../config/Config";
import AuthStorage from "./Auth-storage";
import {store} from "../store";

const apiClient = axios.create({
    baseURL: Config.apiUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

apiClient.interceptors.request.use(
    async (config: any) => {
        const token = await AuthStorage.getToken();

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error: any) => {
        Promise.reject(error)
    });

apiClient.interceptors.response.use(
    (response: any) => successHandler(response),
    (err: any) => errorHandler(err)
);


export default {
    get(path: string, params: any = {}) {
        return apiClient.get(`/${path}`, {params})
    },
    post(path: string, body: any) {
        return apiClient.post(`/${path}`, body);
    },
    postFormData(path: string, body: any) {
        return apiClient.post(`/${path}`, body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    put(path: string, body: any) {
        return apiClient.put(`/${path}`, body);
    },
    delete(path: string) {
        return apiClient.delete(`/${path}`);
    }
}

const errorHandler = (err: any) => {
    // console.log(err.response.status)
    console.warn(err)
    if (err.response.status === 401) {
        AuthStorage.removeToken().then(() => {
            store.dispatch({type: "AUTH/LOGOUT", payload: undefined})
        });
    }
    return Promise.reject(err);
};

const successHandler = (response: any) => {
    return response.data;
};

const responseFormData = (response: any) => {
    return response.data;
}