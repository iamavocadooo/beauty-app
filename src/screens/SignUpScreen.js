import React from "react"
import { View, Image, StyleSheet } from "react-native"
import { SignUp } from "../components/SignUp"


export const SignUpScreen = ({navigation})=>{
    return (
      <View style={styles.wrapper}>
        <SignUp navigation={navigation} />
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center'
    },
    logo: {
        width: '70%',
        height: '70%',
        borderColor: 'blue',
        borderWidth: 0,
        maxWidth: 300,
        maxHeight: 300
    }
})