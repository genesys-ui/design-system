import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Popover, Typography } from '@devoinc/genesys-ui';

Popover.displayName = 'Popover';
const meta: Meta<React.ComponentProps<typeof Popover>> = {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Popover>>;

export const Example: Story = {
  name: 'With arrow',
  args: {},
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    const popoverId = 'with-arrow';
    return (
      <Popover
        {...args}
        id={popoverId}
        arrowConfig={{
          component: ({ $placement, $size }) => (
            <Popover.Arrow $placement={$placement} $size={$size} />
          ),
        }}
      >
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-controls={popoverId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
          >
            TriggerElement
          </Button>
        )}
        <Popover.Panel padding="cmp-sm">
          <Typography.Paragraph>
            Explorations from which we spring citizens of distant epochs hearts
            of the stars something incredible is waiting to be known paroxysm of
            global death.
          </Typography.Paragraph>
        </Popover.Panel>
      </Popover>
    );
  },
};
