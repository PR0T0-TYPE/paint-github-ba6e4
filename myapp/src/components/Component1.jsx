import { useContext, useEffect } from "react";
import Component2 from "./Component2";
import { infoContext } from "../App";


const Component1 = () => {
    const obj = useContext(infoContext);
    useEffect(() => {
        console.log('the object received from context is ', obj)
    }, [])



    return (
        <>
            <Component2 />
            <h3>I'm Component 1</h3>
            <h2>my email i'd is ---- {obj.email}</h2>

        </>
    )
}
export default Component1;