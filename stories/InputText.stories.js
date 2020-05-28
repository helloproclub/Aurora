import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from '../src/components/InputText';

storiesOf('InputText', module)
    .addParameters({
        info: {
            source: true,
        }
    })

    .add('Default Fieldname', () => (
        <div>
            <InputText fieldName="Fieldname" borderColor="default" />
        </div>
    ))
    .add('Fieldname Focus', () => (
        <div>
            <InputText fieldName="Fieldname" borderColor="focus" />
        </div>
    ))