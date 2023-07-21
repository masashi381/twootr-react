import { useState } from "react";


export default function FormContent({ newUser, newUserTitle, passName }) {
    // const [inputAurthorName, setInputAurthorName] = useState("@john-doe");

    //Change a new name when user click the submit button
    const [submitted, setSubmitted] = useState(false);
    const nameSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
        const getFirstName = document.getElementById("firstName").value;
        const getLastName = document.getElementById("lastName").value;
        const creatName = `@${getFirstName.toLowerCase()}-${getLastName.toLowerCase()}`;
        // setInputAurthorName(creatName);
        newUser(creatName);
        newUserTitle(getFirstName + " " + getLastName);
        passName(getFirstName + getLastName);
    };

    //Submit button
    // const submittedSuccessfully = submitted ? (
    //     <span style={{ color: "green" }}>&#10003;</span>
    // ) : (
    //     "Submit"
    // );

    return (
        <div>
            <img
                src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg"
                alt="Twootr"
            />
            <form>
                <input type="text" id="firstName" />
                <input type="text" id="lastName" />
                <button onClick={nameSubmit}>Submit</button>
            </form>
            {/* <p>{inputAurthorName}</p> */}
        </div>
    );
}
