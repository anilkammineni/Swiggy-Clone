import User from "./User";
import UserClass from "./UserClass";

export default function About() {

    return (
        <div>
            <h1>Hello, this is about us</h1>
            {<User name = {"Anil functional component"} />}
            {<UserClass name = {"Anil class"} />}
        </div>
    )
}