import { CHANGE_IS_ONLINE, CHANGE_NAME } from './actions'

const initialState = {
    surname: "",
    name: "",
    patronymic: "",    
    viewCheckbox: false,    
}


export default function reducer(state = initialState, action) {
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
        default:
            return state
    }
}
