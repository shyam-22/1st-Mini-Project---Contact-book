import React from 'react'
import {useSelector} from "react-redux"
import ContactLayout from './ContactLayout';

const Contacts = () => {
    const contacts = useSelector(state => state.abc.contacts)
  return (
    <div>
      <table className="table shadow">
        <thead className="bg-danger text-white">  
          <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <label className="custom-control-label"></label>
                    <input type="checkbox" className="custom-control-input"/>
                </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
            {
                contacts.map((contact) => <ContactLayout contacts={contact} key={contact.id}/> )
            }        
        </tbody>
      </table>
    </div>
  );
};

export default Contacts
