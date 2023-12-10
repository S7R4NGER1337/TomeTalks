import * as request from '../lib/requester';


export const CreateBooks = async (data) => {

    const result = await request.post('http://localhost:3030/data/books', data)

    return result
}

export const GetAllBooks = async () => {

    const book = await request.get('http://localhost:3030/data/books')

    return book
}