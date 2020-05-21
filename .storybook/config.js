import React from "react";
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';


function loadStories() {
    require('../stories/HelloWorld.stories');
    require('../stories/Container.stories');
    require('../stories/ButtonText.stories');
    require('../stories/ButtonGroup.stories');
    require('../stories/TextArea.stories');
}

addDecorator(withInfo)
configure(loadStories, module);