import firebase from 'firebase'
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED'


export const changeName = (surname,name,patronymic) => ({
    type: CHANGE_NAME,
    payload: {
        surname: "Колотилова",
        name: "Надежда",
        patronymic: "Викторовна",
    },    
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})

export const addProfilToDatabase = (surname, name, patronymic) => {
    return () => {
        firebase.database().ref('profile').push({ surname, name, patronymic })
    }
}

export const subscribeOnProfilChangings = (surname, name, patronymic) => {
    return (dispatch, getState) => {
        firebase
            .database()
            .ref('profile')
            .child(surname, name, patronymic)
            .on('child_added', (snapshot) => {
                console.log('child_added', snapshot.val())
  
                dispatch(changeName(surname, name, patronymic, snapshot.val()))
            })
  
        firebase
            .database()
            .ref('profile')
            .child(surname, name, patronymic)
            .on('child_changed', (snapshot) => {
                console.log('child_changed', snapshot.val())
  
                dispatch(surname, name, patronymic(surname, name, patronymic, snapshot.val()))
            })
    }
  }

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
