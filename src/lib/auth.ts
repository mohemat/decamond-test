import {RandomUser} from "@/types/user";

export const login = (userData: RandomUser) => {
    localStorage.setItem("name", `${userData.name.title} ${userData.name.first} ${userData.name.last}`)
    localStorage.setItem("email", userData.email)
    localStorage.setItem("picture", userData.picture.thumbnail)
}

export const logout = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("picture")
}

export const isUserLoggedIn = (): boolean => {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const picture = localStorage.getItem("picture")

    return !!(name && email && picture)
}

export const getUser = () => {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const picture = localStorage.getItem("picture")

    return {
        name,
        email,
        picture
    }
}