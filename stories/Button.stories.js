import React from 'react';
import { storiesOf } from '@storybook/react';
import GhostButton from '../src/components/ButtonGhost';

storiesOf('Button', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Ghost default', () => (
        <div>
            
            <GhostButton text="GHOST BUTTON"></GhostButton>
        </div>
    ))

