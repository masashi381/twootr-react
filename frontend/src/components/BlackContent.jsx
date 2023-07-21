import { useState } from "react";
import FormContent from "./FormContent";

export default function BlackContent() {
    //Account name
    const [getUser, setGetUser] = useState("@john-doe");
    const newUser = (newUser) => {
        setGetUser(newUser);
    };

    //Title name
    const [getNameTitle, setGetNameTitle] = useState("John Doe");
    const newUserTitle = (newUserTitle) => {
        setGetNameTitle(newUserTitle);
    };

    //Toggle the name change form when user click the button
    const [changeUserName, setChangeUserName] = useState(false);
    const changeName = (event) => {
        setChangeUserName(!changeUserName);
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <h3>{getNameTitle}</h3>
                <button onClick={changeName}>Click</button>
                {changeUserName && (
                    <FormContent
                        newUser={newUser}
                        newUserTitle={newUserTitle}
                    />
                )}
                <p>{getUser}</p>
            </div>
        </div>
    );
}
