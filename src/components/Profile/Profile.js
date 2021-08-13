import React from 'react';
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { changeViewCheckbox } from '../../store/profile/actions'
import { changeName, addProfilToDatabase, subscribeOnProfilChangings } from '../../store/profile/actions'
import { getProfile } from "../../store/profile/selectors";

const Profile = (props) => {

  const { surname, name, patronymic, viewCheckbox } = useSelector(getProfile);

  const dispatch = useDispatch()

  const handleViewCheckbox = (event,surname, name, patronymic) => {
    dispatch(changeViewCheckbox(event.target.checked))
    dispatch(changeName(event.target.surname, name, patronymic))
    //dispatch(changeViewCheckboxWithThunk(event.target.checked))
    if (event.target.checked) {
      dispatch(addProfilToDatabase("Колотилова", "Надежда", "Викторовна"))
    }
    else {
      dispatch(changeName(""))
    }
  }

  return (
    <div className="centre">
      <div>

        <p>Профиль</p>
        <div className="Message_border Left_right">
          <p>
            <b>Фамилия: </b>
            {surname}
          </p>
          <p>
            <b>Имя: </b>
            {name}
          </p>
          <p>
            <b>Отчество: </b>
            {patronymic}
          </p>
          <FormControlLabel
            control={
              <Checkbox
                checked={viewCheckbox}
                onChange={handleViewCheckbox}
              />
            }
            label={<p>Сохранить параметры в базу</p>}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
