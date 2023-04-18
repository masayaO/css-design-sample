import { Meta, StoryObj } from '@storybook/react';
import BackdropFilterBox from './index';

const meta: Meta<typeof BackdropFilterBox> = {
  title: 'shared/components/BackdropFilterBox',
  component: BackdropFilterBox,
};

export default meta;

type Story = StoryObj<typeof BackdropFilterBox>;

export const DefaultButton: Story = {};
