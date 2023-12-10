import { get } from "../lib/requester";

export function login(email, password){
    const userData = get('users/login', {email, password})

    console.log(userData);
}