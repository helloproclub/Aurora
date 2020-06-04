import React from 'react';
import { storiesOf } from '@storybook/react';
import InputRadioBox from '../src/components/InputRadioBox';


storiesOf('Input Radio Box', module)
    .addParameters({
        info: {
            source : true,
        }
    })

    .add('Default Radio Box', () => (
        <div>
            <InputRadioBox radioName="Chosen" />            
        </div>
    ))
    .add('Disable Radio Box', () => (
        <div>
            <InputRadioBox radioName="Chosen" disabled />
        </div>
    ))
    .add('Focus Radio Box', () => (
        <div>
            <InputRadioBox radioName="Chosen" checked />
        </div>
    ))