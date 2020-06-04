import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonFilled from "../src/components/ButtonFilled";

storiesOf("Button Filled", module)
    // use this for documentation
    .addParameters({
        info: {
            source: true,
        },
    })
    .add("default", () => (
        <div>
            <ButtonFilled onPressed={() => alert("Pressed!")}>FILLED BUTTON</ButtonFilled>
        </div>
    ));
