class Hello extends React.Component {
    render() {
        // this.props.from = "BLUE";
        return <p>Hi {this.props.to} from {this.props.from}</p>;
    }
}