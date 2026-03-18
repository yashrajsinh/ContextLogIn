// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';

// Screens
import LogInScreen from './src/screens/LogInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import ProfileUpdateScreen from './src/screens/ProfileUpdateScreen';

// Context
import AuthProvider, { AuthContext } from './src/context/AuthProvider';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Profile tab
const ProfileStack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileHome" component={UserProfileScreen} />
      <ProfileStack.Screen name="Update" component={ProfileUpdateScreen} />
    </ProfileStack.Navigator>
  );
}

// Bottom Tabs
function MainTabs() {
  const { user } = useContext(AuthContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{ title: `Welcome Back, ${user?.username}` }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator} // Nested stack
        options={{ title: `${user?.username}'s Profile` }}
      />
    </Tab.Navigator>
  );
}

// Root Navigator
function RootNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <MainTabs />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LogInScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// App
export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
