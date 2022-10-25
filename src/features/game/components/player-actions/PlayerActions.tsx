import React from "react";
import ButtonsStyles from "../../../../app-styled/Buttons.styled";

const { PrimaryButton } = ButtonsStyles;

export const PA_DATA = {
  name: 'PlayerActions',
  heading: 'Place your bet',
};

export function PlayerActions() {

  return (
    <div data-testid={PA_DATA.name}>
      <h4>{PA_DATA.heading}</h4>

      <div>
        <PrimaryButton onClick={() => { console.log('lower') }}>
          Lower
        </PrimaryButton>
        <PrimaryButton onClick={() => { console.log('higher') }}>
          Higher
        </PrimaryButton>
      </div>
    </div>
  )
}
