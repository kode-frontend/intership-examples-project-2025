import { Alert } from 'react-native'
import {
  cacheBackPercent,
  getMaskedPhone,
  getSchema,
  moneyOnCard,
  moneyString,
  numberValueFormMoney,
} from './model'
import { PaymentCreate } from './payment-create'
import { TPaymentCreateForm } from './types'
import { FieldErrors, FormProvider, useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'

type Props = {}

export const PaymentCreateConnector = ({}: Props) => {
  const moneyOnCardString = moneyString(moneyOnCard)

  const form = useForm<TPaymentCreateForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      moneyOnCard,
      phone: '',
      money: moneyString(0),
    },
    resolver: zodResolver(getSchema()),
  })

  const { control, watch, setValue, handleSubmit } = form

  const moneyValue = watch('money')
  const phoneValue = watch('phone')

  const currentMoneyValue = numberValueFormMoney(moneyValue)
  const cacheBackString =
    currentMoneyValue > 0
      ? `Ваш кешбек составит ${cacheBackPercent}% - ${moneyString(
          currentMoneyValue / cacheBackPercent,
        )}`
      : ''

  const onChipPress = (value: number) => {
    setValue('money', moneyString(value))
  }

  const onValid = (values: TPaymentCreateForm) => {
    console.log(values)
    Alert.alert('Успех', 'Птатеж создан')
  }

  const onInvalid = (errors?: FieldErrors<TPaymentCreateForm>) => {
    if (errors?.phone?.message) {
      Alert.alert('Ошибка!', errors.phone.message)
      return
    }
    if (errors?.money?.message) {
      Alert.alert('Ошибка!', errors.money.message)
    }
  }

  useEffect(() => {
    const newPhoneValue = getMaskedPhone({ phone: phoneValue })
    setValue('phone', newPhoneValue)
  }, [phoneValue])

  useEffect(() => {
    const numberValue = numberValueFormMoney(moneyValue)
    const stringValue = moneyString(numberValue)

    setValue('money', stringValue)
  }, [moneyValue])

  return (
    <FormProvider {...form}>
      <PaymentCreate
        control={control}
        moneyOnCard={moneyOnCardString}
        cacheBackString={cacheBackString}
        onChipPress={onChipPress}
        onSubmitPress={handleSubmit(onValid, onInvalid)}
      />
    </FormProvider>
  )
}
