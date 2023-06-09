import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../ContextApi/context";
import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { database } from "../../firebase";
import { Entypo } from "@expo/vector-icons";

export const Product = () => {
    const{product, updateBasket, doPurchase} = useContext(AppContext)
    const[count, setCount] = useState(0)
    const[productInfo, setProductInfo] = useState(null)
    useLayoutEffect(() => {
        (async() => {
            const docRef = doc(database, "products", product);
        const docSnap = await getDoc (docRef);
        setProductInfo({
            title: docSnap.data().title,
            image: docSnap.data().image,
            description: docSnap.data().description,

        }
        )
        })()
        

        
    }, [])
    return(
        <View style={styles.wrapper}>
            {!productInfo ? false : 
            <View>
                <View style={{backgroundColor: 'white', height: 300, width: 300, elevation: 4, borderRadius: 40 }}>
                    <Image style={{height: 300, width: 300, borderColor: 'black'}} source={{uri: productInfo.image}} />

                </View>
                <Text>{productInfo.title}</Text>
                <Text>{count}</Text>

                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <Entypo name="plus" color={'black'} size={24}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => count > 0 ? setCount(count - 1): false}>
                    <Entypo name="minus" color={'black'} size={24}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => count > 0 ? updateBasket(product, count, productInfo.image) : false}>
                    <Text>В корзину</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => doPurchase(product, count,productInfo.image, 4000)}>
                    <Text>Купить</Text>
                </TouchableOpacity>



                
            </View>

             }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 45,
        alignItems: 'center'
    }
})