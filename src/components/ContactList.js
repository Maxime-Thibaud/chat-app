import React from 'react';
import Contact from './Contact';

const contact = [
    {
        online: true,
        firstname: "Sarah",
        lastname: "McDonald",
        image: "https://randomuser.me/api/portraits/med/women/66.jpg"
    },
    {
        firstname: "Bob", 
        lastname: "Sanders",
        image: "https://randomuser.me/api/portraits/med/men/76.jpg"
    },
    {
        firstname: "Richard", 
        lastname: "Quick",
        image: "https://randomuser.me/api/portraits/med/men/75.jpg" 
    },
    {
        firstname: "Jean",
        lastname: "Guys",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
        online: true
    },
    {
        online: true,
        firstname: "Christopher", 
        lastname: "Subway",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  ];

const ContactList = () => (
    <div>
        {contact.map(item => (
            <Contact key={item.lastname} firstname={item.firstname} lastname={item.lastname} image={item.image} online={item.online} />
        ))}
    </div>
);

export default ContactList;

