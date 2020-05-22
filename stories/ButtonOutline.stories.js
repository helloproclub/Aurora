  
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/public/fonts.scss';
import OutlineButton from '../src/components/ButtonOutline';

storiesOf('Button Outline', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Outline Button Color Theme', () => (
        <div>
            <OutlineButton text="OUTLINE BUTTON"></OutlineButton>
        </div>
    ))