import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import CreateAnnotation from './screens/Create';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopBar from './components/TopBar';
import { Provider } from 'react-redux';
import store from './store/store';
import Details from './screens/Details';
import Edit from './screens/Edit';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0c00b6',
    accent: '#0c00b6',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar></StatusBar>

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: ({ navigation, back }) => (
                <TopBar navigation={navigation} back={back} />
              ),
            }}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen
              name='CreateAnnotation'
              component={CreateAnnotation}
            />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Edit' component={Edit} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
