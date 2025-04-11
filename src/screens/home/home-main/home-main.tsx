import { IconChevronUp, IconRubs24 } from '@shared/ui/icons'
import { useTheme } from '@shared/ui/theme'
import { DepositInfo } from './molecules/deposit-info'
import { Accounts, Deposits } from './organisms'
import { HomePageTemplate } from './templates/home-page-template/home-page-template'

export const HomeMain = () => {
  const theme = useTheme()

  return (
    <HomePageTemplate
      refetch={() => null}
      isLoading={false}
      accountsSlot={
        <Accounts
          accounts={[
            {
              id: '1',
              title: 'Счет расчетный',
              description: '457 334,00 ₽',
              iconSlot: <IconRubs24 color={theme.palette.text.secondary} />,
              rightSlot: <IconChevronUp color={theme.palette.text.secondary} />,
            },
            {
              id: '2',
              title: 'Счет расчетный',
              description: '457 334,00 ₽',
              iconSlot: <IconRubs24 color={theme.palette.text.secondary} />,
              rightSlot: <IconChevronUp color={theme.palette.text.secondary} />,
            },
            {
              id: '3',
              title: 'Счет расчетный',
              description: '457 334,00 ₽',
              iconSlot: <IconRubs24 color={theme.palette.text.secondary} />,
              rightSlot: <IconChevronUp color={theme.palette.text.secondary} />,
            },
          ]}
        />
      }
      depositsSlot={
        <Deposits
          deposits={[
            {
              id: '1',
              title: 'Счет расчетный',
              description: '457 334,00 ₽',
              iconSlot: <IconRubs24 color={theme.palette.text.secondary} />,
              rightSlot: (
                <DepositInfo rate={'Ставка 7.65%'} date='до 31.08.2024' />
              ),
            },
            {
              id: '2',
              title: 'Счет расчетный',
              description: '457 334,00 ₽',
              iconSlot: <IconRubs24 color={theme.palette.text.secondary} />,
              rightSlot: <IconChevronUp color={theme.palette.text.secondary} />,
            },
            {
              id: '3',
              title: 'Счет расчетный',
              description: '457 334,00 ₽',
              iconSlot: <IconRubs24 color={theme.palette.text.secondary} />,
              rightSlot: <IconChevronUp color={theme.palette.text.secondary} />,
            },
          ]}
        />
      }
    />
  )
}
