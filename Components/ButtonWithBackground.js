import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const ButtonWithBackground = (props) => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
               <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#e91e63',
        padding: 10,
        width: 200,
        alignItems:'center',
        borderRadius: 25
    },
    text: {
        color: '#FFF'
    }
})

export default ButtonWithBackground;