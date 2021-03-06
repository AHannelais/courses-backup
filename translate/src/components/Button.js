import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }
  renderButton(colorValue) {
    return (
      <button className={`ui button ${colorValue}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {colorValue => this.renderButton(colorValue)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
