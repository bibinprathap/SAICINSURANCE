import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SideDrawer from './SideDrawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ClaimScreen from '../screens/ClaimScreen';
import LegalScreen from '../screens/LegalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SubmitClaim from '../screens/SubmitClaim';
import React from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Claim: ClaimScreen,
    Profile: ProfileScreen,
    SubmitClaim: SubmitClaim,
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppDrawer = createDrawerNavigator(
  {
    Home: HomeStack,
    Settings: SettingsScreen,
    Legal: LegalScreen,
  },
  {
    drawerWidth: Math.min(height, width) * 0.6,
    initialRouteName: 'Home',
    contentOptions: {
      labelStyle: {
        fontSize: normalizeFont(20),
        fontFamily: 'Roboto',
      },
    },
    contentComponent: props => <SideDrawer {...props} />,
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: RegisterScreen,
  },
  {
    mode: 'modal',
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    auth: AuthStack,
    app: AppDrawer,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitch);
