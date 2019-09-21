class JSXDemo extends React.Component {
    render() {
        // return (
        //     <div>
        //         <h1>My Image!</h1>
        //         <img src="https://images.unsplash.com/photo-1566764971268-d4576289abed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
        //     </div>
        // );

        return React.createElement("h3", null, "I AM AN H3");
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));