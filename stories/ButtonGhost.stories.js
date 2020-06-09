  
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
    .add('Ghost Button', () => (
        <div>
            <GhostButton text="GHOST BUTTON"></GhostButton>
        </div>
    ))
    .add('Ghost Button Active', () => (
        <div>
        <button 
            onClick={ () => onPressed() }  
            className={`btn`}
            style={{background: "#FC8412",borderRadius: "8px", boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.05)",color: "white"}}
        >
           GHOST BUTTON
            </button> 
        </div>
    ))