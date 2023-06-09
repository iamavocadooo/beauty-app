import React, { useContext } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import { SignIn } from "../components/SignIn";
import { AppContext } from "../ContextApi/context";


export const SignInScreen = ({navigation}) => {
    return(
        <View style={styles.wrapper}>
            <SignIn navigation={navigation}/>
        </View>
    )
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