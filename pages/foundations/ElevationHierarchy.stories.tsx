import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Panel, Typography, HFlex, Elevation } from '@devoinc/genesys-ui';

type Props = {
  level: Elevation;
  text: string;
};

const ElevationBox: React.FC<Props> = ({ level, text }) => (
  <Box margin="cmp-xxl 0">
    <Panel elevation={level} heightScheme={{ height: '10rem' }}>
      <HFlex alignItems="center" justifyContent="center" height="100%">
        <Typography.Paragraph textAlign="center">{text}</Typography.Paragraph>
      </HFlex>
    </Panel>
  </Box>
);

const meta: Meta<Props> = {
  title: 'Foundations/Elevation hierarchy',
  component: ElevationBox,
};

export default meta;
type Story = StoryObj<Props>;

export const ElevationBoxGroundLevel: Story = {
  args: { level: 'ground', text: 'Ground level' },
};

export const ElevationBoxRaisedLevel: Story = {
  args: { level: 'raised', text: 'Raised level' },
};

export const ElevationBoxStickyBottomLevel: Story = {
  args: { level: 'stickyBottom', text: 'Sticky bottom level' },
};

export const ElevationBoxStickyTopLevel: Story = {
  args: { level: 'stickyTop', text: 'Sticky top level' },
};

export const ElevationBoxStickyLeftLevel: Story = {
  args: { level: 'stickyLeft', text: 'Sticky left level' },
};

export const ElevationBoxStickyRightLevel: Story = {
  args: { level: 'stickyRight', text: 'Sticky right level' },
};

export const ElevationBoxActivatedLevel: Story = {
  args: { level: 'activated', text: 'Activated level' },
};

export const ElevationBoxDraggableLevel: Story = {
  args: { level: 'draggable', text: 'Draggable level' },
};

export const ElevationBoxOverlayLevel: Story = {
  args: { level: 'overlay', text: 'Overlay level' },
};

export const ElevationBoxPopOutLevel: Story = {
  args: { level: 'popOut', text: 'Pop-out level' },
};
