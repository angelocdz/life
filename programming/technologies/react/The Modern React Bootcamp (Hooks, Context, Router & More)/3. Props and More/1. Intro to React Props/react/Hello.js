class Hello extends React.Component {
    render() {
        // console.log(this.props);
        // return <p>Hi Everyone!</p>

        // console.log(this.props.to);
        // return <p>Hi Everyone!</p>

        // return <p>Hi to {this.props.to} from {this.props.from}</p>;

        // return <p>Hi {this.props.to} from {this.props.from}</p>;

        const props = this.props;
        return <p>Hi {props.to} from {props.from}</p>;
    }
}