import BlackContent from "./BlackContent";
import { Background } from "./BlackStyle";

export default function Black({ passName }) {
    console.log("Black", passName);
    return (
        <Background>
            <BlackContent passName={passName} />
        </Background>
    );
}
