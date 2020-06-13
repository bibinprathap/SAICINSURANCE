import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SideDrawer from './SideDrawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ClaimScreen from '../screens/ClaimScreen';
import Notifications from '../screens/Notifications';
import VewCard from '../screens/ViewCard';
import LegalScreen from '../screens/LegalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SubmitClaim from '../screens/SubmitClaim';
import searchWithFilters from '../screens/searchWithFilters';
import LanguageScreen from '../screens/LanguageScreen';
import PolicyScreen from '../screens/PolicyScreen';
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
    Notification: Notifications,
    searchWithFilters:searchWithFilters,
    VewCard:VewCard,
    Profile: ProfileScreen,
    SubmitClaim: SubmitClaim,
    Policy: PolicyScreen,
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
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Language: LanguageScreen,
    auth: AuthStack,
    app: AppDrawer,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitch);
