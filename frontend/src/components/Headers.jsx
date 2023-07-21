import Purple from "./Purple";
import Black from "./Black";

export default function Headers({ passName }) {
    console.log("Headers", passName);
    return (
        <>
            <Purple />
            <Black passName={passName}/>
        </>
    );
}
