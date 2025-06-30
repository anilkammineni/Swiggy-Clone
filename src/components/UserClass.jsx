import React from "react"
import Example from "./Example";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            location: "",
            avatarurl: "dummy"
        };

        console.log("child constructor");
    }

    async componentDidMount() {
        //console.log(this.props.name + "Child component did mount");

        // API call. It ensures component is fully loaded first then get the data.
        // it is similar to useEffect() in functional components

        console.log("Component did mount called");

        const data = await fetch("https://api.github.com/users/anilkammineni");
        const jsonData = await data.json();

        console.log("Data is: ", jsonData);
        
        this.setState({
          name: jsonData?.name,
          location: jsonData?.login,
          avatarurl: jsonData?.avatar_url,
        });

        console.log("Name is: ", this.state.name)
    };

    componentDidUpdate() {
        console.log("Component did update is called");
    }

    componentWillUnmount() {
        console.log("component unmounted")
    }

    render() {
        
        console.log("Render method called");

        const { name, location, avatarurl } = this.state;
        return (
            <div className="user-card">
            <img src={avatarurl} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @anil.kammineni</h4>
          </div>
        );
    }
}

export default UserClass;