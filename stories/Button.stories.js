import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import GhostButton from '../src/components/ButtonGhost';
storiesOf('Button', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('primary default', () => (
        <div>
            <Button design="primary" size="small" text="Press Me!"/>
            <Button design="primary" size="medium" text="Press Me!"/>
            <Button design="primary" size="big" text="Press Me!"/>
        </div>
    ))
    .add('Ghost default', () => (
        <div>
            <GhostButton text="GHOST BUTTON"></GhostButton>
        </div>
    ))

