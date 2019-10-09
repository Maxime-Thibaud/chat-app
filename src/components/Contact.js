import React from 'react';
import './Contact.css';


const Contact = props => 
    <div className="Contact">
        <img className="avatar" src={props.image} alt={props.name}/>
        <div>
            <h5 className="name">{props.name}</h5>
            <div className="status">
                <div>{props.online ? <div className="status-online" /> : <div className="status-offline" /> }</div>
                <p className="status-text">{props.online ? 'Online' : 'Offline'} </p>
            </div>
            
        </div>
    </div>
    

export default Contact;