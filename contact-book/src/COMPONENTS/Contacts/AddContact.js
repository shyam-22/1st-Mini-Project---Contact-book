import React, { Component } from 'react'
import {addContact} from "../../REDUX State/ACTIONS/action"
import {connect} from "react-redux"
import shortid from "shortid" 
import {history}from "react-router-dom"

class AddContact extends Component {
    constructor(){
        super()
        this.state={
            id : "",
            name:"",
            phone:"",
            email:""
        }
    }
    handleChange = (e) =>{
        this.setState( {[e.target.name] : [e.target.value]})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const newContactList = {id: shortid.generate(), name : this.state.name, phone:this.state.phone, email:this.state.email}
        this.props.handleSubmit(newContactList)
        this.props.history.push("/")
    }
    render(){        
    return (
        <div className="shadow bg-fade">
            <div className="card-header bg-danger text-white">Add New Contact</div>
            <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Enter Your Name"
                        name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Enter Your Phone Number"
                        name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Enter Your Email Address"
                        name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <button type="submit" class="btn btn-primary" 
                        onClick={(e) => {this.handleSubmit(e)} }>Create Contact</button>
                </form>
            </div>
        </div>
    )
  }
}
const mapDispatchToProps = dispatch =>({
    handleSubmit : data => dispatch(addContact(data)),
}) 

export default connect(null,mapDispatchToProps)(AddContact)
