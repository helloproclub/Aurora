import React from 'react';
import { storiesOf } from '@storybook/react';
import FontColor from '../src/components/FontColor';

storiesOf('Font Color', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })

    .add('Color Palette', () => (
        <div className="container">
            <FontColor fontColor="default">
            </FontColor>

            <FontColor fontColor="gray">
            </FontColor>
    
            <FontColor fontColor="aqua">
            </FontColor>
    
            <FontColor fontColor="green">
            </FontColor>
    
            <FontColor fontColor="purple">
            </FontColor>
    
            <FontColor fontColor="orange">
            </FontColor>
    
            <FontColor fontColor="red">
            </FontColor>
    
            <FontColor fontColor="black">
            </FontColor>
    
            <FontColor fontColor="white">
            </FontColor>
    
            <FontColor fontColor="blue">
            </FontColor>
    
            <FontColor fontColor="lavender">
            </FontColor>
    
            <FontColor fontColor="yellow">
            </FontColor>
    
            <FontColor fontColor="pink">
            </FontColor>
        </div>
    ))

    .add('Color Theme', () => (
        <div className="container">
            <FontColor fontColor="primary">
            </FontColor>
            
            <FontColor fontColor="primary-variant">
            </FontColor>
            
            <FontColor fontColor="secondary">
            </FontColor>
            
            <FontColor fontColor="secondary-variant">
            </FontColor>
            
            <FontColor fontColor="success">
            </FontColor>
            
            <FontColor fontColor="error">
            </FontColor>
            
            <FontColor fontColor="warning">
            </FontColor>
            
            <FontColor fontColor="info">
            </FontColor>
            
            <FontColor fontColor="accent-purple">
            </FontColor>
            
            <FontColor fontColor="accent-lavender">
            </FontColor>
            
            <FontColor fontColor="accent-pink">
            </FontColor>
            
            <FontColor fontColor="typography-black">
            </FontColor>
            
            <FontColor fontColor="typography-white">
            </FontColor>
            
            <FontColor fontColor="typography-disable">
            </FontColor>
        </div>
    ))

    .add('Color Gradient', () => (
        <div className="container">
            <FontColor fontColor="celestial">
            </FontColor>
            
            <FontColor fontColor="meridian">
            </FontColor>
            
            <FontColor fontColor="by-fontColor">
            </FontColor>
            
            <FontColor fontColor="ultra-violet">
            </FontColor>
            
            <FontColor fontColor="blue-ocean">
            </FontColor>
            
            <FontColor fontColor="sunrise">
            </FontColor>
            
            <FontColor fontColor="aubergin">
            </FontColor>
            
            <FontColor fontColor="twitch">
            </FontColor>
            
            <FontColor fontColor="witching-hour">
            </FontColor>
        </div>
    ))