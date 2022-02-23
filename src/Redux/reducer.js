import { todoActionTypes } from "./types"

const initialState = {
    post: []
}

export const ReducerText = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.ADDPOST:
            return {
                ...state,
                post: [action.payload,...state.post]
            }
            case todoActionTypes.POSTLOAD:
                const commentsNew = action.payload.data.map(res=>{
                    return {
                        post:res.title,
                        id:res.id
                    }
                })
                return {
                    ...state,
                    post: commentsNew
                }
        case todoActionTypes.POSTUPDATE:
            const { payload } = action;
            const { post } = state;
            const itemIndex = post.findIndex(res => res.id === payload.id)

            const nextConents = [
                ...post.slice(0, itemIndex),
                payload,
                ...post.slice(itemIndex + 1)
            ];
            return {
                ...state,
                post: nextConents
            }
        case todoActionTypes.POSTDELITE:
            return (() => {
                const { payload } = action;
                const { post } = state;
                const itemIndex = post.findIndex(res => res.id === payload.id)

                const nextConents = [
                    ...post.slice(0, itemIndex),
                    ...post.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    post: nextConents
                }
            })()

        default:
            return state
    }
}