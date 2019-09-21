/*
class Hello extends React.Component {
    render() {
        return <h1>Hello there!</h1>
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
*/

class Hello extends React.Component {
    render() {
        return (
            // <h1>Hello there!</h1>
            // <h1>Hello there!</h1>
            // <h1>Hello there!</h1>
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));