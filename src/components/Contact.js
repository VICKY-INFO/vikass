import '../css/contact.css'
import Image from './Image';

import gmail from '../imgs/gmail.svg'
import linkedin from '../imgs/linkedin.png'

function Contact() {

    const contactHead = <h1>contact</h1>
    const contactP = <p className='get'>Get in Touch</p>


    return (
        <section id='contact' className="contact-container">
            {contactHead}
            {contactP}

            <div className='contact-links'>

                <a target='_blank' className='gmail-container' title='Gmail' href='mailto:vikasvikki2000@gmail.com'>
                    <Image src={gmail} alt='Gmail' />
                    vikasvikki2000@gmail.com
                </a>

                <a target='_blank' className='linkedin-container' title='Gmail' href='https://www.linkedin.com/in/vikasndhavande/'>
                    <Image src={linkedin} alt='Linkedin' />
                    linkedin
                </a>

            </div>
        </section >
    );
}

export default Contact;