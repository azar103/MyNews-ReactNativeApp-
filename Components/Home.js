import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, RefreshControl, Button} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {getNewsByCategory} from '../API/NewsAPI';
import Article from './Article';
import { connect } from 'react-redux';

class SportsCategory extends React.Component {

  //add TooLBar to Header
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerTitle: 'My News',
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


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isRefreshing: false
    };
    this.pageSize=20;
    this._isMounted= false;
  }



  componentDidMount(){
    this._loadArticles();
  }

  _loadArticles = () => {
    this.setState(
      {
        articles: []
      }
    )

  getNewsByCategory("general", 100, this.props.countrySelected) 
  .then(res => 
    {
      this.setState({
        articles: [...this.state.articles, ...res.articles],
        isRefreshing: false
      });      
  })



      
  };


  _navigate = (url, source) => {
    this.props.navigation.navigate('ArticleDetail', {
      MyUrl: url,
      source: source,
    });
  };


  onRefresh() {
    this.setState({isRefreshing: true})
    this._loadArticles()
  }

  
  render() {
    console.log(this.props.countrySelected)
    return (
      <View style={styles.main_container} >
        <FlatList
          keyExtractor={item => item.url}
          extraData={this.state.articles}
          data={this.state.articles}
          renderItem={({item}) => (
            <Article article={item} navigateTo={this._navigate} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={
            () => {
              if(this.page< this.totalPages){
                  this._loadArticles()
              }
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
const mapStateToProps = (state) => {
  return {
    countrySelected: state.countrySelected
  }
}
export default connect(mapStateToProps)(SportsCategory);
