import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'ui/atoms/Icon',
  component: Icon,
  args: {
    src: 'https://reactnative.dev/img/tiny_logo.png',
  },
};

export default meta;

type TIconStory = StoryObj<typeof Icon>;

export const Default: TIconStory = {}
export const SmallImage: TIconStory = {
  render: args => <Icon {...args} iconSize={16} />
}
