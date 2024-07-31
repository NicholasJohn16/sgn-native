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
    console.log('api.people.deleteSession');
    return await request('/people/session', {}, 'DELETE');
}

export async function getSession() {
    console.log('api.people.getSession');
    return await getJSON(await request('/people/session'));
}

export async function getPerson(alias) {
    return await getJSON(await request(`/people/${alias}`));
}