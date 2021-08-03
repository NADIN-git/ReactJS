export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'

export const changeName = (surname,name,patronymic) => ({
    type: CHANGE_NAME,
    payload: {
        surname,
        name,
        patronymic,
    },    
})

export const changeNameWithThunk = (surname,name,patronymic) => {
    return (dispatch, getState) => {
        console.log(getState())

        setTimeout(() => {
            dispatch(changeName(surname,name,patronymic))
        }, 1000)
    }
}


export const changeViewCheckbox = (viewCheckbox) => ({   
    type: CHANGE_IS_ONLINE,
    payload: {
        viewCheckbox,
    },
})

export const changeViewCheckboxWithThunk = (viewCheckbox) => {
    return (dispatch, getState) => {
        console.log(getState())

        setTimeout(() => {
            dispatch(changeViewCheckbox(viewCheckbox))
        }, 1000)
    }
}
