import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import ContactLayout from './ContactLayout';
import {selectAllContact,removeAllContact,deleteAllContact} from "../../REDUX State/ACTIONS/action"
//import shortid from "shortid"
const Contacts = () => {
  const [selectAll,setSelectAll] = useState(false)
  const dispatch = useDispatch()
    const contacts = useSelector(state => state.abc.contacts)
    const selectedContacts = useSelector(state => state.abc.selectedContacts)
  useEffect(()=> {
    if(selectAll){
      dispatch(selectAllContact(contacts.map((contact) => contact.id)))
    }
    else{
      dispatch(removeAllContact())
    }
  },[selectAll])
  return (   
    <div>
      {
        selectedContacts.length > 1 
        ? (<button type="button" class="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())}>Delete All</button>)
        : null
      }
      <table className="table shadow">
        <thead className="bg-danger text-white">  
          <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <label htmlFor="selectAll" className="custom-control-label"></label>
                    <input type="checkbox" id="selectAll" className="custom-control-input"
                      value={selectAll}  onClick={()=> {setSelectAll(!selectAll)}}/>
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
                contacts.map((contact) => <ContactLayout contactData={contact} selectAll={selectAll} key={contact.id}/> )
            }        
        </tbody>
      </table>
    </div>
  );
};

export default Contacts
