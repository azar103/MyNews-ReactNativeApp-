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
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {ThemeProvider} from 'styled-components';
import lightTheme from './theme/light';
class App extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    let persistor = persistStore(Store)
    return(
      <ThemeProvider theme={lightTheme}>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Drawer/>  
        </PersistGate> 
      </Provider>
      </ThemeProvider> 
    )
  }
}


export default App;
