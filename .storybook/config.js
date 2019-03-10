import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/HelloWorld.stories');
}

configure(loadStories, module);