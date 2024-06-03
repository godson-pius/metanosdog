import { handleGetUser } from "../api"
const currentUser = JSON.parse(localStorage.getItem('user'));

export const getUser = async() => {
    if (currentUser.role == 'user') {
        const res = await handleGetUser(currentUser.email);
        localStorage.setItem('user', JSON.stringify(res.user[0]))
    }
}