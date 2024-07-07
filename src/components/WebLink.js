function WebLink(props) {
    return <a title={props.title} className={props.class} target={props.target} download={props.download} href={props.url}>{props.name}</a>
}

export default WebLink;