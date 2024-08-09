import {request, getJSON} from './api';

export async function createSession(username, password) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const params = {
        body: formData
    };
    
    return await getJSON(await request('/people/session', params, 'POST'));
}

export async function deleteSession() {
    return await request('/people/session', {}, 'DELETE');
}

export async function getSession() {
    return await getJSON(await request('/people/session'));
}

export async function getPerson(alias) {
    return await getJSON(await request(`/people/${alias}`));
}