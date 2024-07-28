import { useContext } from "react";
import { dataContext } from "../App";
const Component5 = () => {
const {userName} = useContext(dataContext);

    return (
        <>
            <h3>I'm Component 5</h3>
            <h1>my name is {userName} </h1>
        </>
    )
}
export default Component5;