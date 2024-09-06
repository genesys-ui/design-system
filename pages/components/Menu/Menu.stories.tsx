import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@devoinc/genesys-ui';
import {
  GICalendarMonthDayPlannerEvents,
  GIDownload,
  GINetworkConnectionComputerFolder,
  GIPinBookmark,
  GITagPriceSale,
  GIToBack,
  GIUsersProfileGroupTwoShareSolid,
} from '@devoinc/genesys-icons';

Menu.displayName = 'Menu';

const meta: Meta<React.ComponentProps<typeof Menu>> = {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Menu>>;

export const Example: Story = {
  args: {
    children: [
      <Menu.Item key={1} icon={<GIToBack />} label="Open in a new tab" />,
      <Menu.Item
        key={2}
        icon={<GINetworkConnectionComputerFolder />}
        label="Network manager"
      />,
      <Menu.Item key={3} icon={<GIPinBookmark />} label="Set as default" />,
      <Menu.Item key={4} icon={<GITagPriceSale />} label="Manage user tags" />,
      <Menu.Separator key={5} />,
      <Menu.Item key={6} icon={<GIDownload />} label="Export to PDF" />,
      <Menu.Item
        key={7}
        icon={<GICalendarMonthDayPlannerEvents />}
        label="Add scheduled report"
      />,
      <Menu.Separator key={8} />,
      <Menu.Item key={9} label="Make Activeboard visible" />,
      <Menu.Item
        key={10}
        icon={<GIUsersProfileGroupTwoShareSolid />}
        label="Share with roles"
        state="disabled"
      />,
    ],
  },
  tags: ['isHidden'],
};
