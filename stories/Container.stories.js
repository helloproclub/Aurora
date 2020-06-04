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
    .add('Color Theme', () => (
        <div className="container">
            <Container backgroundColor="primary"></Container>
            <Container backgroundColor="primary-variant"></Container>
            <Container backgroundColor="secondary"></Container>
            <Container backgroundColor="secondary-variant"></Container>
            <Container backgroundColor="success"></Container>
            <Container backgroundColor="error"></Container>
            <Container backgroundColor="warning"></Container>
            <Container backgroundColor="info"></Container>
            <Container backgroundColor="accent-purple"></Container>
            <Container backgroundColor="accent-lavender"></Container>
            <Container backgroundColor="accent-pink"></Container>
            <Container backgroundColor="typography-black"></Container>
            <Container backgroundColor="typography-white"></Container>
            <Container backgroundColor="typography-border"></Container>
            <Container backgroundColor="typography-disable"></Container>
        </div>
    ))
    .add('Color Gradient', () => (
        <div className="container">
            <Container backgroundColor="gradient-celestial"></Container>
            <Container backgroundColor="gradient-meridian"></Container>
            <Container backgroundColor="gradient-by-design"></Container>
            <Container backgroundColor="gradient-ultra-violet"></Container>
            <Container backgroundColor="gradient-blue-ocean"></Container>
            <Container backgroundColor="gradient-sunrise"></Container>
            <Container backgroundColor="gradient-aubergin"></Container>
            <Container backgroundColor="gradient-twitch"></Container>
            <Container backgroundColor="gradient-witching-hour"></Container>
        </div>
    ))