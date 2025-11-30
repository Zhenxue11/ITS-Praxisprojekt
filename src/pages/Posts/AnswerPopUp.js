import React from "react";

class AnswerPopUp extends React.Component {
    render() {
        const { answerText } = this.props;
        if (!answerText || answerText.length === 0) return null;

        return (
            <div className="answer-popup">
                {answerText.map((item, index) => (
                    <div key={index} className="answer-item">
                        {/* If item is a string or number, show directly */}
                        {typeof item === "string" || typeof item === "number" ? (
                            <p>{item}</p>
                        ) : Array.isArray(item) ? (
                            // If item is an array, recursively render
                            <ul>
                                {item.map((subItem, subIndex) => (
                                    <li key={subIndex}>{JSON.stringify(subItem)}</li>
                                ))}
                            </ul>
                        ) : typeof item === "object" ? (
                            // If item is an object, show keys and values
                            <ul>
                                {Object.entries(item).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong>{" "}
                                        <pre>{JSON.stringify(value, null, 2)}</pre>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{String(item)}</p>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}


export default AnswerPopUp;
