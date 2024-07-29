import {request, getJSON} from './api';

const defaults = {
    start: 0,
    limit: 20,
    // component: "com_notes"
}

export async function getLeaderStories(params = defaults) {
    params = {...defaults, ...params, filter: 'leaders'};

    return await getStories(params);

    // const queryParams = new URLSearchParams({
    //     filter: 'leaders',
    //     start,
    //     limit
    // });

    // return await getJSON(await request('/stories?' + queryParams.toString()));
}

export async function getStories(params = defaults) {

    params = {...defaults, ...params};

    const queryParams = new URLSearchParams(params);

    return await getJSON(await request('/stories?' + queryParams.toString()));
}