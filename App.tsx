/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {useColorScheme, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// react native routing
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// 스플래쉬 화면
import SplashScreen from 'react-native-splash-screen';

// 메인스크린 화면
import MainScreen from './Screens/MainScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
