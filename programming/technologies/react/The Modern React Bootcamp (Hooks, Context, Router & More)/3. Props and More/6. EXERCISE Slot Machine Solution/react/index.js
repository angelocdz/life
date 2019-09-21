/*
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines</h1>
                <Machine
                    s1="x"
                    s2="y"
                    s3="z"
                    b="You lose!"
                />
                <Machine
                    s1="y"
                    s2="y"
                    s3="y"
                    b="You win!"
                />
                <Machine
                    s1="x"
                    s2="y"
                    s3="x"
                    b="You lose!"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                {/* <Machine
                    s1="x"
                    s2="x"
                    s3="x"
                />
                <Machine
                    s1="x"
                    s2="x"
                    s3="y"
                /> */}

                <Machine
                    s1="X"
                    s2="X"
                    s3="X"
                />
                <Machine
                    s1="X"
                    s2="LOL"
                    s3="ROFL"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))