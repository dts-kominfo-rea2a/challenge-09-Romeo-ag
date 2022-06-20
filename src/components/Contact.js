// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./contact.css"
import React from 'react';

const Contact = ({data}) => {
    return (
        <>
        <div className='contact-container'>
        <div className='photo'><img src={data.photo} alt={data.photo}></img></div>
            <div className="detail">
            <div className='name'><p>{data.name}</p></div>
            <div className='phone'><p>{data.phone}</p></div>
            <div className='email'><p>{data.email}</p></div>        
            </div>            


        </div>
</>
    )
}

export default Contact;