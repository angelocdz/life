/*
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
*/

class Machine extends React.Component {
    render() {
        // return <p>HI FROM MACHINE!</p>

        // return (
        //     <div>
        //         <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
        //         <p>WINNER/LOSER</p>
        //     </div>
        // )

        const { s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);

        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? "Winner!" : "Loser!"}</p>
            </div>
        )
    }
}