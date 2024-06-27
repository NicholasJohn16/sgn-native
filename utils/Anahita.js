
async function request(route, params = {}, method = 'GET') {
    const apiURL = process.env.EXPO_PUBLIC_API_URL;

    let options = {
        method,
        credentials: 'include',
        headers: {
            'accept': 'application/json'
        }
    };

    options = {...options, ...params}

    const response = await fetch(apiURL + route, options);

    return response.json();
}

export function createSession(username, password) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const params = {
        body: formData
    };

    return request('/people/session', params, 'POST');
}

export function deleteSession() {
    return request('/people/session', {}, 'DELETE');
}

export function getSession() {
    return request('/people/session');
}