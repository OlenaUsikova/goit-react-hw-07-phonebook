import React from "react";
import {StyledInput} from '../addForm/AddForm.styled'
import { setFilter } from "Redux/contactsSlice";
import { useDispatch } from "react-redux";

export const FindContactForm = () => {
  const dispatch = useDispatch();
  
const onChangeFind = ev => {
  dispatch(setFilter(ev.currentTarget.value.toLowerCase()));
};
    return (
        <>
        <h3>Find contacts by name</h3>
        <StyledInput type = "text"
          onChange={onChangeFind}/>
        </>
    )
}

