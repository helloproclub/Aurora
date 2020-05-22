  
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/public/fonts.scss';
import OutlineButton from '../src/components/ButtonOutline';

storiesOf('Button Outline', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Outline Button Color Theme', () => (
        <div>
            <h2>Primary</h2>
            <OutlineButton text="OUTLINE BUTTON" design="primary" ></OutlineButton>
            <h2>Primary Variant</h2>
            <OutlineButton text="OUTLINE BUTTON" design="primary-variant" ></OutlineButton>
            <h2>Secondary</h2>
            <OutlineButton text="OUTLINE BUTTON" design="secondary" ></OutlineButton>
            <h2>Secondary Variant</h2>
            <OutlineButton text="OUTLINE BUTTON" design="secondary-variant" ></OutlineButton>
            <h2>Success</h2>
            <OutlineButton text="OUTLINE BUTTON" design="success" ></OutlineButton>
            <h2>Error</h2>
            <OutlineButton text="OUTLINE BUTTON" design="error" ></OutlineButton>
            <h2>Warning</h2>
            <OutlineButton text="OUTLINE BUTTON" design="warning" ></OutlineButton>
            <h2>Info</h2>
            <OutlineButton text="OUTLINE BUTTON" design="info" ></OutlineButton>
            <h2>Accent Purple</h2>
            <OutlineButton text="OUTLINE BUTTON" design="accent-purple" ></OutlineButton>
            <h2>Accent Lavender</h2>
            <OutlineButton text="OUTLINE BUTTON" design="accent-lavender" ></OutlineButton>
            <h2>Accent Pink</h2>
            <OutlineButton text="OUTLINE BUTTON" design="accent-pink" ></OutlineButton>
        </div>
    ))
    .add('Outline Button Gradient', () => (
        <div>
            <h2>Celestial</h2>
            <OutlineButton text="OUTLINE BUTTON" design="celestial" ></OutlineButton>
            <h2>Meridian</h2>
            <OutlineButton text="OUTLINE BUTTON" design="meridian" ></OutlineButton>
            <h2>By Design</h2>
            <OutlineButton text="OUTLINE BUTTON" design="by-design" ></OutlineButton>
            <h2>Ultra violet</h2>
            <OutlineButton text="OUTLINE BUTTON" design="ultra-violet" ></OutlineButton>
            <h2>Blue Ocean</h2>
            <OutlineButton text="OUTLINE BUTTON" design="blue-ocean" ></OutlineButton>
            <h2>Sunrise</h2>
            <OutlineButton text="OUTLINE BUTTON" design="sunrise" ></OutlineButton>
            <h2>Aubergin</h2>
            <OutlineButton text="OUTLINE BUTTON" design="aubergin" ></OutlineButton>
            <h2>Twitch</h2>
            <OutlineButton text="OUTLINE BUTTON" design="twitch" ></OutlineButton>
            <h2>Witching Hour</h2>
            <OutlineButton text="OUTLINE BUTTON" design="witching-hour" ></OutlineButton>
        </div>
    ))