import { KeyboardView } from '@shared/ui/templates'
import { darkTheme } from '@shared/ui/theme'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  RefreshControl,
  ActivityIndicator,
  TextInput,
  Image,
} from 'react-native'
import { TPaymentServicesForm, TServiceItem, UIData } from './types'
import { Control, Controller } from 'react-hook-form'

type Props = {
  control: Control<TPaymentServicesForm, any, TPaymentServicesForm>
  onCreatePayment: (id: string, title: string) => void
  data: TServiceItem[]
}

export const PaymentServices = ({ control, data, onCreatePayment }: Props) => {
  const isLoading = false

  const renderItem: ListRenderItem<TServiceItem> = ({
    item: { serviceIcon, serviceId, serviceName },
  }) => {
    return (
      <TouchableOpacity
        style={styles.serviceWrapper}
        onPress={() => onCreatePayment(serviceId, serviceName)}>
        <Image source={serviceIcon} />
        <Text>{serviceName}</Text>
      </TouchableOpacity>
    )
  }

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <KeyboardView>
      <View style={styles.services}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {}}
              tintColor='white'
            />
          }
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={keyExtractor}
          initialNumToRender={10} // TODO: почитайте в доке про параметры оптимизации
          keyboardShouldPersistTaps='handled' // TODO: Посмотрите сами что это
          ListHeaderComponent={
            <Controller
              control={control}
              name='search'
              render={({ field }) => {
                return (
                  <TextInput
                    placeholder='Поиск'
                    placeholderTextColor={darkTheme.palette.text.tertiary}
                    style={styles.input}
                    onChangeText={field.onChange}
                    keyboardType='email-address'
                    keyboardAppearance='dark'
                    {...field}
                  />
                )
              }}
            />
          }
          ListHeaderComponentStyle={styles.header}
        />
      </View>
    </KeyboardView>
  )
}

const keyExtractor = (item: TServiceItem) => item.serviceId

const ItemSeparatorComponent = () => <View style={styles.divider} />

const styles = StyleSheet.create({
  header: { padding: 12 },
  input: {
    padding: 16,
    backgroundColor: darkTheme.palette.content.secondary,
    color: 'white',
    borderRadius: 16,
  },
  services: { flex: 1, backgroundColor: darkTheme.palette.background.primary },
  serviceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'grey',
    padding: 16,
  },
  divider: {
    width: '100%',
    height: 1,
  },
})
