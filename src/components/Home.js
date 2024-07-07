import '../css/home.css'
import Image from './Image'
import Link from './WebLink'

import resume from '../files/resume.pdf'

import { IoIosArrowUp } from "react-icons/io";

import personalImg from '../imgs/vicky.jpeg'
import { useState } from 'react';
// import personalImg from '../imgs/2022_06_28_13_08_IMG_7683.JPG'

function Home() {

    const hello = <p className='hello'>hello, i'm</p>
    const myName = <h2>Vikas Dhavande </h2>
    const jobDisc = <p className='job-disc'> Trainee Engineer @Bosch-India </p>

    const [arrowShadow, setArrowShadow] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setArrowShadow(true);
        }
        else {
            setArrowShadow(false);
        }
    })

    return (
        <section className="home-container">
            <Image src={personalImg} alt="vikas" />

            <div className='personal-container'>
                {hello}
                {myName}
                {jobDisc}
                <div className='home-links'>
                    <Link class="cv" target="_blank" downlaod='resume.pdf' name='download CV' url={resume} />
                    <Link class="contact-scroll" name='contact info' url="#contact" />
                </div>
            </div>

            <a className={arrowShadow ? 'to-top show' : 'to-top'} title='UP' href='#'><IoIosArrowUp className='arrow-icon' /></a>

        </section>
    );
}

export default Home;