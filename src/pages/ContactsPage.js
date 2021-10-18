import React from 'react'
import { FaRegClock, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaGlobe, FaAlignRight } from 'react-icons/fa';
import {contacts} from '../data/contacts'
import background from '../assets/contact_img.jpg';
import {ButtonScrollToTop} from '../components'

const ContactsPage = () => {
    const style = {
        backgroundImage: `linear-gradient(105deg, 
            rgba(255,255,255, .9) 0%,
            rgba(255,255,255, .9) 50%,
            rgba(0,0,0,0.5) 50%) ,url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maxWidth: '1170px',
        margin: '0px auto',
        padding: '4rem 4rem',
        borderRadius: '4px',
        backgroundPosition: 'right'
    }
    return (
        <>
        <section className="contacts_wrapper">
            <section style={style} >
                <div className="contacts_info">
                    <h3 className="contacts_title">{contacts.title}</h3>
                    <div className="contacts_details">
                        <div className="contact_detail">
                            <p><FaPhoneAlt className="contact_icon"/><span> Téléphone: </span></p>
                            <p>{contacts.phone}</p>
                        </div>

                        <div className="contact_detail">
                            <p><FaRegClock className="contact_icon"/><span>Heures: </span></p>
                            <p>{contacts.hours}</p>
                        </div>

                        <div className="contact_detail">
                            <p><FaGlobe className="contact_icon"/><span>Site Web: </span></p>
                            <p>{contacts.url}</p>
                        </div>

                        <div className="contact_detail">
                            <p><FaMapMarkerAlt className="contact_icon"/><span>Emplacement: </span></p>
                            <p>{contacts.location}</p>
                        </div>

                        <div className="contact_detail">
                            <p><FaMailBulk className="contact_icon"/><span>Boîte postale</span></p>
                            <p>{contacts.po_box}</p>
                        </div>

                    </div>
                    
                </div>
            </section>
        </section>
        <ButtonScrollToTop />
        </>
    )
}

export default ContactsPage
