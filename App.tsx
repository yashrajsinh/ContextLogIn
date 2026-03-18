//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Bottom nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import LogInScreen from './src/screens/LogInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

//Context
import AuthProvider, { AuthContext } from './src/context/AuthProvider';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { username } = useContext(AuthContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{ title: `Welcome Back, ${username}` }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{ title: `${username}'s Profile` }}
      />
    </Tab.Navigator>
  );
}

// separate navigator based on auth state
function RootNavigator() {
  const { username } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {username ? (
        <MainTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LogInScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

export default App;
