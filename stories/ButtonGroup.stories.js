import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from '../src/components/ButtonGroup';

storiesOf('ButtonGroup', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Default', () => (
        <div>
            <ButtonGroup design="primary" position="left" text="Left"/>
            <ButtonGroup design="primary" position="middle" text="Middle"/>
            <ButtonGroup design="primary" position="right" text="Right"/>
        </div>
    ))

