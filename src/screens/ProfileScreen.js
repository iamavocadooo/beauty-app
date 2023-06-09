import React, { useCallback, useContext, useLayoutEffect, useState } from "react";
import { Button, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const ProfileScreen = ({navigation}) => {
  return(
    <View style={styles.wrapper}>
      <View>
        <Text>Профиль</Text>
        <Button title="Мои заказы" onPress={() => {navigation.navigate("Orders")}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 30
    },
})