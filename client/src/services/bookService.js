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
    const books = await request.get(`http://localhost:3030/data/books?_id=${id}`)

    const book = books.find(book => book._id == id)
    return book
}

export const PostComment = async (commentData) =>  {
    const comment = await request.post('http://localhost:3030/data/comments', commentData)

    return comment
}

export const getComments = async (id) => {
    const allComments = await request.get(`http://localhost:3030/data/comments?location=${id}`)

    const comments = allComments.filter(comments => comments.location == id)
    console.log(comments);
    return comments
}