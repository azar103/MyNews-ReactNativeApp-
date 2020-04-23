/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Drawer from './Navigation/Drawer';
import {MaskedView} from '@react-native-community/masked-view';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/configureStore'
class App extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    return(
      <Provider store={Store}>
         <Drawer/>  
      </Provider>
    )
  }
}


export default App;
