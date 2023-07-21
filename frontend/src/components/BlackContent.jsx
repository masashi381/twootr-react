import { useState } from "react";
import FormContent from "./FormContent";

export default function BlackContent({ passName }) {
    console.log("BlackContent", passName);
    const [changeUserName, setChangeUserName] = useState(false);
    const changeName = (event) => {
        setChangeUserName(true);
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <h3>John Doe</h3>
                <button onClick={changeName}>Click</button>
                {changeUserName && <FormContent passName={passName} />}
            </div>
            <p>@john-doe</p>
        </div>
    );
}
