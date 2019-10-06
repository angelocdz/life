import React, { Component } from "react";
import "./DogList.css";

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Dog List!</h1>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-4 text-center">
                                ASDSDASDSDASDASDASDS
                            </div>
                            <div className="col-4 text-center">
                                ASDSDASDSDASDASDASDS
                            </div>
                            <div className="col-4 text-center">
                                ASDSDASDSDASDASDASDS
                            </div> */}

                        {this.props.dogs.map(d => (
                            // <div className="DogList-dog col-4 text-center" key={d.name}>
                            // <div className="DogList-dog col-lg-4 text-center" key={d.name}>
                            // <div className="DogList-dog col-md-4 text-center" key={d.name}>
                            // <div className="DogList-dog col-md-6 col-lg-4 text-center" key={d.name}>
                            <div className="DogList-dog col-lg-4 text-center" key={d.name}>
                                <img src={d.src} alt={d.name} />
                                <h3>{d.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default DogList;