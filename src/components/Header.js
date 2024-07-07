import { useState } from 'react';
import '../css/header.css';
import WebLink from './WebLink';

import { PiListBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";

function Header() {
    const logo = <h1> Vikas </h1>

    const [x, setX] = useState(0);
    return (
        <header>
            {logo}

            <button className='list-icon' onClick={() => setX(1)}><PiListBold /></button>

            <div className={x ? 'links-list links-show' : 'links-list'}>
                <button className='close-icon' onClick={() => setX(0)}><RiCloseLargeFill /></button>
                <WebLink url='#about' name='about' />
                <WebLink url='#experience' name='experience' />
                <WebLink url='#projects' name='projects' />
                <WebLink url='#contact' name='contact' />
            </div>


            <div className='links-container'>
                <WebLink url='#about' name='about' />
                <WebLink url='#experience' name='experience' />
                <WebLink url='#projects' name='projects' />
                <WebLink url='#contact' name='contact' />
            </div>
        </header>
    );
}

export default Header;