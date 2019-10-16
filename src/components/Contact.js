import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online : props.online,
        };   
    }
 
render() {
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.image} alt={this.props.name}/>
            <div>
                <h5 className="name">{this.props.firstname} {this.props.lastname.toUpperCase()}</h5>
                <div className="status">
                    <div className={this.state.online ? "status-online" : "status-offline"}> 
                    </div>
                    <p onClick={event => {
                        const newOnline= !this.state.online;
                        this.setState({ online : newOnline})}} 
                        className="status-text">{this.state.online ? 'Online' : 'Offline'} </p>
                </div>
            </div>
        </div>
    )
}
}

    
export default Contact;