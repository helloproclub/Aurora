import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonText from '../src/components/ButtonText';

storiesOf('ButtonText', module)
    .addParameters({
        info: {
            source: true
        }
    })

    .add('default', () => (
        <div>
            <ButtonText text="Press ME!" />
        </div>
    ))
    