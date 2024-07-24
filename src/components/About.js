import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props)
        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount")
    }

    render() {

        console.log("parent render")
        return (
                    <div>
                        <h1>About Class Component</h1>
                        <h2>This is Namaste React Web Series</h2>
                        <UserClass name={"Akshay Saini Class"} location={"Dehradun Class"}/>
                    </div>
                )
    }
}


export default About;