import { useContext } from "react";
import { infoContext } from "../App";

const Component5 = () => {
    const obj = useContext(infoContext)


    return (
        <>
            <h3>I'm Component 5</h3>
            <h1>I had received the following info - {obj.email} and {obj.username} </h1>
        </>
    )
}
export default Component5;