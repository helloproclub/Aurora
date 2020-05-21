import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/public/fonts.scss';
import GhostButton from '../src/components/ButtonGhost';
import OutlineButton from '../src/components/ButtonOutline';

storiesOf('Button', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Ghost Button Color Theme', () => (
        <div>
            <h2>Primary</h2>
            <GhostButton text="GHOST BUTTON" design="primary" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="primary" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="primary" size="large"></GhostButton>
            <h2>Primary Variant</h2>
            <GhostButton text="GHOST BUTTON" design="primary-variant" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="primary-variant" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="primary-variant" size="large"></GhostButton>
            <h2>Secondary</h2>
            <GhostButton text="GHOST BUTTON" design="secondary" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="secondary" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="secondary" size="large"></GhostButton>
            <h2>Secondary Variant</h2>
            <GhostButton text="GHOST BUTTON" design="secondary-variant" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="secondary-variant" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="secondary-variant" size="large"></GhostButton>
            <h2>Success</h2>
            <GhostButton text="GHOST BUTTON" design="success" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="success" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="success" size="large"></GhostButton>
            <h2>Error</h2>
            <GhostButton text="GHOST BUTTON" design="error" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="error" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="error" size="large"></GhostButton>
            <h2>Warning</h2>
            <GhostButton text="GHOST BUTTON" design="warning" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="warning" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="warning" size="large"></GhostButton>
            <h2>Info</h2>
            <GhostButton text="GHOST BUTTON" design="info" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="info" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="info" size="large"></GhostButton>
            <h2>Accenct Purple</h2>
            <GhostButton text="GHOST BUTTON" design="accent-purple" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="accent-purple" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="accent-purple" size="large"></GhostButton>
            <h2>Accenct Lavender</h2>
            <GhostButton text="GHOST BUTTON" design="accent-lavender" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="accent-lavender" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="accent-lavender" size="large"></GhostButton>
            <h2>Accenct Pink</h2>
            <GhostButton text="GHOST BUTTON" design="accent-pink" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="accent-pink" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="accent-pink" size="large"></GhostButton>
        </div>
    ))
    .add('Ghost Button Gradient', () => (
        <div>
            <h2>Celestial</h2>
            <GhostButton text="GHOST BUTTON" design="celestial" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="celestial" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="celestial" size="large"></GhostButton>
            <h2>Meridian</h2>
            <GhostButton text="GHOST BUTTON" design="meridian" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="meridian" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="meridian" size="large"></GhostButton>
            <h2>By Design</h2>
            <GhostButton text="GHOST BUTTON" design="by-design" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="by-design" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="by-design" size="large"></GhostButton>
            <h2>Ultra violet</h2>
            <GhostButton text="GHOST BUTTON" design="ultra-violet" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="ultra-violet" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="ultra-violet" size="large"></GhostButton>
            <h2>Blue Ocean</h2>
            <GhostButton text="GHOST BUTTON" design="blue-ocean" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="blue-ocean" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="blue-ocean" size="large"></GhostButton>
            <h2>Sunrise</h2>
            <GhostButton text="GHOST BUTTON" design="sunrise" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="sunrise" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="sunrise" size="large"></GhostButton>
            <h2>Aubergin</h2>
            <GhostButton text="GHOST BUTTON" design="aubergin" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="aubergin" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="aubergin" size="large"></GhostButton>
            <h2>Twitch</h2>
            <GhostButton text="GHOST BUTTON" design="twitch" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="twitch" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="twitch" size="large"></GhostButton>
            <h2>Witching Hour</h2>
            <GhostButton text="GHOST BUTTON" design="witching-hour" size="small"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="witching-hour" size="medium"></GhostButton>
            <GhostButton text="GHOST BUTTON" design="witching-hour" size="large"></GhostButton>
        </div>
    ))
    .add('Button Outline Color Theme', () => (
        <div>
            <h2>Primary</h2>
            <OutlineButton text="OUTLINE BUTTON" design="primary" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="primary" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="primary" size="large"></OutlineButton>
            <h2>Primary Variant</h2>
            <OutlineButton text="OUTLINE BUTTON" design="primary-variant" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="primary-variant" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="primary-variant" size="large"></OutlineButton>
            <h2>Secondary</h2>
            <OutlineButton text="OUTLINE BUTTON" design="secondary" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="secondary" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="secondary" size="large"></OutlineButton>
            <h2>Secondary Variant</h2>
            <OutlineButton text="OUTLINE BUTTON" design="secondary-variant" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="secondary-variant" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="secondary-variant" size="large"></OutlineButton>
            <h2>Success</h2>
            <OutlineButton text="OUTLINE BUTTON" design="success" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="success" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="success" size="large"></OutlineButton>
            <h2>Error</h2>
            <OutlineButton text="OUTLINE BUTTON" design="error" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="error" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="error" size="large"></OutlineButton>
            <h2>Warning</h2>
            <OutlineButton text="OUTLINE BUTTON" design="warning" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="warning" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="warning" size="large"></OutlineButton>
            <h2>Info</h2>
            <OutlineButton text="OUTLINE BUTTON" design="info" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="info" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="info" size="large"></OutlineButton>
            <h2>Accenct Purple</h2>
            <OutlineButton text="OUTLINE BUTTON" design="accent-purple" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="accent-purple" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="accent-purple" size="large"></OutlineButton>
            <h2>Accenct Lavender</h2>
            <OutlineButton text="OUTLINE BUTTON" design="accent-lavender" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="accent-lavender" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="accent-lavender" size="large"></OutlineButton>
            <h2>Accenct Pink</h2>
            <OutlineButton text="OUTLINE BUTTON" design="accent-pink" size="small"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="accent-pink" size="medium"></OutlineButton>
            <OutlineButton text="OUTLINE BUTTON" design="accent-pink" size="large"></OutlineButton>
        </div>
    ))
    .add('Outline Button Gradient', () => (
        <div>
            <h2>Celestial</h2>
            <OutlineButton text="GHOST BUTTON" design="celestial" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="celestial" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="celestial" size="large"></OutlineButton>
            <h2>Meridian</h2>
            <OutlineButton text="GHOST BUTTON" design="meridian" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="meridian" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="meridian" size="large"></OutlineButton>
            <h2>By Design</h2>
            <OutlineButton text="GHOST BUTTON" design="by-design" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="by-design" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="by-design" size="large"></OutlineButton>
            <h2>Ultra violet</h2>
            <OutlineButton text="GHOST BUTTON" design="ultra-violet" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="ultra-violet" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="ultra-violet" size="large"></OutlineButton>
            <h2>Blue Ocean</h2>
            <OutlineButton text="GHOST BUTTON" design="blue-ocean" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="blue-ocean" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="blue-ocean" size="large"></OutlineButton>
            <h2>Sunrise</h2>
            <OutlineButton text="GHOST BUTTON" design="sunrise" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="sunrise" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="sunrise" size="large"></OutlineButton>
            <h2>Aubergin</h2>
            <OutlineButton text="GHOST BUTTON" design="aubergin" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="aubergin" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="aubergin" size="large"></OutlineButton>
            <h2>Twitch</h2>
            <OutlineButton text="GHOST BUTTON" design="twitch" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="twitch" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="twitch" size="large"></OutlineButton>
            <h2>Witching Hour</h2>
            <OutlineButton text="GHOST BUTTON" design="witching-hour" size="small"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="witching-hour" size="medium"></OutlineButton>
            <OutlineButton text="GHOST BUTTON" design="witching-hour" size="large"></OutlineButton>
        </div>
    ))

