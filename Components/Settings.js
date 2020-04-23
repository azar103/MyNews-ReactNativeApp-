import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group/lib/RadioButtonsGroup';
import { connect } from 'react-redux';



class Settings extends React.Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
          headerTitle: 'Paramétres',
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
              <Image
                source={require('../img/open-menu.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 15,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Search');
                }}>
                <Image
                  source={require('../img/ic_search.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 15,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Notifications');
                }}>
                <Image
                  source={require('../img/ic_notifications.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
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
        };
      };
    
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    label: 'France',
                    value:'fr',
                    
                },
                {
                    label: 'Etats Unis',
                    value: "us",
                },
                {
                  label: 'UAE',
                  value: "ae",
              },
            ],
        }
  
    }
    onPress = data => {
        
        this.setState({ data })
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        const action = {type:'GET_COUNTRY', value: selectedButton}
        this.props.dispatch(action)
    };
    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        console.log(this.props.countrySelected)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Chosissez un pays</Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },
    text: {
        fontSize: 30
    }
});

const mapStateToProps = (state) =>{
    return {
        countrySelected: state.countrySelected
    }
}


export default connect(mapStateToProps)(Settings)