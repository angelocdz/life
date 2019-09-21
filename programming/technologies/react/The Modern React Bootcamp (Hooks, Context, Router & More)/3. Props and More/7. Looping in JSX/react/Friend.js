/*
class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>h</li>)}
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}
*/

/*
class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        const lis = hobbies.map(h => <li>{h}</li>)
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}
*/

class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}