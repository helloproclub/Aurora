import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../src/components/Container';

storiesOf('Container', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true,
        },
    })
    .add('Color Palette', () => (
        <div className="container">
            <Container backgroundColor="background-default"></Container>
            <Container backgroundColor="background-gray"></Container>
            <Container backgroundColor="background-aqua"></Container>
            <Container backgroundColor="background-green"></Container>
            <Container backgroundColor="background-purple"></Container>
            <Container backgroundColor="background-orange"></Container>
            <Container backgroundColor="background-red"></Container>
            <Container backgroundColor="background-black"></Container>
            <Container backgroundColor="background-white"></Container>
            <Container backgroundColor="background-blue"></Container>
            <Container backgroundColor="background-lavender"></Container>
            <Container backgroundColor="background-yellow"></Container>
            <Container backgroundColor="background-pink"></Container>
        </div>
    ))
    .add('Color Theme', () => (
        <div className="container">
            <Container backgroundColor="background-primary"></Container>
            <Container backgroundColor="background-primary-variant"></Container>
            <Container backgroundColor="background-secondary"></Container>
            <Container backgroundColor="background-secondary-variant"></Container>
            <Container backgroundColor="background-success"></Container>
            <Container backgroundColor="background-error"></Container>
            <Container backgroundColor="background-warning"></Container>
            <Container backgroundColor="background-info"></Container>
            <Container backgroundColor="background-accent-purple"></Container>
            <Container backgroundColor="background-accent-lavender"></Container>
            <Container backgroundColor="background-accent-pink"></Container>
            <Container backgroundColor="background-typography-black"></Container>
            <Container backgroundColor="background-typography-white"></Container>
            <Container backgroundColor="background-typography-disable"></Container>
        </div>
    ))
    .add('Color Gradient', () => (
        <div className="container">
            <Container backgroundColor="background-celestial"></Container>
            <Container backgroundColor="background-meridian"></Container>
            <Container backgroundColor="background-by-design"></Container>
            <Container backgroundColor="background-ultra-violet"></Container>
            <Container backgroundColor="background-blue-ocean"></Container>
            <Container backgroundColor="background-sunrise"></Container>
            <Container backgroundColor="background-aubergin"></Container>
            <Container backgroundColor="background-twitch"></Container>
            <Container backgroundColor="background-witching-hour"></Container>
        </div>
    ))