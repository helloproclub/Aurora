import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";

storiesOf("Button", module)
  // use this for documentation
  .addParameters({
    info: {
      source: true,
    },
  })
  .add("primary default", () => (
    <div>
      <Button design="primary" size="small" text="Press Me!" />
      <Button design="primary" size="medium" text="Press Me!" />
      <Button design="primary" size="big" text="Press Me!" />
    </div>
  ))
  .add("primary disabled", () => (
    <div>
      <Button design="primary" size="small" text="Press Me!" disabled />
      <Button design="primary" size="medium" text="Press Me!" disabled />
      <Button design="primary" size="big" text="Press Me!" disabled />
    </div>
  ))
  .add("secondary default", () => (
    <div>
      <Button design="secondary" size="small" text="Press Me!" />
      <Button design="secondary" size="medium" text="Press Me!" />
      <Button design="secondary" size="big" text="Press Me!" />
    </div>
  ))
  .add("secondary disabled", () => (
    <div>
      <Button design="secondary" size="small" text="Press Me!" disabled />
      <Button design="secondary" size="medium" text="Press Me!" disabled />
      <Button design="secondary" size="big" text="Press Me!" disabled />
    </div>
  ));
