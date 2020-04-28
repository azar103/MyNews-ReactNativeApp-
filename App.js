/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Drawer from './Navigation/Drawer';

class App extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {

    return(
   
          <Drawer/>  
    )
  }
}


export default App;
