import '../css/about.css';
import Image from '../components/Image';

import aboutImg from '../imgs/about.jpg';
import Link from './WebLink'

import { CiLocationOn } from "react-icons/ci";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { FaRegCircle } from "react-icons/fa";


function About() {

    const introHead = <h2>about me</h2>
    const introText = <p>As a Trainee Engineer at Bosch India, I am gaining hands-on experience in surface mounting technology at Mobility Electronics and Embedded Testing. I am passionate about learning about Embedded systems and Electronics technology.
    </p>
    const embddedText = <p><FaRegCircle className='circle-icon' /> I'm good in dealing with Embedded Testing .</p>

    const educationHead = <h3>education</h3>
    const degree = <p className='degree'>Bachelor's degree (2023 - Present)</p>
    const department = <p className='department'>Electronics and Communication Engineering</p>
    const university = <p className='university'><CiLocationOn className='location' />  mysore university</p>
    


    return (
        <section id='about' className="about-container">
            <Image src={aboutImg} alt='About Img' />

            <div className='about-info'>

                <div className='intro'>
                    {introHead}
                    {introText}
                    {embddedText}
                </div>

                <div className='education-container'>
                    {educationHead}
                    {degree}
                    {department}
                    {university}
                </div>

                <Link title='Experience' url='#experience' class='about-arrow' name={<MdKeyboardDoubleArrowDown />} />

            </div>
        </section>
    );
}


export default About;