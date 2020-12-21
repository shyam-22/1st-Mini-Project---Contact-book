import React, { useState,useEffect } from 'react'
import {getContact,updateContact} from "../../REDUX State/ACTIONS/action"
import {useHistory,useParams}from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"

const EditContact = () =>{
    let {id} = useParams();
    let history = useHistory()
    const dispatch = useDispatch()
    const contact = useSelector( (state) => state.abc.contact)
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState(""); 
    
    useEffect( ()=> {
        if(contact != null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    },[contact])

   const onUpdateContact = (e) => {
        e.preventDefault()
        const updatedContact = Object.assign(contact,{name:name, phone:phone, email:email}) 
        dispatch(updateContact(updatedContact))
        history.push("/")
    }

    return (
        <div className="shadow bg-fade">
            <div className="card-header bg-danger text-white">Add New Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Enter Your Name"
                        name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Enter Your Phone Number"
                        name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Enter Your Email Address"
                        name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>

                    <button type="submit" class="btn btn-warning" >Update Contact</button>
                </form>
            </div>
        </div>
    )
  }


export default EditContact;
