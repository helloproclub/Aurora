import React from 'react';
import { storiesOf } from '@storybook/react';
import FontColor from '../src/components/FontColor';

storiesOf('Font FontColor', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })

    .add('Color Palette', () => (
        <div className="container">
            <FontColor design="gray">
            </FontColor>
    
            <FontColor design="aqua">
            </FontColor>
    
            <FontColor design="green">
            </FontColor>
    
            <FontColor design="purple">
            </FontColor>
    
            <FontColor design="orange">
            </FontColor>
    
            <FontColor design="red">
            </FontColor>
    
            <FontColor design="black">
            </FontColor>
    
            <FontColor design="white">
            </FontColor>
    
            <FontColor design="blue">
            </FontColor>
    
            <FontColor design="lavender">
            </FontColor>
    
            <FontColor design="yellow">
            </FontColor>
    
            <FontColor design="pink">
            </FontColor>
        </div>
    ))

    .add('Color Theme', () => (
        <div className="container">
            <FontColor design="primary">
            </FontColor>
            
            <FontColor design="primary-variant">
            </FontColor>
            
            <FontColor design="secondary">
            </FontColor>
            
            <FontColor design="secondary-variant">
            </FontColor>
            
            <FontColor design="success">
            </FontColor>
            
            <FontColor design="error">
            </FontColor>
            
            <FontColor design="warning">
            </FontColor>
            
            <FontColor design="info">
            </FontColor>
            
            <FontColor design="accent-purple">
            </FontColor>
            
            <FontColor design="accent-lavender">
            </FontColor>
            
            <FontColor design="accent-pink">
            </FontColor>
            
            <FontColor design="typography-black">
            </FontColor>
            
            <FontColor design="typography-white">
            </FontColor>
            
            <FontColor design="typography-disable">
            </FontColor>
        </div>
    ))

    .add('Color Gradient', () => (
        <div className="container">
            <FontColor design="celestial">
            </FontColor>
            
            <FontColor design="meridian">
            </FontColor>
            
            <FontColor design="by-design">
            </FontColor>
            
            <FontColor design="ultra-violet">
            </FontColor>
            
            <FontColor design="blue-ocean">
            </FontColor>
            
            <FontColor design="sunrise">
            </FontColor>
            
            <FontColor design="aubergin">
            </FontColor>
            
            <FontColor design="twitch">
            </FontColor>
            
            <FontColor design="witching-hour">
            </FontColor>
        </div>
    ))