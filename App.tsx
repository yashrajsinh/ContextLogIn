//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Bottom nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import LogInScreen from './src/screens/LogInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserProfile from './src/screens/UserProfile';

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
        component={UserProfile}
        options={{ title: `${username}'s Profile` }}
      />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LogInScreen} />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
