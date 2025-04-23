import { styled, useTheme } from '@shared/ui/theme'
import { moneyString } from '../../model'
import { TextInputProps } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'
import { TPaymentCreateForm } from '../../types'

const MoneyWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 8px 16px 0;
  row-gap: 14px;
`

const Input = styled.TextInput.attrs(({ theme }) => {
  const inputProps: TextInputProps = {
    placeholderTextColor: theme.palette.text.tertiary,
    cursorColor: theme.palette.content.primary,
  }
  return inputProps
})`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: ${({ theme }) => theme.typography.title.size};
  letter-spacing: ${({ theme }) => theme.typography.title.letterSpacing};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
`

const Border = styled.View<{ backgroundColor: string }>`
  height: 1px;
  border-radius: 0.5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

type Props = {}

export const MoneyInput = () => {
  const theme = useTheme()
  const { control, formState } = useFormContext<TPaymentCreateForm>()

  const isError = Boolean(formState.errors.money)

  return (
    <MoneyWrapper>
      <Controller
        control={control}
        name='money'
        render={({ field }) => {
          return (
            <Input
              placeholder={moneyString(0)}
              keyboardType='number-pad'
              {...field}
              onChangeText={field.onChange}
            />
          )
        }}
      />

      <Border
        backgroundColor={
          isError
            ? theme.palette.indicator.error
            : theme.palette.content.secondary
        }
      />
    </MoneyWrapper>
  )
}
