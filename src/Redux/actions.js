import { todoActionTypes } from "./types";
 
export const addPost = (text, id) => ({
    type: todoActionTypes.ADDPOST,
    payload: {
        post: text,
        id
    }
})
export const postUpdate = (text, id) => ({
    type: todoActionTypes.POSTUPDATE,
    payload: {
        post: text,
        id
    }
})
export const postDelite = (id) => ({
    type: todoActionTypes.POSTDELITE,
    payload: {

        id
    }
})
export const postLoad = () => {
    return async dispatch => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const jsonData = await response.json();
            dispatch({
                type: todoActionTypes.POSTLOAD,
                payload: {
                    data: jsonData
                }
            })
        } catch (err) {
            alert(`Sorry${err}`)
        }
    }
}