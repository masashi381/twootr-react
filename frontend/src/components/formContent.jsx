import { useState } from "react";

export default function FormContent({ passName }) {
    console.log("FormContent", passName);
    const [inputAurtherName, setInputAurtherName] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const nameSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
        const getFirstName = document.getElementById("firstName").value;
        const getLastName = document.getElementById("lastName").value;
        setInputAurtherName(
            `@${getFirstName.toLowerCase()}-${getLastName.toLowerCase()}`
        );
        passName(getFirstName + getLastName);
    };

    const submittedSuccessfully = submitted ? (
        <span style={{ color: "green" }}>&#10003;</span>
    ) : (
        "Submit"
    );

    return (
        <div>
            <img
                src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg"
                alt="Twootr"
            />
            <form>
                <input type="text" id="firstName" />
                <input type="text" id="lastName" />
                <button onClick={nameSubmit} disabled={submitted}>
                    {submittedSuccessfully}
                </button>
            </form>
            <p>{inputAurtherName}</p>
        </div>
    );
}
