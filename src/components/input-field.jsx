import React, {Component} from "react";
import "../styles/InputField.css";

  class InputField extends Component {
  constructor() {
    super();
    this.state = {
      valueOfInput: ''
    };
  }

  grabSomeDataFromInput = (event) => {
  const newValueOfInput = event.target.value;
  return this.setState({valueOfInput: newValueOfInput});
};

  sendCountryToParent = () => {
    const {sendToMyParent} =this.props;
    const {valueOfInput} = this.state;

    return sendToMyParent(valueOfInput);
  };

  render() {
    return(
      <div className="search">
    <input
      type="text"
      className="search-term"
      placeholder="Show me the country"
      onChange={this.grabSomeDataFromInput}
    />
    <button type="submit" className="search-button" onClick={ this.sendCountryToParent } >
      <i className="fa fa-search"></i>
    </button>
  </div>
    )
  }

};

export default InputField;
