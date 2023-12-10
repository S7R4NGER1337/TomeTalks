import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (data) => {
    const result = await request.post(`${baseUrl}/login`, data);

    console.log(result);
    return result;
};