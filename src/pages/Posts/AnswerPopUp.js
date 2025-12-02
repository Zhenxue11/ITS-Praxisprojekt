import React from "react";

class AnswerPopUp extends React.Component {
    render() {
        const { answerText } = this.props;
        console.log(answerText,"checkkkkk")
        if (!answerText || answerText.length === 0) return null;

        return (
            <div className="answer-popup" style={{ whiteSpace: 'pre-line' }}>
                {answerText}
            </div>
        );
    }
}

export default AnswerPopUp;
