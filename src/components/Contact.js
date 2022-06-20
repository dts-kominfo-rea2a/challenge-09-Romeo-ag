// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./contact.css"
import React from 'react';

const Contact = ({contacts}) => {
    return (
        <>
        <div className='contact'>
            <div className='photo'><img src={contacts.photo} alt={contacts.photo}></img></div>
            <div className="detail">
            <div className='name'><p>{contacts.name}</p></div>
            <div className='phone'><p>{contacts.phone}</p></div>
            <div className='email'><p>{contacts.email}</p></div>        
            </div>            
        </div>
</>
    )
}

export default Contact;