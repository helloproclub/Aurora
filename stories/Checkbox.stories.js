import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';

storiesOf('Checkbox', module)
    .addParameters({
        info: {
            source: true
        }
    })

    .add('default', () => (
        <div>
        <Checkbox text="Choose"/>
        <Checkbox text="Choose" classname="checkbox-disabled" disabled="disabled"/>
        <Checkbox text="Choose" checked/>
        </div>
    ))
    