import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonFilled from '../src/components/ButtonFilled';

storiesOf('Button Filled', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true,
        },
    })
    .add('default', () => (
        <div>
            <ButtonFilled onPressed={() => alert('Pressed!')}>FILLED BUTTON</ButtonFilled>
        </div>
    )).add('hover', () => (
        <div>
            <ButtonFilled onPressed={() => alert('Pressed!')} state="hover">FILLED HOVER</ButtonFilled>
        </div>
    ))
    .add('pressed', () => (
        <div>
            <ButtonFilled onPressed={() => alert('Pressed!')} state="active">FILLED PRESSED</ButtonFilled>
        </div>
    ));
