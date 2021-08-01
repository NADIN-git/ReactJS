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

export const changeViewCheckbox = (viewCheckbox) => ({   
    type: CHANGE_IS_ONLINE,
    payload: {
        viewCheckbox,
    },
})
