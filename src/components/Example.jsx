import React from "react";

class Example extends React.Component {

    constructor(props) {
        super(props);
        console.log("Example class constructor");
    }

    componentDidMount() {
        console.log("Example class mounted");
    }

    render() {
        console.log("Example render")
        return <div>
            <h1>This is { this.props.name} class</h1>
        </div>
    }
}

export default Example;