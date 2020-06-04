import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/public/fonts.scss';

storiesOf('Typography', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('Article Title', () => (
        <div>
            <p className="article">Article Title</p>
        </div>
    ))
    .add('H1', () => (
        <div>
            <h1>Default</h1>
            <h1 className="regular">Regular</h1>
            <h1 className="semibold">Semibold</h1>
            <h1 className="bold">Bold</h1>
            <h1 className="extrabold">Extrabold</h1>
            <h1 className="italic">Italic</h1>
            <h1 className="italic-regular">Italic Regular</h1>
            <h1 className="italic-semibold">Italic Semibold</h1>
            <h1 className="italic-bold">Italic Bold</h1>
            <h1 className="italic-extrabold">Italic Extrabold</h1>
            <p className="body-big regular">Body Big</p>
            <p className="body-1 regular">Body 1</p>
            <p className="subtitle regular">Subtitle</p>
            <p className="button regular">Button</p>
            <p className="body-2 regular">Body 2</p>
            <p className="caption regular">Caption</p>
            <p className="overline regular">Overline</p>
        </div>
    ))
    .add('H2', () => (
        <div>
            <h2>Default</h2>
            <h2 className="regular">Regular</h2>
            <h2 className="semibold">Semibold</h2>
            <h2 className="bold">Bold</h2>
            <h2 className="extrabold">Extrabold</h2>
            <h2 className="italic">Italic</h2>
            <h2 className="italic-regular">Italic Regular</h2>
            <h2 className="italic-semibold">Italic Semibold</h2>
            <h2 className="italic-bold">Italic Bold</h2>
            <h2 className="italic-extrabold">Italic Extrabold</h2>
            <p className="body-big semibold">Body Big</p>
            <p className="body-1 semibold">Body 1</p>
            <p className="subtitle semibold">Subtitle</p>
            <p className="button semibold">Button</p>
            <p className="body-2 semibold">Body 2</p>
            <p className="caption semibold">Caption</p>
            <p className="overline semibold">Overline</p>
        </div>
    ))
    .add('H3', () => (
        <div>
            <h3>Default</h3>
            <h3 className="regular">Regular</h3>
            <h3 className="semibold">Semibold</h3>
            <h3 className="bold">Bold</h3>
            <h3 className="extrabold">Extrabold</h3>
            <h3 className="italic">Italic</h3>
            <h3 className="italic-regular">Italic Regular</h3>
            <h3 className="italic-semibold">Italic Semibold</h3>
            <h3 className="italic-bold">Italic Bold</h3>
            <h3 className="italic-extrabold">Italic Extrabold</h3>
            <p className="body-big bold">Body Big</p>
            <p className="body-1 bold">Body 1</p>
            <p className="subtitle bold">Subtitle</p>
            <p className="button bold">Button</p>
            <p className="body-2 bold">Body 2</p>
            <p className="caption bold">Caption</p>
            <p className="overline bold">Overline</p>
        </div>
    ))
    .add('H4', () => (
        <div>
            <h4>Default</h4>
            <h4 className="regular">Regular</h4>
            <h4 className="semibold">Semibold</h4>
            <h4 className="bold">Bold</h4>
            <h4 className="extrabold">Extrabold</h4>
            <h4 className="italic">Italic</h4>
            <h4 className="italic-regular">Italic Regular</h4>
            <h4 className="italic-semibold">Italic Semibold</h4>
            <h4 className="italic-bold">Italic Bold</h4>
            <h4 className="italic-extrabold">Italic Extrabold</h4>
            <p className="body-big extrabold">Body Big</p>
            <p className="body-1 extrabold">Body 1</p>
            <p className="subtitle extrabold">Subtitle</p>
            <p className="button extrabold">Button</p>
            <p className="body-2 extrabold">Body 2</p>
            <p className="caption extrabold">Caption</p>
            <p className="overline extrabold">Overline</p>
        </div>
    ))
    .add('H5', () => (
        <div>
            <h5>Default</h5>
            <h5 className="regular">Regular</h5>
            <h5 className="semibold">Semibold</h5>
            <h5 className="bold">Bold</h5>
            <h5 className="extrabold">Extrabold</h5>
            <h5 className="italic">Italic</h5>
            <h5 className="italic-regular">Italic Regular</h5>
            <h5 className="italic-semibold">Italic Semibold</h5>
            <h5 className="italic-bold">Italic Bold</h5>
            <h5 className="italic-extrabold">Italic Extrabold</h5>
            <p className="body-big italic">Body Big</p>
            <p className="body-1 italic">Body 1</p>
            <p className="subtitle italic">Subtitle</p>
            <p className="button italic">Button</p>
            <p className="body-2 italic">Body 2</p>
            <p className="caption italic">Caption</p>
            <p className="overline italic">Overline</p>
        </div>
    ))
    .add('body big', () => (
        <div>
            <p className="body-big">Body Big</p>
            <p className="body-big italic">Body Big Italic</p>
        </div>
    ))
    .add('body 1', () => (
        <div>
            <p className="body-1">Body 1</p>
            <p className="body-1 italic">Body 1 italic</p>
        </div>
    ))
    .add('subtitle', () => (
        <div>
            <p className="subtitle">Subtitle</p>
            <p className="subtitle italic">Subtitle Italic</p>
        </div>
    ))
    .add('button', () => (
        <div>
            <p className="button-txt">Button</p>
            <p className="button-txt italic">Button Italic</p>
        </div>
    ))
    .add('body 2', () => (
        <div>
            <p className="body-2">Body 2</p>
            <p className="body-2 italic">Body 2 italic</p>
        </div>
    ))
    .add('caption', () => (
        <div>
            <p className="caption">Caption</p>
            <p className="caption italic">Caption italic</p>
        </div>
    ))
    .add('overline', () => (
        <div>
            <p className="overline">Overline</p>
            <p className="caption italic">Overline italic</p>
        </div>
    ))
    .add('strong and important', () => (
        <div>
            <strong>Strong</strong>
            <i>important</i>
        </div>
    ))