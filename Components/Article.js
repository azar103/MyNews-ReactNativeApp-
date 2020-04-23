import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
class Article extends React.Component {
    constructor(props){
        super(props)
    }

    _displayTitle(title){
           title.split(' - ').pop();
   
           return title
    }

    render() {
        const {title, urlToImage, source, publishedAt, url} = this.props.article
        return(
          <TouchableOpacity 
          style={[styles.main_container]}
          onPress={() => this.props.navigateTo(url, source.name)}
          >
                {urlToImage !== null ?<Image 
                  source={{uri: urlToImage}}
                  style={styles.image}
                /> : 
                <Image 
                source={
                    { uri: 'https://www.ravepubs.com/wp-content/uploads/2017/01/Breaking-News.jpg'}
                }
                  style={styles.image}
                
                />}
                <Text style={styles.title}>
                     {title.split(' - ').slice(0, title.split(' - ').length-1).join(" - ")}
                </Text>
                <Text style={styles.author}>
                     {source.name}
                </Text>
                <Text style={styles.date}>
                     {moment(publishedAt).startOf('minute').fromNow()}
                </Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection:'column',
        marginStart: 5,
        marginEnd: 5,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    },
    image: {
        height: 100
    },
    title: {
        fontSize: 20,
        fontWeight:"bold",
        marginBottom: 20,
        padding:8
    },
    author: {
   
       padding:10
    },
    date: {
       padding: 5,
       color:'#8B8B8B',
       marginStart: 6,
       marginBottom:5,
       marginTop: -12
    },
    boxShadow: {
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0, 
    }
    
})

export default Article