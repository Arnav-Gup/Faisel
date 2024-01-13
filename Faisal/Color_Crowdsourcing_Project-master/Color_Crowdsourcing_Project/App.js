import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/'
import { RegisterScreen } from './screens/'
import { MainScreen } from './screens/'
import { LeaderboardScreen } from './screens/'
import { UsernameScreen } from './screens'
import { LandingScreen } from './screens'
import { IntroductoryScreen } from './screens'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroductoryScreen"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="IntroductoryScreen" component={IntroductoryScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="UsernameScreen" component={UsernameScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
