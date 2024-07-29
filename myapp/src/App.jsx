import { createContext } from "react";
import Component1 from './components/Component1'

export const infoContext = createContext();

const App = () => {
  let obj = {
    username: 'Joanna',
    email: 'silva@gmail.com'
  }

  // shft + alt + f
  return (
    <>
      <infoContext.Provider value={obj}>
        I'have info like , {obj.username} & {obj.email}
        <Component1 />
      </infoContext.Provider>

    </>
  )
}
export default App;