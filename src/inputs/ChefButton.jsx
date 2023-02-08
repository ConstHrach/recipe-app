import React, { useContext } from "react";
import StylesContext from "../StylesContext"

export default function ChefButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
       Add
      </button>
    </div>
  );
}
