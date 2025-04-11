import type { Meta, StoryObj } from '@storybook/react'

import { Deposits } from './deposit'
import { IconChevronUp, IconRubs24 } from '@shared/ui/icons'
import { darkTheme } from '@shared/ui/theme'
import { DepositInfo } from '../../molecules/deposit-info'

const meta: Meta<typeof Deposits> = {
  component: Deposits,
  title: 'Deposits',
}

export default meta

type Story = StoryObj<typeof Deposits>

export const Default: Story = {
  args: {
    deposits: [
      {
        id: '1',
        title: 'Счет расчетный',
        description: '457 334,00 ₽',
        iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
        rightSlot: <DepositInfo rate={'Ставка 7.65%'} date='до 31.08.2024' />,
      },
      {
        id: '2',
        title: 'Счет расчетный',
        description: '457 334,00 ₽',
        iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
        rightSlot: <IconChevronUp color={darkTheme.palette.text.secondary} />,
      },
      {
        id: '3',
        title: 'Счет расчетный',
        description: '457 334,00 ₽',
        iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
        rightSlot: <IconChevronUp color={darkTheme.palette.text.secondary} />,
      },
    ],
  },
}
