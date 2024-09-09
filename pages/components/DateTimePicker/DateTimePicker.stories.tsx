import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';

DateTimePicker.displayName = 'DateTimePicker';
const meta: Meta<React.ComponentProps<typeof DateTimePicker>> = {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof DateTimePicker>>;

export const Example: Story = {
  args: {
    size: 'md',
    value: new Date().getTime(),
  },
  render: (args) =>
    ((args) => {
      const [value, setValue] = React.useState(args.value);
      return (
        <DateTimePicker
          {...args}
          value={value}
          onChange={(ts: number) => {
            setValue(ts);
          }}
        />
      );
    })(args),
  tags: ['isHidden'],
};
