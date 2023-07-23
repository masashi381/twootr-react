import BlackContent from "./BlackContent";
import { Background } from "./BlackStyle";

export default function Black({ passName, passNameSlug }) {
    return (
        <Background>
            <BlackContent passName={passName} passNameSlug={passNameSlug} />
        </Background>
    );
}
