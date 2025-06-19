import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);

    }
    render() {
        return (
          <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Chicago, IL</h3>
            <h4>Contact: @anil.kammineni</h4>
          </div>
        );
    }
}

export default UserClass;