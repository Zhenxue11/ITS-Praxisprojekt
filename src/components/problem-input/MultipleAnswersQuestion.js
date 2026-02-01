import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { renderText } from '../../platform-logic/renderText.js';
import { ThemeContext } from "../../config/config.js";

class MultipleAnswersQuestion extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      values: props.defaultValue || [],
    };
  }

  handleChange = (event) => {
    const { value, checked } = event.target;

    this.setState(prevState => {
      const values = checked
        ? [...prevState.values, value]
        : prevState.values.filter(v => v !== value);
      return { values };
    });

    this.props.onChange(event);
  };

  render() {
    let { choices: _choices = [], variabilization } = this.props;

    const choices = [];
    if (Array.isArray(_choices)) {
      [...new Set(_choices)].forEach(choice => {
        if (choice.includes(" above")) {
          choices.push(choice);
        } else {
          choices.unshift(choice);
        }
      });
    }

    return (
      <div style={{ marginRight: "5%", textAlign: "center" }}>
        <FormControl>
          {choices.length > 0
            ? choices.map(choice => (
                <FormControlLabel
                  key={choice}
                  value={choice}
                  control={
                    <Checkbox
                      checked={this.state.values.includes(choice)}
                      onChange={this.handleChange}
                    />
                  }
                  label={renderText(choice, null, variabilization, this.context)}
                />
              ))
            : "Error: This problem has no answer choices. Please submit feedback."}
        </FormControl>
      </div>
    );
  }
}

export default MultipleAnswersQuestion;
