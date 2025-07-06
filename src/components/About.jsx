import React from "react";
import UserClass from "./UserClass";
import {UserContext} from "../utils/context-api/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    return (
      <div>
        <h1>Hello, this is about us</h1>
        <div>
          LoggedIn User : 
          <UserContext.Consumer>
            {({userName}) => {
              return <span className="text-xl font-bold">&nbsp;{userName}</span>
            }}
          </UserContext.Consumer>
        </div>
        {<UserClass />}
      </div>
    );
  }
}

export default About;
