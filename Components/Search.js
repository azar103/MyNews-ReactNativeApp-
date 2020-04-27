import React from 'react'
import { Text, Image, View, StyleSheet, Button } from 'react-native'
import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler'
import ButtonWithBackground from './ButtonWithBackground'
import RadioGroup from 'react-native-radio-buttons-group'
import { getNewsBySearch } from '../API/NewsAPI'
import Article from '../Components/Article'
import { ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'

class Search extends React.Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
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
    constructor(props){
        super(props)
        this.state = {
          articles: [],
          searchedText: '',
          selectedIndex: 0
        }
        this.buttons = [
          "general",
          "sports",
          "business",
          "health"
        ]
    }
    updateIndex = (selectedIndex)  => {
      this.setState({selectedIndex})
    }
    _searchArticles = () => {

      if(this.state.searchedText.length > 0){
        getNewsBySearch(this.buttons[this.state.selectedIndex], this.state.searchedText, 100, this.props.countrySelected) 
        .then( data => {
        this.setState({ articles: data.articles })
      })
      }
       

    }

   _handleSearch = (text) => {
     this.setState({
        searchedText: text
     })
   }
     render() {
       const {selectedIndex} = this.state
        return(
          <View style={styles.main_container}>
              <TextInput 
                  style={styles.input}
                  placeholder="Recherchez..."
                  onChangeText={(text) => this._handleSearch(text)}
                  onSubmitEditing={() => this._searchArticles()}
                  value={this.state.searchedText}
               />
              <ButtonWithBackground
                title="Valider"
                onPress={() => this._searchArticles()}
              />
              <ButtonGroup
                onPress={this.updateIndex}
               selectedIndex={selectedIndex}
               buttons={this.buttons}
               selectedButtonStyle={{backgroundColor:'#e91e63'}}
               containerStyle={{borderRadius: 10, marginTop: 10}}
               
    />
             <FlatList
                keyExtractor={item => item.title.toString()}
                data={this.state.articles}
                renderItem={({item}) => (
                <Article article={item} navigateTo={this._navigate} />
                )}
             />          
          </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems:'center'
  },
  input: {
    width: 200,
    marginStart: 5,
    marginEnd: 5,
    alignSelf:'flex-start'
  },
  button: {
    marginTop: 10,
    padding: 5,
    borderRadius: 25,
    backgroundColor:'#e91e63',
    marginStart: 5,
    marginEnd: 5
  },
  btnGroup: {
    marginTop: 10
  }

},

 
)
const mapStateToProps = (state) => {
  return {
    countrySelected:  state.countrySelected
  }
}

export default connect(mapStateToProps)(Search)