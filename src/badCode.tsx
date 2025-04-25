
// src/navigation/index.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen';
import LoginParamsScreen from '../screens/LoginParamsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главная" component={() => null} />
        <Tab.Screen name="Платежи" component={() => null} />
        <Tab.Screen name="Банкоматы" component={AtmsScreen} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View>
      <Text>Профиль</Text>
      <Button title="Настройки" onPress={() => navigation.navigate('Настройки')} />
      <Button title="Тема" onPress={() => {}} />
      <Button title="Поддержка" onPress={() => {}} />
      <Button title="Помощь" onPress={() => {}} />
      <Button title="Выход" onPress={() => {}} />
    </View>
  );
}

// src/screens/SettingsScreen.tsx
import React from 'react';
import { View, Button } from 'react-native';

export default function SettingsScreen({ navigation }: any) {
  return (
    <View>
      <Button title="Контактная информация" onPress={() => navigation.navigate('ContactInfo')} />
      <Button title="Параметры входа" onPress={() => navigation.navigate('LoginParams')} />
      <Button title="Уведомления" onPress={() => navigation.navigate('Notifications')} />
      <Button title="Карта по умолчанию" onPress={() => {}} />
      <Button title="О приложении" onPress={() => {}} />
    </View>
  );
}

// src/screens/ContactInfoScreen.tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useMutation } from 'react-query';
import axios from 'axios';

export default function ContactInfoScreen({ navigation }: any) {
  const mutation = useMutation(() => axios.post('/api/v1/get-contact-information'));

  useEffect(() => {
    mutation.mutate(undefined, {
      onSuccess: (res) => {
        if (res.status === 200) {
          // ничего не делаем
        } else if (res.status === 401) {
          navigation.navigate('Login');
        } else {
          alert('Ошибка');
        }
      },
    });
  }, []);

  if (!mutation.data) return <Text>Загрузка...</Text>;

  const user = mutation.data.data;

  return (
    <View>
      <Text>{user.name} {user.surname} {user.lastname}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
    </View>
  );
}

// src/screens/LoginParamsScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useMutation } from 'react-query';

export default function LoginParamsScreen({ navigation }: any) {
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showPwd, setShowPwd] = useState(false);

  const changePassword = useMutation((data: any) => axios.post('/api/v1/change-password', data));

  const handleOtp = () => {
    setOtpSuccess(true);
  };

  const handleSubmit = () => {
    changePassword.mutate({ oldPwd, newPwd, confirmPwd }, {
      onSuccess: (res) => {
        if (res.status === 200) {
          navigation.navigate('Главная');
        } else if (res.status === 401) {
          navigation.navigate('Login');
        } else {
          alert('Ошибка');
        }
      },
    });
  };

  return (
    <View>
      <Button title="Смена пароля" onPress={handleOtp} />
      {otpSuccess && (
        <>
          <TextInput value={oldPwd} onChangeText={setOldPwd} secureTextEntry={!showPwd} />
          <TextInput value={newPwd} onChangeText={setNewPwd} secureTextEntry={!showPwd} />
          <TextInput value={confirmPwd} onChangeText={setConfirmPwd} secureTextEntry={!showPwd} />
          <Button title="Показать" onPress={() => setShowPwd(!showPwd)} />
          <Button title="Сохранить" onPress={handleSubmit} />
        </>
      )}
    </View>
  );
}

// src/screens/NotificationsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Switch, Text, Alert } from 'react-native';
import axios from 'axios';
import { useMutation } from 'react-query';

export default function NotificationsScreen({ navigation }: any) {
  const [prefs, setPrefs] = useState<any>({});

  const fetchPrefs = useMutation(() => axios.post('/api/v1/get-notification-preference'));
  const updatePrefs = useMutation((newPrefs: any) => axios.post('/api/v1/update-notification-preference', newPrefs));

  useEffect(() => {
    fetchPrefs.mutate(undefined, {
      onSuccess: (res) => {
        if (res.status === 200) {
          setPrefs(res.data);
        } else if (res.status === 401) {
          navigation.navigate('Login');
        } else {
          Alert.alert('Ошибка');
          navigation.navigate('Settings');
        }
      },
    });
  }, []);

  const toggle = (key: string) => {
    const updated = { ...prefs, [key]: !prefs[key] };
    setPrefs(updated);
    updatePrefs.mutate(updated, {
      onSuccess: (res) => {
        if (res.status === 200) {
          alert('Успех');
        } else if (res.status === 401) {
          navigation.navigate('Login');
        } else {
          alert('Ошибка');
          setPrefs((prev: any) => ({ ...prev, [key]: !updated[key] }));
        }
      },
    });
  };

  return (
    <View>
      <Text>Предложения</Text>
      <Switch value={prefs.bankProposition} onValueChange={() => toggle('bankProposition')} />
      <Text>Операции</Text>
      <Switch value={prefs.operations} onValueChange={() => toggle('operations')} />
      <Text>Телефон</Text>
      <Switch value={prefs.phoneEnabled} onValueChange={() => toggle('phoneEnabled')} />
      <Text>Email</Text>
      <Switch value={prefs.emailEnabled} onValueChange={() => toggle('emailEnabled')} />
    </View>
  );
}


// src/screens/AtmsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';

const data = [
  { id: 1, city: 'Москва', address: 'ул. Пушкина, д.1', active: true },
  { id: 2, city: 'Москва', address: 'ул. Ленина, д.5', active: false },
  { id: 3, city: 'СПб', address: 'Невский пр., д.10', active: true },
  { id: 4, city: 'СПб', address: 'Малая Садовая, д.3', active: true },
];

export default function AtmsScreen() {
  const [items, setItems] = useState<any[]>([]); 
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filtered = data.filter((item) => item.active === true);
    const sorted = filtered.sort((a, b) => a.city > b.city ? 1 : -1);

    const duplicated = [];
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < 5; j++) {
        duplicated.push(sorted[i]);
      }
    }

    setItems(duplicated);
  }, []);

  const filteredItems = items.filter((item) => item.city.includes(query));

  return (
    <View>
      <Text>Список банкоматов</Text>

      <TextInput
        placeholder="Поиск по городу"
        value={query}
        onChangeText={(text) => setQuery(text)}
        style={{ borderWidth: 1, margin: 8, padding: 4 }}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <View>
            <Text>{item.city} - {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}



// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

export default function HomeScreen() {
  const user = {
    name: 'Иван',
    balance: '10000', 
    notifications: [
      { id: 1, text: 'Пополнение на 1000₽', read: false },
      { id: 2, text: 'Списание 500₽', read: true },
      { id: 3, text: 'Списание 300₽', read: false },
    ],
  };

  const markAllAsRead = () => {
    user.notifications.forEach((n) => (n.read = true));
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text>Добро пожаловать, {user.name}</Text>

        <Text>Ваш баланс: {user.balance}₽</Text>

        <Button title="Отметить все как прочитанные" onPress={markAllAsRead} />

        <Text style={{ marginTop: 20 }}>Уведомления:</Text>

        {user.notifications
          .filter((n) => !n.read)
          .map((n) => {
            return (
              <View style={{ marginVertical: 5 }}>
                <Text>{n.text}</Text>
              </View>
            );
          })}

        <Text style={{ marginTop: 20 }}>История уведомлений:</Text>
        {user.notifications.map((n) => {
          return (
            <View style={{ marginVertical: 5 }}>
              <Text>
                {n.text} ({n.read ? 'Прочитано' : 'Непрочитано'})
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

