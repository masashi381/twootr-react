import { Header, TitleStyle, WriteButton } from "./PurpleStyle";

export default function PurpleContent() {
    const clickFocus = () => {
        const newTwootId = document.getElementById("twootContent");
        newTwootId.focus();
    };

    return (
        <Header>
            <TitleStyle>TWOOTR</TitleStyle>
            <WriteButton onClick={clickFocus}>Write a new twoot</WriteButton>
        </Header>
    );
}
