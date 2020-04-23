import React  from 'react'

import 'react-native-get-random-values';
import { ScrollView } from 'react-native-gesture-handler'
import WebView from 'react-native-webview';


class ArticleDetail extends React.Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
          headerTitle: 'publie sur '+ navigation.state.params.source,
        }
      }
    constructor(props){
        super(props)
    }
    render() {
        return(

             <WebView
               source={{uri: this.props.navigation.state.params.MyUrl}}
               startInLoadingState={true}
             />
        )
    }
}


export default ArticleDetail