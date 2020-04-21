import React from 'react';
import { storiesOf } from '@storybook/react';
import BackgroundColor from '../src/components/BackgroundColor';

storiesOf('Background Color', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Color Palette', () => (
        <div className="container">
            <BackgroundColor design="background-gray">
            </BackgroundColor>

            <BackgroundColor design="background-aqua">
            </BackgroundColor>

            <BackgroundColor design="background-green">
            </BackgroundColor>

            <BackgroundColor design="background-purple">
            </BackgroundColor>

            <BackgroundColor design="background-orange">
            </BackgroundColor>

            <BackgroundColor design="background-red">
            </BackgroundColor>

            <BackgroundColor design="background-black">
            </BackgroundColor>

            <BackgroundColor design="background-white">
            </BackgroundColor>

            <BackgroundColor design="background-blue">
            </BackgroundColor>

            <BackgroundColor design="background-lavender">
            </BackgroundColor>

            <BackgroundColor design="background-yellow">
            </BackgroundColor>

            <BackgroundColor design="background-pink">
            </BackgroundColor>
        </div>
    ))

    .add('Color Theme', () => (
        <div className="container">
            <BackgroundColor design="background-primary">
            </BackgroundColor>
            
            <BackgroundColor design="background-primary-variant">
            </BackgroundColor>
            
            <BackgroundColor design="background-secondary">
            </BackgroundColor>
            
            <BackgroundColor design="background-secondary-variant">
            </BackgroundColor>
            
            <BackgroundColor design="background-success">
            </BackgroundColor>
            
            <BackgroundColor design="background-error">
            </BackgroundColor>
            
            <BackgroundColor design="background-warning">
            </BackgroundColor>
            
            <BackgroundColor design="background-info">
            </BackgroundColor>
            
            <BackgroundColor design="background-accent-purple">
            </BackgroundColor>
            
            <BackgroundColor design="background-accent-lavender">
            </BackgroundColor>
            
            <BackgroundColor design="background-accent-pink">
            </BackgroundColor>
            
            <BackgroundColor design="background-typography-black">
            </BackgroundColor>
            
            <BackgroundColor design="background-typography-white">
            </BackgroundColor>
            
            <BackgroundColor design="background-typography-disable">
            </BackgroundColor>
        </div>
    ))

    .add('Color Gradient', () => (
        <div className="container">
            <BackgroundColor design="background-celestial">
            </BackgroundColor>
            
            <BackgroundColor design="background-meridian">
            </BackgroundColor>
            
            <BackgroundColor design="background-by-design">
            </BackgroundColor>
            
            <BackgroundColor design="background-ultra-violet">
            </BackgroundColor>
            
            <BackgroundColor design="background-blue-ocean">
            </BackgroundColor>
            
            <BackgroundColor design="background-sunrise">
            </BackgroundColor>
            
            <BackgroundColor design="background-aubergin">
            </BackgroundColor>
            
            <BackgroundColor design="background-twitch">
            </BackgroundColor>
            
            <BackgroundColor design="background-witching-hour">
            </BackgroundColor>
        </div>
    ))