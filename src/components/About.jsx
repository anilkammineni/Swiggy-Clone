import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("parent body");
    return (
      <div>
        <h1>Hello, this is about us</h1>
        <div>
          LoggedIn User: 
          <UserContext.Consumer>
            {(data) => {
              return <h1 className="text-xl font-bold">{data.loggedInUser}</h1>
            }}
          </UserContext.Consumer>
        </div>
        {<UserClass />}
      </div>
    );
  }
}

export default About;
