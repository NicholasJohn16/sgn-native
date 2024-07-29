// request is made to the nodes resource
// with the action = addcomment and a text as body
// in a formdata object
import { request, getJSON } from './api';

export async function addComment(route, body) {
    const formData = new FormData();

    formData.append('action', 'addcomment');
    formData.append('body', body);

    const params = {
        body: formData
    };

    return await getJSON(await request(route, params, 'POST'));
}

export async function getComments(route, params) {
    return await getJSON(await (request(`${route}/comments?sort=newest`)));
}