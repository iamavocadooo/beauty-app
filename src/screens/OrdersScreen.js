import React, { useCallback, useContext, useLayoutEffect, useState } from "react";
import { Button, FlatList, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../ContextApi/context";
import { ProductItem } from "../components/ProductItem";
import { OrderItem } from "../components/OrderItem";


export const OrdersScreen = ({navigation}) => {
    const{userInfo} = useContext(AppContext)


  return(
    <View style={styles.wrapper}>
      <View>
        <Text>Профиль</Text>
        <Button title="dfs"/>
        {userInfo[0].orders ?
            <FlatList
                data={userInfo[0].orders}
                renderItem={({item}) => <OrderItem title={item.id} count={item.count} sum={item.sum} image={item.image} navigation={navigation}/>}
                keyExtractor={(item) => item.id}
            />
            : false}
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