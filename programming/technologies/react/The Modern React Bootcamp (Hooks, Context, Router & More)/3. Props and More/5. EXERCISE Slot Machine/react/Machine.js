class Machine extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <p>{props.s1}{props.s2}{props.s3}</p>
                <p>{props.b}</p>
            </div>
        );
    }
}