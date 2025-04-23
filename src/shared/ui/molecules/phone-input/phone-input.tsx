import { Image, TextInput } from 'react-native'
import { styled, useTheme } from '@shared/ui/theme'
import { TextInputProps } from 'react-native'
import { Images } from '@shared/ui/images'
import { forwardRef } from 'react'

const PhoneWrapper = styled.View`
  margin: 16px 0;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`

const PhoneInputWrapper = styled.View`
  padding: 14px 16px 14px 24px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.palette.content.primary};
  column-gap: 16px;
  flex-direction: row;
  align-items: center;
`

const Input = styled.TextInput.attrs(({ theme }) => {
  const inputProps: TextInputProps = {
    cursorColor: theme.palette.content.primary,
  }
  return inputProps
})<{ color: string }>`
  color: ${({ color }) => color};
  flex: 1;
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  letter-spacing: ${({ theme }) =>
    theme.typography.body15Regular.letterSpacing};
  line-height: ${({ theme }) => theme.typography.body15Regular.lineHeight};
`

type Props = {
  errorMessage?: string
  onChange?: TextInputProps['onChangeText']
  onNativeChange?: TextInputProps['onChange']
} & Omit<TextInputProps, 'onChange' | 'onChangeText'>

export const PhoneInput = forwardRef<TextInput, Props>(
  ({ onChange, onNativeChange, errorMessage, ...rest }, ref) => {
    const theme = useTheme()

    return (
      <PhoneWrapper>
        <PhoneInputWrapper>
          <Image source={Images.mts} />
          <Input
            ref={ref}
            placeholderTextColor={
              Boolean(errorMessage)
                ? theme.palette.indicator.error
                : theme.palette.text.tertiary
            }
            color={
              Boolean(errorMessage)
                ? theme.palette.indicator.error
                : theme.palette.text.primary
            }
            placeholder='Номер телефона'
            onChangeText={onChange}
            onChange={onNativeChange}
            keyboardType='number-pad'
            {...rest}
          />
        </PhoneInputWrapper>
      </PhoneWrapper>
    )
  },
)
