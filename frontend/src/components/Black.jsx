import BlackContent from "./BlackContent";

export default function Black({ passName }) {
    console.log("Black", passName);
    return (
        <div>
            <BlackContent passName={passName} />
        </div>
    );
}
