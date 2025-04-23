import { styled, useTheme } from '@shared/ui/theme'
import { TypographyVariants } from '@shared/ui/theme/types'
import React, { ReactNode } from 'react'
import { StyleProp, TextStyle } from 'react-native'

type TTypographyAlignment = 'center' | 'left' | 'right'

const TextVariant = styled.Text<{
  $variant: TypographyVariants
  $align?: TTypographyAlignment
  color?: string
}>`
  font-family: ${({ theme, $variant }) =>
    theme.typography[$variant].fontFamily};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].size};
  letter-spacing: ${({ theme, $variant }) =>
    theme.typography[$variant].letterSpacing};
  line-height: ${({ theme, $variant }) =>
    theme.typography[$variant].lineHeight};
  color: ${({ color }) => color};
  ${({ $align }) => $align && `text-align: ${$align};`}
`

type Props = {
  children: ReactNode
  align?: TTypographyAlignment
  variant?: TypographyVariants
  style?: StyleProp<TextStyle>
  numberOfLines?: number
  color?: string
}

export const Typography = ({
  variant = 'body20',
  align,
  style,
  children,
  numberOfLines,
  color,
}: Props) => {
  const theme = useTheme()
  return (
    <TextVariant
      $align={align}
      $variant={variant}
      color={color ?? theme.palette.text.primary}
      style={style}>
      {children}
    </TextVariant>
  )
}
