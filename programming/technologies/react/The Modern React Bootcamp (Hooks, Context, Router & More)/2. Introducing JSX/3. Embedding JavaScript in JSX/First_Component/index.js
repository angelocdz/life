/*
class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                // HI! 
                <h1>My number is: {2 * 8.4}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
*/

function getMood() {
    const moods = ["Angry", "Hungry", "Sily", "Quiet", "Paranoid"];
    return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Current Mood is: {getMood()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));