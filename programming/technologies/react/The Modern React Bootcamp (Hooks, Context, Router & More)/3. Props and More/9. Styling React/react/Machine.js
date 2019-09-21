/*
class Machine extends React.Component {
    render() {

        const { s1, s2, s3 } = this.props;
        const winner = s1 === s2 && s2 === s3;

        return (
            // <div class="Machine">
            <div className="Machine">
                //  <label for="textInput" /> 
                <label htmlFor="textInput" />
                <p>
                    {s1} {s2} {s3}
                </p>
                <p>{winner ? "Winner!" : "Loser!"}</p>
            </div>
        )
    }
}
*/

class Machine extends React.Component {
    render() {

        const { s1, s2, s3 } = this.props;
        const winner = s1 === s2 && s2 === s3;
        const colors = { fontSize: '50px', backgroundColor: 'purple' };

        return (
            <div className="Machine">
                <label htmlFor="textInput" />
                {/* <p style={{ fontSize: '50px', backgroundColor: 'purple' }}> */}
                <p style={colors}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? "Winner!" : "Loser!"}
                </p>
            </div>
        )
    }
}