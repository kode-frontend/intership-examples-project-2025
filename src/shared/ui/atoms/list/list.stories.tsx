import type { Meta, StoryObj } from '@storybook/react';
import { List } from './list';

const meta: Meta<typeof List> = {
  title: 'ui/organisms/List',
  component: List,
  args: {
    data: [
      {
        id: '2',
        label: 'ЖКХ',
        src: 'https://github.com/kode-frontend/files/raw/main/1_JKH.png',
        size: 24,
      },
      {
        id: '3',
        label: 'Интернет',
        src: 'https://github.com/kode-frontend/files/raw/main/1_Internet.png',
        size: 24,
      },
      {
        id: '1',
        label: 'Мобильная связь',
        src: 'https://github.com/kode-frontend/files/raw/main/1_mobile.png',
        size: 24,
      },
      {
        id: '11',
        label: 'МТС',
        src: 'https://github.com/kode-frontend/files/raw/main/MTS.png',
      },
      {
        id: '12',
        label: 'МегаФон',
        src: 'https://github.com/kode-frontend/files/raw/main/megafon.png',
      },
      {
        id: '13',
        label: 'Beeline',
        src: 'https://github.com/kode-frontend/files/raw/main/beeline.png',
      },
      {
        id: '14',
        label: 'Tele2',
        src: 'https://github.com/kode-frontend/files/raw/main/tele2.png',
      },
      {
        id: '15',
        label: 'Kode Mobile',
        src: 'https://github.com/kode-frontend/files/raw/main/kode.png',
      },
    ],
  },
};

export default meta;

type TListStory = StoryObj<typeof List>;

export const Default: TListStory = {
  render: args => (
    <List
      {...args}
      onPress={item => console.log('lis item --->t', item)}
    />
  ),
};
