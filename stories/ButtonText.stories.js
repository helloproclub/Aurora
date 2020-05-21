import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonText from '../src/components/ButtonText';

storiesOf('ButtonText', module)
    .addParameters({
        info: {
            source: true
        }
    })

    .add('Filled Button', () => (
        <div>
            <ButtonText text="Press ME!" size="small" color="primary" />            
        </div>
    ))
    .add('Filled Hover', () => (
        <div>
            <ButtonText text="Press ME!" size="small" color="primary-variant" />            
        </div>
    ))
    .add('Filled Pressed', () => (
        <div>
            <ButtonText text="Press ME!" size="small" color="secondary-variant" />            
        </div>
    ))