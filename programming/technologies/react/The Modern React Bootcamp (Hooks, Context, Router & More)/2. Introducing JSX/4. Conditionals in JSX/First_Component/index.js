/*
function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        // return <h1>Your number is...</h1>;
        // return <h1>Your number is {getNum()}</h1>;
        return <h1>Your number is {getNum()}</h1>;
    }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
*/

/*
function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? "Congrats!" : "Unlucky!"}</p>
                {
                    // num === 7 ?
                    // <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                    // : null
                    num === 7 &&
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                }
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
*/

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            // msg = "Good!"
            msg =
                <div>
                    <h2>CONGRATS YOU WIN!</h2>
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                </div>
        } else {
            // msg = "Bad!"
            msg = <p>Sorry You Lose!</p>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));