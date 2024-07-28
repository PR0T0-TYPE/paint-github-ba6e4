import { createContext } from "react";
import Component1 from "./components/Component1";

// context hook example
export const dataContext = createContext();

const App = () =>{

  let userName = 'John';
  let email = 'johndoe@gmail.com'

  return(
<dataContext.Provider value={{userName, email}} >
 <h1>Hey I'm App.jsx Component.</h1>
  <Component1 />
</dataContext.Provider>

  );
}

export default App;