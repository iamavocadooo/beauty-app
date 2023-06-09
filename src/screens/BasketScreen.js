import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native" 
import { ProductItem } from "../components/ProductItem";
import { AppContext } from "../ContextApi/context";
import { database } from "../../firebase";
import { BasketProductItem } from "../components/BasketProductItem";

export const BasketScreen = ({navigation}) => {
    const{userInfo, deleteBasket} = useContext(AppContext)
    const[basket, setBasket] = useState(null)
    

    // useEffect(() => {
    //   let usersRef = collection(database, "products");
    //   let q = query(usersRef);
    //   console.log("s");
      // onSnapshot(q, (snapshot) => {

      //     setBasket(snapshot.docs.filter((doc) => (userInfo[0].basket.includes(doc.id)))
      //    .map((doc) => ({
      //         id: doc.id,
      //         name: doc.data().title

      //     })))
      //     console.log(userInfo)
      // })
        // setBasket([])
        // console.log(userInfo[0].basket)
        // userInfo[0].basket.map(item => {
        //     const ref = doc(database, "products", item.id);
        //     getDoc(ref).then(docSnap => {
                // setBasket([{id: docSnap.id, image: docSnap.data().image}])
                // setBasket([...basket, {id: docSnap.id,
                // image: docSnap.data().image}
                // ])
                // })})
            
    //   )

    //   console.log(basket)
        

                
                // console.log(docSnap.data().description);
                // setBasket([...basket, {
                //   id: docSnap.id,
                //   image: docSnap.data().image,
                // }])
                // setBasket([])
                // console.log(item);
        
      
    // }, [])
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}> 
            {userInfo[0].basket.length > 0 ?
            <View style={{flex: 1, height: '100%', width: '100%',}}>
                <FlatList style={{paddingTop: 35}}
                data={userInfo[0].basket}
                renderItem={({item}) => <BasketProductItem title={item.id} count={item.count} image={item.image} navigation={navigation}/>}
                keyExtractor={(item) => item.id_}
            />
                <View style={styles.buttonsWrapper}>
                <TouchableOpacity onPress={deleteBasket} activeOpacity={0.8} style={styles.buttons}>
                    <Text style={styles.buttonsText}>Очистить</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttons}>
                    <Text style={styles.buttonsText}>Купить все</Text>
                </TouchableOpacity>
            </View>
            </View>
            
            : <Text style={{fontSize: 25, fontWeight: '300', color: '#EE4C7C'}}>Ваша корзина пуста!</Text>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: 'white',
        elevation: 8,
        marginBottom: 15,
        width: '45%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsWrapper: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonsText: {
        color: '#EE4C7C',
        fontWeight: '700',
        fontSize: 20
    }
})