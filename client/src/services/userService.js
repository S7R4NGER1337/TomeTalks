import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (data) => {
    const result = await request.post(`${baseUrl}/login`, data);

    return result;
};

export const register = async (data) => {
    const result = request.post(`${baseUrl}/register`, data)


    return result
}