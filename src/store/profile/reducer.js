import { CHANGE_IS_AUTHED, CHANGE_IS_ONLINE, CHANGE_NAME } from './Actions'

const initialState = {
    surname: "",
    name: "",
    patronymic: "",
    viewCheckbox: false,
    isAuthed: false,
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                surname: action.payload.surname,
                name: action.payload.name,
                patronymic: action.payload.patronymic,
            }
        }
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                viewCheckbox: action.payload.viewCheckbox,
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed,
            }
        }
        default:
            return state
    }
}
