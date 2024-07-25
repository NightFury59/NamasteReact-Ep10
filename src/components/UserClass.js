import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "default",

            }
        }

        //console.log("child constructor");
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/NightFury59");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>{name}</h2>
                <h3>Location: {location}</h3>
                <h3>Twitter: @Akshaymarch7</h3>
            </div>
        )
    }
}

export default UserClass;

