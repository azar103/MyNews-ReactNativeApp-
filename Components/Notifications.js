import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Notifications extends React.Component {
static navigationOptions = ({navigation, navigationOptions}) => {
        return {
          headerTitle: 'Notifications',
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Image
              source={require('../img/open-menu.png')}
              style={{
                width: 20, height: 20,
                marginLeft: 15
              }}
            />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            flex: 1,
            color: '#000',
            textAlign: 'center',
            alignSelf: 'center',
            fontWeight: 'normal',
          },
    
          headerStyle: {
            backgroundColor: '#FFF',
          },
        }
      }   
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Notifications Screens</Text>
      </View>
    );
  }
}

export default Notifications;
