import Headers from "./components/Headers";
import Body from "./components/Body";
import { useState } from "react";
function App() {
    const [name, setName] = useState("");
    const passName = (newName) => {
        setName(newName);
      };
    return (<>
    <Headers passName={passName}/>
    <Body name={name}/>
    </>)
}

export default App;
