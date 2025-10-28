import React from "react";
import "./CheatSheet.css"; // add your CSS here

class CheatSheet extends React.Component {
    render() {
        const { cheatSheetData } = this.props;
        if (!cheatSheetData) return null;

        return (
            <div className="cheat-sheet">
                {Object.entries(cheatSheetData).map(([section, content]) => (
                    <div key={section} className="cheat-section">
                        <h2 className="section-title">{section}</h2>

                        {typeof content === "object" && !Array.isArray(content) ? (
                            <ul>
                                {Object.entries(content).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong>{" "}
                                        <pre>{JSON.stringify(value, null, 2)}</pre>
                                    </li>
                                ))}
                            </ul>
                        ) : Array.isArray(content) ? (
                            <ul>
                                {content.map((item, idx) => (
                                    <li key={idx}>
                                        <pre>{JSON.stringify(item, null, 2)}</pre>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <pre>{content}</pre>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

export default CheatSheet;
