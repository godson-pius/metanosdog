import { handleGetUser } from "../api"
const currentUser = JSON.parse(localStorage.getItem('user'));

export const getUser = async() => {
    if (currentUser.role == 'user') {
        const res = await handleGetUser(currentUser.email);
        const user = res.user[0]
        localStorage.setItem('user', JSON.stringify(user))

        return user;
    }
}