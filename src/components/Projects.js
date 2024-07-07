import '../css/projects.css'
import Swipper from './Swipper';
import WebLink from './WebLink';
import WebProjects from './WebProject';
import { useState } from 'react';

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Projects() {

    const projectsHead = <h1>projects</h1>
    const projectsP = <p className='browse'>Browse My Recent</p>

    const [x, setX] = useState(1);

    return (
        <section id='projects' className='projects-container'>
            {projectsHead}
            {projectsP}

            <div className='buttons-container'>
                <button className={x === 1 ? 'active' : null} onClick={() => setX(1)}>Certificates</button>
                <button className={x === 2 ? 'active' : null} onClick={() => setX(2)}>Project</button>
            </div>

            {
                x == 1 ? <Swipper webTitle='web' /> : null
            }

            {
                x == 2 ? <Swipper embeddedTitle='embedded' /> : null
            }

            <WebLink title='Projects' url='#contact' class='projects-arrow' name={<MdKeyboardDoubleArrowDown />} />

        </section>
    );
}

export default Projects;