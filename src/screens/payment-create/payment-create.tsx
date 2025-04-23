import { Typography } from '@shared/ui/atoms'
import { IconChevronDown } from '@shared/ui/icons'
import { Images } from '@shared/ui/images'
import { PhoneInput, PrimaryButton } from '@shared/ui/molecules'
import { styled, useTheme } from '@shared/ui/theme'
import { Image, ListRenderItem, FlatList, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { chips } from './model/constants'
import { MoneyInput } from './ui'
import { KeyboardView } from '@shared/ui/templates'
import { getMaskedPhone, moneyString } from './model'
import { Control, Controller } from 'react-hook-form'
import { TPaymentCreateForm } from './types'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

const SecondaryView = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`

const HeaderWrapper = styled(SecondaryView)`
  padding: 16px;
`

const CardWrapper = styled(SecondaryView)`
  column-gap: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`

const CardContentWrapper = styled.View`
  row-gap: 4px;
  flex: 1;
`

const MoneyChip = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.content.secondary};
  padding: 6px 14px;
  border-radius: 14px;
`

const FlatListWrapper = styled(SecondaryView)`
  padding: 8px 0 16px 16px;
`

const CacheBackWrapper = styled(SecondaryView)`
  padding: 16px 16px 20px;
`

const ActionButton = styled(PrimaryButton)<{ bottomInset: number }>`
  margin: 0 16px ${({ bottomInset }) => bottomInset + 16}px;
`

const Header = (args: { title: string }) => {
  const { title } = args
  const theme = useTheme()

  return (
    <HeaderWrapper>
      <Typography variant='body15Semibold' color={theme.palette.text.tertiary}>
        {title}
      </Typography>
    </HeaderWrapper>
  )
}

type Props = {
  control: Control<TPaymentCreateForm, any, TPaymentCreateForm>
  moneyOnCard: string
  cacheBackString: string
  onChipPress: (value: number) => void
  onSubmitPress: () => void
}

export const PaymentCreate = ({
  control,
  moneyOnCard,
  cacheBackString,
  onChipPress,
  onSubmitPress,
}: Props) => {
  const theme = useTheme()
  const { bottom } = useSafeAreaInsets()

  const renderItem: ListRenderItem<number> = ({ item }) => {
    const moneyChip = moneyString(item)

    return (
      <MoneyChip onPress={() => onChipPress(item)}>
        <Typography variant='caption1' color={theme.palette.text.secondary}>
          {moneyChip}
        </Typography>
      </MoneyChip>
    )
  }

  return (
    <KeyboardView>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}>
        <Wrapper>
          <Header title='Карта для оплаты' />
          <CardWrapper>
            <Image source={Images.visa} />
            <CardContentWrapper>
              <Typography variant='body15Regular'>Карта зарплатная</Typography>
              <Typography variant='caption1'>{moneyOnCard}</Typography>
            </CardContentWrapper>
            <IconChevronDown color={theme.palette.content.tertiary} />
          </CardWrapper>

          <Controller
            control={control}
            name='phone'
            render={({ field, fieldState }) => {
              return (
                <PhoneInput
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )
            }}
          />

          <Header title='Сумма' />
          <MoneyInput />
          {cacheBackString.length ? (
            <CacheBackWrapper>
              <Typography
                variant='caption1'
                color={theme.palette.text.secondary}>
                {cacheBackString}
              </Typography>
            </CacheBackWrapper>
          ) : (
            <FlatListWrapper>
              <FlatList
                horizontal
                data={chips}
                renderItem={renderItem}
                contentContainerStyle={{ columnGap: 16 }}
                showsHorizontalScrollIndicator={false}
              />
            </FlatListWrapper>
          )}

          <View style={{ flex: 1 }} />
          <ActionButton bottomInset={bottom} onPress={onSubmitPress}>
            Продолжить
          </ActionButton>
        </Wrapper>
      </ScrollView>
    </KeyboardView>
  )
}
