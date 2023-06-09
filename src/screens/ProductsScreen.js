import React, { useContext, useEffect, useState } from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { AppContext } from "../ContextApi/context";
import { ProductItem } from "../components/ProductItem";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database } from "../../firebase";

export const ProductsScreen = ({navigation}) => {
    const{productsGroup, userInfo} = useContext(AppContext) 
    const[products, setProducts] = useState(null)
    useEffect(() => {
        let usersRef = collection(database, 'products');
        let q = query(usersRef, where("categorie", '==', productsGroup));
        console.log('s')
        onSnapshot(q, (snapshot) => {
                
           setProducts(snapshot.docs.map((doc) => ({
                id: doc.id,
                image: doc.data().image
            })))
            console.log(userInfo)
        })
        
    }, [])
    return(
        <View style={styles.wrapper}>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem image={item.image} title={item.id} navigation={navigation}/>}
                keyExtractor={(item) => item.id}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    }
})