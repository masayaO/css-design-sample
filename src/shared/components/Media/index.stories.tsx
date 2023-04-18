import { Meta, StoryObj } from '@storybook/react';
import Media from './index';

const meta: Meta<typeof Media> = {
  title: 'shared/components/Media',
  component: Media,
};

export default meta;

type Story = StoryObj<typeof Media>;

export const DefaultButton: Story = {};
