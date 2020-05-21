import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '../src/components/TextArea';

storiesOf('TextArea', module)
    .addParameters({
        info: {
            source: true
        }
    })

    .add('Default', () => (
        <div>
            <TextArea/>
        </div>
    ))
    