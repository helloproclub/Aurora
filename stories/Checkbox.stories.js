import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';

storiesOf('Checkbox', module)
    .addParameters({
        info: {
            source: true
        }
    })

    .add('Default', () => (
        <div>
        <Checkbox/>
        </div>
    ))
    .add('Disabled', () => (
        <div>
        <Checkbox classname="checkbox-disabled" disabled="disabled"/>
        </div>
    ))
    .add('Checked', () => (
        <div>
        <Checkbox checked/>
        </div>
    ))
    