import TypingTextAnimation from "../../common/TypingTextAnimation.tsx";

export default function BioText() {
    return (
        <h3
            className={"ms-5 mt-4"}
            style={{
                lineHeight: "1.7rem",
                fontWeight: 400
            }}
        >
            <TypingTextAnimation
                delay={2000}
                text={"I'm a full-stack developer with experience in JavaScript/TypeScript, C++, and C#. I've been fascinated by computers from a young age and have been building my skills ever since. Currently, I'm pursuing a bachelor's degree in Computer Science at the University of Wisconsin–Stout, where I'm further developing my expertise in software development and problem-solving."}
            />
        </h3>
    )
}