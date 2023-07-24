import Headers from "./components/Headers";
import Body from "./components/Body";
import { useState } from "react";
function App() {
    const [name, setName] = useState("");
    const [nameSlug, setNameSlug] = useState("");
    const passName = (newName) => {
        setName(newName);
    };


    const passNameSlug = (newNameSlug) => {
        setNameSlug(newNameSlug);
    };

    return (<>
    <Headers passName={passName} passNameSlug={passNameSlug}/>
    <Body name={name} nameSlug={nameSlug}/>
    </>)
}

export default App;
