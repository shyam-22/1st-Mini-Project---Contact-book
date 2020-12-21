import React from 'react'
import Avatar from "react-avatar"
import {Link} from "react-router-dom"
import {deleteContact} from "../../REDUX State/ACTIONS/action"
import {useDispatch} from "react-redux"

const ContactLayout = ({contactData,selectAll}) => {
    const dispatch = useDispatch()
    const {name,phone,email,id} = contactData;
    return (
        <tr>
        <td><div className="custom-control custom-checkbox">
        <label checked={selectAll} className="custom-control-label"></label>
        <input type="checkbox" className="custom-control-input"/>
        </div></td>

        <td><Avatar className="mr-2" name={name} size="35" round={true}/>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td className="actions">
            <Link to={`/editContact/${id}`}  >
                <span className="material-icons mr-3">edit</span>
            </Link>
            <Link to="#" >
                <span className="material-icons" onClick={()=> dispatch(deleteContact(id))}>delete</span>
            </Link>
        </td>
      </tr>
    )
}

export default ContactLayout;

//material-icon cdn
//<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
