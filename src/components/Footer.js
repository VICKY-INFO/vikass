import '../css/footer.css'
import WebLink from './WebLink';
import Image from './Image';

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
    return (
        <footer>
            <div className='footer-links'>
                <WebLink url='#about' name='about' />
                <WebLink url='#experience' name='experience' />
                <WebLink url='#projects' name='projects' />
                <WebLink url='#contact' name='contact' />
            </div>

            <div className='personal-links'>

                <a title='Linkedin' target='_blank' href='https://www.linkedin.com/in/vikasndhavdne/'>
                    <FaLinkedinIn />
                </a>

                <a title='Github' target='_blank' href='https://github.com/VIKASIND/VIKASIND'>
                    <BsGithub />
                </a>

                <a title='Facebook' target='_blank' href='https://www.facebook.com/'>
                    <FaFacebookF />
                </a>

                <a title='Instgram' target='_blank' href='https://www.instagram.com/vicky.offline/'>
                    <FaInstagram />
                </a>

                <a title='Whatsapp' target='_blank' href='https://youtube.com'>
                    <FaWhatsapp />
                </a>


            </div>

            <p>Deleoped and powered by Vikas </p>
        </footer>
    );
}

export default Footer;