import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Typography', module)
    // use this for documentation
    .addParameters({
        info: {
            source: true
        }
    })
    .add('default', () => (
        <div>
            <p className="article">Article Title</p>
            <h1>H1 Head</h1>
            <h2>H2 Headline</h2>
            <h3>H3 Headline</h3>
            <h4>H4 Headline</h4>
            <h5>H5 Headline</h5>
            <p className="body-big">Body Big</p>
            <p className="body-1">Body 1</p>
            <p className="subtitle">Subtitle</p>
            <p className="button">Button</p>
            <p className="body-2">Body 2</p>
            <p className="caption">Caption</p>
            <p className="overline">Overline</p>
        </div>
    ))
    .add('regular', () => (
        <div>
            <p className="article regular">Article Title</p>
            <h1 className="regular">h1</h1>
            <h2 className="regular">h2</h2>
            <h3 className="regular">h3</h3>
            <h4 className="regular">h4</h4>
            <h5 className="regular">h5</h5>
            <p className="body-big regular">Body Big</p>
            <p className="body-1 regular">Body 1</p>
            <p className="subtitle regular">Subtitle</p>
            <p className="button regular">Button</p>
            <p className="body-2 regular">Body 2</p>
            <p className="caption regular">Caption</p>
            <p className="overline regular">Overline</p>
        </div>
    ))
    .add('semibold', () => (
        <div>
            <p className="article semibold">Article Title</p>
            <h1 className="semibold">h1</h1>
            <h2 className="semibold">h2</h2>
            <h3 className="semibold">h3</h3>
            <h4 className="semibold">h4</h4>
            <h5 className="semibold">h5</h5>
            <p className="body-big semibold">Body Big</p>
            <p className="body-1 semibold">Body 1</p>
            <p className="subtitle semibold">Subtitle</p>
            <p className="button semibold">Button</p>
            <p className="body-2 semibold">Body 2</p>
            <p className="caption semibold">Caption</p>
            <p className="overline semibold">Overline</p>
        </div>
    ))
    .add('bold', () => (
        <div>
            <p className="article bold">Article Title</p>
            <h1 className="bold">h1</h1>
            <h2 className="bold">h2</h2>
            <h3 className="bold">h3</h3>
            <h4 className="bold">h4</h4>
            <h5 className="bold">h5</h5>
            <p className="body-big bold">Body Big</p>
            <p className="body-1 bold">Body 1</p>
            <p className="subtitle bold">Subtitle</p>
            <p className="button bold">Button</p>
            <p className="body-2 bold">Body 2</p>
            <p className="caption bold">Caption</p>
            <p className="overline bold">Overline</p>
        </div>
    ))
    .add('extrabold', () => (
        <div>
            <p className="article extrabold">Article Title</p>
            <h1 className="extrabold">h1</h1>
            <h2 className="extrabold">h2</h2>
            <h3 className="extrabold">h3</h3>
            <h4 className="extrabold">h4</h4>
            <h5 className="extrabold">h5</h5>
            <p className="body-big extrabold">Body Big</p>
            <p className="body-1 extrabold">Body 1</p>
            <p className="subtitle extrabold">Subtitle</p>
            <p className="button extrabold">Button</p>
            <p className="body-2 extrabold">Body 2</p>
            <p className="caption extrabold">Caption</p>
            <p className="overline extrabold">Overline</p>
        </div>
    ))
    .add('italic', () => (
        <div>
            <p className="article italic">Article Title</p>
            <h1 className="italic">h1</h1>
            <h2 className="italic">h2</h2>
            <h3 className="italic">h3</h3>
            <h4 className="italic">h4</h4>
            <h5 className="italic">h5</h5>
            <p className="body-big italic">Body Big</p>
            <p className="body-1 italic">Body 1</p>
            <p className="subtitle italic">Subtitle</p>
            <p className="button italic">Button</p>
            <p className="body-2 italic">Body 2</p>
            <p className="caption italic">Caption</p>
            <p className="overline italic">Overline</p>
        </div>
    ))
    .add('italic-semibold', () => (
        <div>
            <p className="article italic-semibold">Article Title</p>
            <h1 className="italic-semibold">h1</h1>
            <h2 className="italic-semibold">h2</h2>
            <h3 className="italic-semibold">h3</h3>
            <h4 className="italic-semibold">h4</h4>
            <h5 className="italic-semibold">h5</h5>
            <p className="body-big italic-semibold">Body Big</p>
            <p className="body-1 italic-semibold">Body 1</p>
            <p className="subtitle italic-semibold">Subtitle</p>
            <p className="button italic-semibold">Button</p>
            <p className="body-2 italic-semibold">Body 2</p>
            <p className="caption italic-semibold">Caption</p>
            <p className="overline italic-semibold">Overline</p>
        </div>
    ))
    .add('italic-bold', () => (
        <div>
            <p className="article italic-bold">Article Title</p>
            <h1 className="italic-bold">h1</h1>
            <h2 className="italic-bold">h2</h2>
            <h3 className="italic-bold">h3</h3>
            <h4 className="italic-bold">h4</h4>
            <h5 className="italic-bold">h5</h5>
            <p className="body-big italic-bold">Body Big</p>
            <p className="body-1 italic-bold">Body 1</p>
            <p className="subtitle italic-bold">Subtitle</p>
            <p className="button italic-bold">Button</p>
            <p className="body-2 italic-bold">Body 2</p>
            <p className="caption italic-bold">Caption</p>
            <p className="overline italic-bold">Overline</p>
        </div>
    ))
    .add('italic-extrabold', () => (
        <div>
            <p className="article italic-extrabold">Article Title</p>
            <h1 className="italic-extrabold">h1</h1>
            <h2 className="italic-extrabold">h2</h2>
            <h3 className="italic-extrabold">h3</h3>
            <h4 className="italic-extrabold">h4</h4>
            <h5 className="italic-extrabold">h5</h5>
            <p className="body-big italic-extrabold">Body Big</p>
            <p className="body-1 italic-extrabold">Body 1</p>
            <p className="subtitle italic-extrabold">Subtitle</p>
            <p className="button italic-extrabold">Button</p>
            <p className="body-2 italic-extrabold">Body 2</p>
            <p className="caption italic-extrabold">Caption</p>
            <p className="overline italic-extrabold">Overline</p>
        </div>
    ))
