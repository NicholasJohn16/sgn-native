import { Platform } from 'react-native';
import * as Error from './errors';

export async function request(route, params = {}, method = 'GET') {
    const isWeb = Platform.OS === 'web';
    const apiURL = isWeb ? process.env.EXPO_PUBLIC_API_URL : process.env.EXPO_PUBLIC_NATIVE_API_URL;

    let options = {
        method,
        credentials: 'include',
        headers: {
            'accept': 'application/json'
        }
    };

    options = {...options, ...params}

    try {
        console.log('api.people.fetch');
        return fetch(apiURL + route, options);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function getJSON(response) {
    try {
        const text = await response.text();
        const json = JSON.parse(text);
       
        throwIfError(json);
        
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

function throwIfError(json) {
    if(json.code) {
        switch (json.code) {
            case 400:
                throw new Error.BadRequestError(json.message);
            case 401:
                throw new Error.UnauthorizedError(json.message);
            case 403:
                throw new Error.ForbiddenError(json.message);
            case 404:
                throw new Error.NotFoundError(json.message);
            case 405:
                throw new Error.MethodNotAllowed(json.message);
        }
            
    }
}