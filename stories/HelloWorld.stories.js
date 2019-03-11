import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../src/components/HelloWorld/index'

storiesOf('Hello World', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('with proclub', () => (
        <HelloWorld name="Proclub"/>
    ));
