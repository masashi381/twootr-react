import { InputContents, SubmitButton } from "./BlackStyle";

export default function FormContent({
    newUser,
    newUserTitle,
    passName,
    passNameSlug,
    getIcon,
}) {

    //Change a new name when user click the submit button
    const nameSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
        const getFirstName = document.getElementById("firstName").value;
        const getLastName = document.getElementById("lastName").value;
        const createName = `${getFirstName
            .toLowerCase()
            .replace(/[^a-zA-Z0]/g, "")}-${getLastName
            .toLowerCase()
            .replace(/[^a-zA-Z]/g, "")}`;
        if (!getFirstName || !getLastName) {
            alert("Please enter a valid name!");
        } else {
            newUser(createName);
            newUserTitle(
                getFirstName.replace(/[^a-zA-Z]/g, "") +
                    " " +
                    getLastName.replace(/[^a-zA-Z]/g, "")
            );
            passName(
                getFirstName.replace(/[^a-zA-Z]/g, "") +
                    " " +
                    getLastName.replace(/[^a-zA-Z]/g, "")
            );
            passNameSlug(createName);
            getIcon(createName);
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
