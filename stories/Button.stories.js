import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/public/fonts.scss';
import GhostButton from '../src/components/ButtonGhost';

storiesOf('Button', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Ghost Button', () => (
        <div>
            <GhostButton text="GHOST BUTTON"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="secondary"></GhostButton>
        </div>
    ))

