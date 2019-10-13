import React from 'react';
import './Contact.css';


const Contact = props => 
    <div className="Contact">
        <img className="avatar" src={props.image} alt={props.name}/>
        <div>
            <h5 className="name">{props.firstname} {props.lastname.toUpperCase()}</h5>
            <div className="status">
                <div className= {props.online ? "status-online" : "status-offline"} /> 
                <p className="status-text">{props.online ? 'Online' : 'Offline'} </p>
            </div>
        </div>
    </div>
    

export default Contact;