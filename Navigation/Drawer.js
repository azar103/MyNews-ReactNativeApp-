import React from 'react';
import {createDrawerNavigator, DrawerSidebar} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import NotificationsStack from './notificationsStack';
import customDrawerComponent from './customDrawerComponent';
import HomeStack from './homeStack';
import sportsStack from './sportsStack';
import businessStack from './businessStack';
import SearchStack from './searchStack';
import HealthCategory from '../Components/HealthCategory';
import HealthStack from './HealthStack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BusinessCategory from '../Components/BusinessCategory';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsStack from './SettingsStack';

const tabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Actualité',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-globe" size={25} color={tintColor} />
        ),
      },
    },
    SportsCategory: {
      screen: sportsStack,
      navigationOptions: {
        title: 'Sport',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-football" size={25} color={tintColor} />
        ),
      },
    },
    BusinessCategory: {
      screen: businessStack,
      navigationOptions: {
        title: 'Economie',
        tabBarIcon: ({tintColor}) => (
          <Icon name="logo-euro" size={25} color={tintColor} />
        ),
      },
    },
    HealthCategory: {
      screen: HealthStack,
      navigationOptions: {
        title: 'Sante',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-medkit" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: 'bold',
      },
      activeTintColor: '#e91e63'

    },
  },
);

const RootDrawerNavigation = createDrawerNavigator(
  {

    Home: {
      screen: tabs,
      navigationOptions: {
        drawerLabel: 'Acceuil',
        drawerIcon: ({tintColor}) => <Icon name="md-home" size={25} color={tintColor} />,
      },
    },
    Notifications: {
      screen: NotificationsStack,
      navigationOptions: {
        drawerLabel: 'Notifications',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-notifications" size={25} color={tintColor}
          />
        ),
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarOptions: {},
        drawerLabel: 'Recherche',
        drawerIcon: ({tintColor}) => <Icon name="md-search" size={25} color={tintColor} />,
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        drawerLabel:'Paramétres',
        drawerIcon: ({tintColor}) => (
          <Icon name="md-settings" size={25} color={tintColor} />
        )
      }
    },
  },
 
  {
    initialRouteName:'Home',
    contentOptions: {
     activeTintColor:'#e91e63'
    },
    contentComponent: customDrawerComponent,
  },
);



export default createAppContainer(RootDrawerNavigation);
