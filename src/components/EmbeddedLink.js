function EmbeddedLink(props) {
    return <a target="_blank" href={props.href} title={props.title}>{props.icon}</a>
}

export default EmbeddedLink;