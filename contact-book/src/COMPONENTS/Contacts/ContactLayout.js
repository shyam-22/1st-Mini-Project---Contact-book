import React from 'react'
import Avatar from "react-avatar"
import {Link} from "react-router-dom"


const ContactLayout = ({contacts}) => {
    const {name,phone,email} = contacts;
    return (
        <tr>
        <td><div className="custom-control custom-checkbox">
        <label className="custom-control-label"></label>
        <input type="checkbox" className="custom-control-input"/>
        </div></td>

        <td><Avatar className="mr-2" name={name} size="35" round={true} />{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td className="actions">
            <a href="#" >
                <span className="material-icons mr-3">edit</span>
            </a>
            <a href="#" >
                <span className="material-icons">delete</span>
            </a>
        </td>
      </tr>
    )
}

export default ContactLayout;
