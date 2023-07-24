import { useState } from "react";

import { InputContents, SubmitButton } from "./BlackStyle";

export default function FormContent({
    newUser,
    newUserTitle,
    passName,
    passNameSlug,
    getIcon,
}) {

    //Change a new name when user click the submit button
    const [submitted, setSubmitted] = useState(false);
    const nameSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
        const getFirstName = document.getElementById("firstName").value;
        const getLastName = document.getElementById("lastName").value;
        const createAccountName = `${getFirstName
            .toLowerCase()
            .replace(/[^a-zA-Z0]/g, "")}-${getLastName
            .toLowerCase()
            .replace(/[^a-zA-Z]/g, "")}`;
        const createName =
            getFirstName.replace(/[^a-zA-Z]/g, "") +
            " " +
            getLastName.replace(/[^a-zA-Z]/g, "");
            
        if (!getFirstName || !getLastName) {
            alert("Please enter a valid name!");
        } else {
            // setInputAurthorName(creatName);
            getIcon(createAccountName);
            newUserTitle(createName);
            newUser(createAccountName);
            passName(createName);
            passNameSlug(createAccountName);
        }
    };


    return (
        <div>
            <form>
                <InputContents type="text" id="firstName" />
                <InputContents type="text" id="lastName" />
                <SubmitButton onClick={nameSubmit}>Submit</SubmitButton>
            </form>
        </div>
    );
}
