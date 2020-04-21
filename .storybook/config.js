import React from "react";
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';


function loadStories() {
    require('../stories/Button.stories');
    require('../stories/Typography.stories');
}

addDecorator(withInfo)
configure(loadStories, module);