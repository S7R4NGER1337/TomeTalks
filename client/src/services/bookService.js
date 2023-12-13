import * as request from '../lib/requester';


export const CreateBooks = async (data) => {

    const result = await request.post('http://localhost:3030/data/books', data)

    return result
}

export const GetAllBooks = async () => {
    const books = await request.get('http://localhost:3030/data/books')

    return books
}

export const GetBookById = async (id) => {
    const book = await request.get(`http://localhost:3030/data/books?_id=${id}`)

    return book
}