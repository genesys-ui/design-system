import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ColorPicker } from '@devoinc/genesys-ui-color';

ColorPicker.displayName = 'ColorPicker';

const meta: Meta<React.ComponentProps<typeof ColorPicker>> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ColorPicker>>;

export const Example: Story = {
  args: {
    colorIndicatorType: 'circle',
    defaultValue: '#000',
    id: 'story-case',
    label: 'Label for story',
    labelPosition: 'top',
    liveUpdate: false,
    size: 'md',
    status: 'base',
  },
  tags: ['isHidden'],
};
