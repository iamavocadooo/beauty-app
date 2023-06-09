import React, { useContext, useEffect, useState } from "react";
import {FlatList, Text, View} from "react-native" 
import { AppContext } from "../ContextApi/context";
import { ProductItem } from "../components/ProductItem";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database } from "../../firebase";

export const FavouritesScreen = ({navigation}) => {
    const{userInfo, favorites, setFavourites} = useContext(AppContext)
    useEffect(() => {
        let usersRef = collection(database, 'products');
        if (userInfo[0].favorites.length > 0) {
            let q = query(usersRef, where('title', 'in', userInfo[0].favorites));
        console.log('s')
        onSnapshot(q, (snapshot) => {
           
        //     setFavourites(snapshot.docs.filter((doc) => (userInfo[0].favorites.includes(doc.id)))
        //    .map((doc) => ({
        //         id: doc.id,
        //         image: doc.data().images
                
        //     })))

        setFavourites(snapshot.docs.map((doc) => ({
                id: doc.id,
                image: doc.data().image
            })))
            console.log(favorites)
        })
        }
        
        
    }, [])
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 , backgroundColor: 'white'}}>
        {favorites.length > 0 ?
        <View style={{ height: "100%", width: "100%", backgroundColor: 'white' }}>
            <FlatList
              data={favorites}
              renderItem={({ item }) => (
                <ProductItem
                  image={item.image}
                  title={item.id}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item.id}
            />
        </View> : <Text style={{fontSize: 25, fontWeight: '300', color: '#EE4C7C'}}>Здесь пока пусто!</Text>}
      </View>
    );
}