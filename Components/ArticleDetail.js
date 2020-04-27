import React  from 'react'

import 'react-native-get-random-values';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import WebView from 'react-native-webview';
import { View, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ThemeConsumer } from 'react-native-elements';


class ArticleDetail extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
          headerTitle: 'publie sur '+  navigation.state.params.source,
          headerRight:() => <Icon 
              name="ios-share-alt"
              onPress={() => {
                Share.share({
                  message: navigation.state.params.title
                })
              }}
              size={25}
              style={{marginRight: 5}}
          />
        }

      }
    constructor(props){
        super(props)
    }
    componentDidMount() {
      this._updateNavigationParams();      
    }

    _updateNavigationParams() {
      this.props.navigation.setParams({
          share: this._share
      })

    }

    _share() {
      Share.share({
        message: "contenu de l'article"
      })
    }

    _toggleFavoriteBookmark() {
      IconSource = "bookmark"
      if(this.props.favoriteArticles.findIndex((item) => item.title === this.props.navigation.state.params.title) !== -1) {
        IconSource = "bookrmark-border"
      }

      return (
      <Icon 
         name="bookmark"
         size={25}
      />
      )
    }
    
    
    _toggleFavorite({navigation}){

        const action = {type: 'TOGGLE_FAVORITE', value: navigation.state.params.title}
        this.props.dispatch(action)
    }
    
    render() {
      console.log(this.props.navigation.params)
        return(

             <WebView
               source={{uri: this.props.navigation.state.params.MyUrl}}
               startInLoadingState={true}
             />
        )
    }
}

const mapStateToProps = (state) => {
  return {
    favoriteArticles: state.toggleFavorite.favoriteArticles
  }
}


export default connect(mapStateToProps)(ArticleDetail)