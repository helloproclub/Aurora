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
            <Checkbox text="Press ME!" />
        </div>
    ))
    