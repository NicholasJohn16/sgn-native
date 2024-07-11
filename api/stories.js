import {request, getJSON} from './api';


export async function getLeaderStories(start = 0, limit = 20) {
    const queryParams = new URLSearchParams({
        layout: 'list',
        filter: 'leaders',
        start,
        limit
    });

    return await getJSON(await request('/stories?' + queryParams.toString()));
}