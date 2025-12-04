import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, HFlex, IconButton } from '@devoinc/genesys-ui';
import { GILikeHeartFavoriteRatingLove } from '@devoinc/genesys-icons';

const Template: React.FC = () => null;

const meta: Meta<React.ComponentProps<typeof Template>> = {
  title: 'Patterns/Loading states',
  component: Template,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Template>>;

export const IconButtonLoading: Story = {
  tags: ['isHidden'],
  render: () => (
    <HFlex spacing="cmp-md">
      <HFlex.Item>
        <IconButton
          title="Add to favorites"
          icon={<GILikeHeartFavoriteRatingLove />}
        />
      </HFlex.Item>
      <HFlex.Item>
        <IconButton
          title="Adding..."
          state="loading"
          icon={<GILikeHeartFavoriteRatingLove />}
        />
      </HFlex.Item>
    </HFlex>
  ),
};

export const ButtonTextLoading: Story = {
  tags: ['isHidden'],
  render: () => (
    <HFlex spacing="cmp-md">
      <HFlex.Item>
        <Button>Add to favorites</Button>
      </HFlex.Item>
      <HFlex.Item>
        <Button state="loading">Adding to favorites...</Button>
      </HFlex.Item>
    </HFlex>
  ),
};

export const ButtonIconTextLoading: Story = {
  tags: ['isHidden'],
  render: () => (
    <HFlex spacing="cmp-md">
      <HFlex.Item>
        <Button icon={<GILikeHeartFavoriteRatingLove />}>
          Add to favorites...
        </Button>
      </HFlex.Item>
      <HFlex.Item>
        <Button state="loading" icon={<GILikeHeartFavoriteRatingLove />}>
          Adding to favorites...
        </Button>
      </HFlex.Item>
    </HFlex>
  ),
};
