import '../css/experience.css'
import Image from './Image'
import Skill from './Skill'

import Link from './WebLink'

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import html from '../imgs/html-CfJn_UEt.png'
import css from '../imgs/css-CjQniWua.png'
import js from '../imgs/js.png'
import react from '../imgs/react-CBjhoM09.png'
import github from '../imgs/GitHub.png'
import tailwind from '../imgs/tailwind.png'
import Bootstrap from '../imgs/Bootstrap-DhKA-bzs.png'
import C from '../imgs/c.png'

function Experience() {
    const experienceHead = <h1>experience</h1>
    return (
        <section id="experience" className="experience-container ">
            {experienceHead}

            <div className='skill-big'>
                <div className='skills-container'>
                    <Skill src={html} alt='HTML' name='HTML' />
                    <Skill src={css} alt='CSS' name='CSS' />
                    <Skill src={js} alt='JS' name='Js' />
                </div>

                <div className='skills-container'>
                    <Skill src={react} alt='React' name='React' />
                    <Skill src={github} alt='Github' name='Github' />
                    <Skill src={tailwind} alt='Tailwind' name='Tailwind' />
                </div>

                <div className='skills-container'>
                    <Skill src={Bootstrap} alt='Bootstrap' name='Bootstrap' />
                    <Skill src={C} alt='C' name='C' />
                </div>


            </div>
            <Link title='Projects' url='#projects' class='exp-arrow' name={<MdKeyboardDoubleArrowDown />} />


        </section>
    );
}


export default Experience;