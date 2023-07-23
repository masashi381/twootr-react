import Purple from "./Purple";
import Black from "./Black";

export default function Headers({ passName, passNameSlug }) {
    return (
        <>
            <Purple />
            <Black passName={passName} passNameSlug={passNameSlug} />
        </>
    );
}
