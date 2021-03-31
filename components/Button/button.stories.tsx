import React from 'react';
import Button, {ButtonIconPositions, ButtonColors} from './button';
import {text, select, withKnobs, boolean} from '@storybook/addon-knobs';
import { Favorite } from '@material-ui/icons';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Primary = () => (
  <Button
    color={select('color', ButtonColors, ButtonColors[0])}
    icon={Favorite}
    iconPosition={select('iconPosition', ButtonIconPositions, ButtonIconPositions[0])}
    showIcon={boolean('showIcon', true)}
    disabled={boolean('disabled', false)}>
    {text('children', 'CTA')}
  </Button>
);
