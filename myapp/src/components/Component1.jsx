import Component2 from "./Component2";
import { dataContext } from "../App";
import { useContext } from "react";

const Component1 = () => {
    const {userName, email} = useContext(dataContext)


    return (
        <>
                <Component2 />
        <h3>I'm Component 1</h3>
        <h2>my email i'd is ---- {email}</h2>

        </>
    )
}
export default Component1;