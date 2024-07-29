import { request, getJSON } from './api';
import { addComment, getComments } from './comments';

// filter=leader // only leader notes
// oid=1 // only owner id notes
export async function getNotes(params = {}) {
    const defaults = {
        sort: 'recent',
        start: 0,
        limit: 20
    };

    params = {...defaults, ...params};

    const queryParams = new URLSearchParams(params);
    
    // getMedium('/notes')
    return await getJSON(await request('/notes?' + queryParams.toString()));
}

export async function deleteNote(id) {
    return await request(`/notes/${id}`, {}, 'DELETE');
}

// export async function getLeaderNotes(params, start = 0, limit = 20)

export async function editNote(id, data) {
    const formData = new FormData();

    const params = {
        body: formData
    }

    return await request(`/notes/${id}`, params, 'POST');
}

export async function createNote(ownerId, data) {
    console.log(ownerId, 'ownerId');
    console.log(data, 'data');
    const formData = new FormData();

    formData.append('body', data.body);

    const params = {
        body: formData
    };

    return await request(`/notes/@${ownerId}/note`, params, 'POST');
}

export async function getNote(id) {
    console.log(id, 'getNote.id');
    return await getJSON(await request(`/notes/${id}`));
}

export async function addCommentToNote(noteId, body) {
    return addComment(`/notes/${noteId}`, body);
}

export async function getCommentsForNote(id) {
    return await getComments(`/notes/${id}`);
}