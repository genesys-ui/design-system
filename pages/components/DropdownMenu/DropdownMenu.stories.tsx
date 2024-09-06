import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Menu, Popover } from '@devoinc/genesys-ui';

Menu.displayName = 'Menu';

const meta: Meta<React.ComponentProps<typeof Menu>> = {
  title: 'Components/DropdownMenu',
  component: Menu,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Menu>>;

export const Example: Story = {
  render: () => {
    const popoverId = 'base';
    return (
      <Popover id={popoverId} placement="bottom-start">
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
        <Popover.Panel>
          <Menu>
            <Menu.Item label="Option 1" />
            <Menu.Item label="Option 2" />
            <Menu.Item label="Option 3" />
          </Menu>
        </Popover.Panel>
      </Popover>
    );
  },
  tags: ['isHidden'],
};
