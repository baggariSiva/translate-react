import { useEffect, useState } from "react";
import translate from "translate";

const DisplayTranslated = (props) => {
    const [transText, setTransText] = useState("");

    useEffect(() => {
        if (!props.text) {
            // add here your engine and key
            translate(props.text, { from: "en", to: "hi", engine: "YOUR_ENGINE", key: "YOUR_KEY" })
                .then(text => {
                    setTransText(text)
                })
                .catch((err) => console.log(err));
        }
    }, [props.text]);

    return (
        <div className="preview">
            <h2>Translated Text:</h2>
            <div className="preview-text">{transText}</div>
        </div>
    );
}

export default DisplayTranslated;
