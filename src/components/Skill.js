import Image from "./Image";



function Skill(props) {
    return (
        <div className="skill">
            <Image src={props.src} alt={props.alt} />
            <h3>{props.name}</h3>
        </div>
    );
}

export default Skill;