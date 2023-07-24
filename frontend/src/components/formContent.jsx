import { useState } from "react";
import { InputContents, SubmitButton } from "./BlackStyle";

export default function FormContent({ newUser, newUserTitle, passName, passNameSlug }) {
    // const [inputAurthorName, setInputAurthorName] = useState("@john-doe");

    //Change a new name when user click the submit button
    const [submitted, setSubmitted] = useState(false);
    const nameSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
        const getFirstName = document.getElementById("firstName").value;
        const getLastName = document.getElementById("lastName").value;
        const createName = `@${getFirstName.toLowerCase()}-${getLastName.toLowerCase()}`;
        // setInputAurthorName(creatName);
        newUser(createName);
        newUserTitle(getFirstName + " " + getLastName);
        passName(getFirstName + " " + getLastName);
        passNameSlug(createName)
    };

    //Submit button
    // const submittedSuccessfully = submitted ? (
    //     <span style={{ color: "green" }}>&#10003;</span>
    // ) : (
    //     "Submit"
    // );

    return (
        <div>
            <form>
                <InputContents type="text" id="firstName" />
                <InputContents type="text" id="lastName" />
                <SubmitButton onClick={nameSubmit}>Submit</SubmitButton>
            </form>
            {/* <p>{inputAurthorName}</p> */}
        </div>
    );
}
