import React from 'react';
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { changeViewCheckbox } from '../../store/profile/actions'
import { changeName } from '../../store/profile/actions'
import { getProfile } from "../../store/profile/selectors";

const Profile = (props) => {

  const dispatch = useDispatch()

  const { surname, name, patronymic, viewCheckbox } = useSelector(getProfile);

  const handleViewCheckbox = (event) => {
    dispatch(changeViewCheckbox(event.target.checked))
    //dispatch(changeViewCheckboxWithThunk(event.target.checked))
    if (event.target.checked) {
      dispatch(changeName("Колотилова", "Надежда", "Викторовна"))
    }
    else {
      dispatch(changeName(""))
    }
  }

  return (
    <div>
      <p className="centre">Профиль</p>
      <div className="Menu_chat">
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
          label={<p>Показать параметры</p>}
        />
      </div>
    </div>
  );
}

export default Profile;
