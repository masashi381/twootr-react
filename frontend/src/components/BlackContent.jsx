import { useState } from "react";
import FormContent from "./FormContent";
import {
    AccountName,
    EditButton,
    EditIcon,
    FormDisplay,
    FullName,
    NameTitle,
} from "./BlackStyle";

export default function BlackContent({ passName, passNameSlug}) {
    const [icon, setIcon] = useState("");
    
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

    const getIcon =(newId) => {
        setIcon(newId);
    }
    return (
        <FormDisplay>
            <img
                src={`https://avatars.dicebear.com/api/bottts/${icon}.svg`}
                alt="Avatar"
                width="150"
                height="150"
            />
            <NameTitle>
                <FullName>{getNameTitle}</FullName>
                <EditButton onClick={changeName}>
                    <EditIcon className="fa-solid fa-pen-to-square"></EditIcon>
                </EditButton>
            </NameTitle>
            {changeUserName && (
                <FormContent
                    newUser={newUser}
                    newUserTitle={newUserTitle}
                    passName={passName}
                    passNameSlug={passNameSlug}
                    getIcon={getIcon}
                />
            )}
            <AccountName>@{getUser}</AccountName>
        </FormDisplay>
    );
}
