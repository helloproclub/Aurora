import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonFilled from "../src/components/ButtonFilled";

storiesOf("Button", module)
  // use this for documentation
  .addParameters({
    info: {
      source: true,
    },
  })
  .add("Filled", () => (
    <div>
      <ButtonFilled>PRESS ME</ButtonFilled>
    </div>
  ));
