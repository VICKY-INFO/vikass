import Image from "./Image";
import '../css/project.css'

import EmbeddedLink from "./EmbeddedLink";

function EmbeddedProject(props) {
    return (
        <div className="project" >
            <Image src={props.projectImg} />
            <p>{props.projectType}</p>
            <h3>{props.projectName}</h3>

            <div className="project-links">
                <div className="linkedin-container1">
                    <EmbeddedLink href={props.href1} title='Linkedin' icon={props.icon1} />
                </div>

                <div className="github-container">
                    <EmbeddedLink href={props.href2} title='Linkedin' icon={props.icon2} />
                </div>

            </div>

        </div >
    );
}

export default EmbeddedProject;