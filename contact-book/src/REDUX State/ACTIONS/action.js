//rxa
import { CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,CLEAR_CONTACT
  ,SELECT_CONTACT,DELETE_SELECTED_CONTACT} from "../CONSTANT/constant";

export const addContact = (contact) => {
    return {
      type : CREATE_CONTACT,
      payload : contact
    }
  } 

//Get a Contact on Id basis

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload:id
})

//Update a contact on ID basis
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload:contact,
})

//delete a contact on id basis
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id
})

//Select all contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload:id
})

//CLEAR All contact at a time
export const removeAllContact = () => ({
  type: CLEAR_CONTACT,
})

//Delete All selected contact
export const deleteAllContact = () => ({
  type: DELETE_SELECTED_CONTACT,
})





