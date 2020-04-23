import React from 'react'
import { SafeAreaView, View, Image, StyleSheet } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { ScrollView } from 'react-native-gesture-handler'


const customDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
         <View style={{height: 150, backgroundColor:'#FFF', alignItems:'center', 
          justifyContent:'center'}}>
                 <Image 
                    source={require('../img/ic_news.png')}
                    style={{height: 120, width: 120}}
                 />   
                 <View style={styles.sidebarDivider}></View>
         </View> 
         <ScrollView>
         <DrawerItems {...props} />

         </ScrollView>
    </SafeAreaView>
)
const styles = StyleSheet.create({
    sidebarDivider:{
        height:1,
        width:"100%",
        backgroundColor:"lightgray",
        marginVertical:10
      }
})

export default customDrawerComponent