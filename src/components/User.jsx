import { useState } from "react"

const User = ({ name }) => {

    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Chicago, IL</h3>
            <h4>Contact: @anil.kammineni</h4>
            <h2>Count: {count}</h2>
        </div>
    )
}

export default User