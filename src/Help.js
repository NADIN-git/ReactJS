const initialState = {
  viewCheckbox: false
}
export default (state = initialState, action) => {
    switch (action.type){
        case 'VIEW_CHECKBOX':
            return {
                ...state
                if (viewCheckbox == false) {
                    viewCheckbox: true
                } else {
                    viewCheckbox: false
                }
            }
        default:
            return: state
    }
}



const mapDispatchToProps = (dispatch) => ({
  handleViewCheckbox: id => ev => {
    dispatch(viewCheckboxSubmit(id, ev.target.checked))
  }
})




<FormControlLabel
    control={
        <Checkbox
            checked={checkedView}
            onChange={handleViewCheckbox(n.id,checkedView)}
         />
     }
     label='See'
/>


case 'VIEW_CHECKBOX':
   return {
       ...state,
       viewCheckbox: !viewCheckbox
   }



   {
    checkboxid1: false,
    checkboxid2: false,
    checkboxid3: true  // checked
  }


  checked={this.props.isChecked[n.id]}