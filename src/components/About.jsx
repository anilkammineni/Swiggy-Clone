import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
        {<UserClass />}
      </div>
    );
  }
}

export default About;