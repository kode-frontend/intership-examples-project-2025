import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './list-item';

const meta: Meta<typeof ListItem> = {
  title: 'ui/molecules/ListItem',
  component: ListItem,
  args: {
    id: '11',
    label: 'МТС',
    src: 'https://github.com/kode-frontend/files/raw/main/MTS.png',
    onPress: console.log,
  },
};

export default meta;

type TListItemStory = StoryObj<typeof ListItem>;

export const Default: TListItemStory = {};
export const SmallImage: TListItemStory = {
  render: args => (
    <ListItem
      id="10"
      label="Mobile"
      iconSize={24}
      src="https://github.com/kode-frontend/files/raw/main/1_mobile.png"
      onPress={() => {}}
    />
  ),
};
