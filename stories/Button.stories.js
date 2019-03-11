import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

storiesOf('Button', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('with proclub', () => (
        <Button/>
    ));

