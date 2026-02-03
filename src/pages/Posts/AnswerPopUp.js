import React from "react";
import "./AnswerPopUp.css";
class AnswerPopUp extends React.Component {
    render() {
        const { answerText } = this.props;
        console.log("answerTeyr", answerText)
        if (!answerText || answerText.length === 0) return null;

        return (
            <div className="answer-popup" style={{ whiteSpace: 'pre-line' }}>
                <h1 className="answer-title">Answer</h1>
                <div className="answer">
                {answerText.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                </div>

            </div>
        );
    }
}

export default AnswerPopUp;
