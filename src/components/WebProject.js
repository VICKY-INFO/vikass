import Image from "./Image";
import '../css/project.css'

import WebLink from "./WebLink";

function WebProjects(props) {

    return (
        <div className="project" >
            <Image src={props.projectImg} />
            <p>{props.projectType}</p>
            <h3>{props.projectName}</h3>

            <div className="project-links">
                <div className="code-container">
                    <WebLink class='code-icon' url={props.codeUrl} name={props.icon1} target='_blank' title='Code' />
                    <WebLink url={props.codeUrl} class='code-text' name='Code' target='_blank' title='Code' />
                </div>
                <div className="preview-container">
                    <WebLink class='preview-icon' url={props.previewUrl} name={props.icon2} target='_blank' title='Preview' />
                    <WebLink class='preview-text' url={props.previewUrl} name='Preview' target='_blank' title='Preview' />
                </div>

            </div>

        </div >
    );
}

export default WebProjects;