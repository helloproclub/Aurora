  
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/public/fonts.scss';
import GhostButton from '../src/components/ButtonGhost';

storiesOf('Button Ghost', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Ghost Button Color Theme', () => (
        <div>
            <h2>Primary</h2>
            <GhostButton text="GHOST BUTTON" design="primary" ></GhostButton>
            <h2>Primary Variant</h2>
            <GhostButton text="GHOST BUTTON" design="primary-variant" ></GhostButton>
            <h2>Secondary</h2>
            <GhostButton text="GHOST BUTTON" design="secondary" ></GhostButton>
            <h2>Secondary Variant</h2>
            <GhostButton text="GHOST BUTTON" design="secondary-variant" ></GhostButton>
            <h2>Success</h2>
            <GhostButton text="GHOST BUTTON" design="success" ></GhostButton>
            <h2>Error</h2>
            <GhostButton text="GHOST BUTTON" design="error" ></GhostButton>
            <h2>Warning</h2>
            <GhostButton text="GHOST BUTTON" design="warning" ></GhostButton>
            <h2>Info</h2>
            <GhostButton text="GHOST BUTTON" design="info" ></GhostButton>
            <h2>Accent Purple</h2>
            <GhostButton text="GHOST BUTTON" design="accent-purple" ></GhostButton>
            <h2>Accent Lavender</h2>
            <GhostButton text="GHOST BUTTON" design="accent-lavender" ></GhostButton>
            <h2>Accent Pink</h2>
            <GhostButton text="GHOST BUTTON" design="accent-pink" ></GhostButton>
        </div>
    ))
    .add('Ghost Button Gradient', () => (
        <div>
            <h2>Celestial</h2>
            <GhostButton text="GHOST BUTTON" design="celestial" ></GhostButton>
            <h2>Meridian</h2>
            <GhostButton text="GHOST BUTTON" design="meridian" ></GhostButton>
            <h2>By Design</h2>
            <GhostButton text="GHOST BUTTON" design="by-design" ></GhostButton>
            <h2>Ultra violet</h2>
            <GhostButton text="GHOST BUTTON" design="ultra-violet" ></GhostButton>
            <h2>Blue Ocean</h2>
            <GhostButton text="GHOST BUTTON" design="blue-ocean" ></GhostButton>
            <h2>Sunrise</h2>
            <GhostButton text="GHOST BUTTON" design="sunrise" ></GhostButton>
            <h2>Aubergin</h2>
            <GhostButton text="GHOST BUTTON" design="aubergin" ></GhostButton>
            <h2>Twitch</h2>
            <GhostButton text="GHOST BUTTON" design="twitch" ></GhostButton>
            <h2>Witching Hour</h2>
            <GhostButton text="GHOST BUTTON" design="witching-hour" ></GhostButton>
        </div>
    ))