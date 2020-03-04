import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Root} from "native-base";
import {OstWalletSettingsComponent} from '@ostdotcom/ost-wallet-sdk-react-native';
import IntroScreen from './src/components/IntroScreen'
import LoginScreen from './src/components/LoginScreen'
import SettingScreen from './src/components/Setting'
import WalletScreen from './src/components/WalletScreen/index'
import NavigationService from "./src/services/NavigationService";


const customTabHiddenRoutes = [
  'SendTokens',
  'WalletSettingScreen'
];

let recursiveMaxCount = 0;

getLastChildRoutename = (state) => {
  if (!state) return null;
  let index = state.index,
    routes = state.routes;
  if (!routes || recursiveMaxCount > 50) {
    recursiveMaxCount = 0;
    return state.routeName;
  }
  recursiveMaxCount++;
  return getLastChildRoutename(routes[index]);
};

const modalStackConfig = {
  navigationOptions: ({ navigation }) => {
    const routeName = getLastChildRoutename(navigation.state);
    return {
      tabBarVisible: !customTabHiddenRoutes.includes(routeName)
    };
  },
  headerLayoutPreset: 'center'
};

const WalletStack = createStackNavigator(
  {
    WalletScreen: WalletScreen,
    LoginScreen: LoginScreen,
    SettingScreen: SettingScreen,
    WalletSettingScreen: OstWalletSettingsComponent
  },
  {
    ...modalStackConfig
  }
);

const Onboarding = createStackNavigator(
  {
    IntroScreen: IntroScreen,
    LoginScreen: LoginScreen
  }
);


const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Onboarding: Onboarding,
      Wallet: WalletStack
    },
    {
      initialRouteName: 'Onboarding',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
);

const RootNavigationContainer = () => (
  <Root>
    <AppContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Root>
);

export default RootNavigationContainer;

