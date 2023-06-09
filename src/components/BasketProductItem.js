import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../ContextApi/context";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";
import { MaterialIcons } from "@expo/vector-icons";

export const BasketProductItem = ({image, count, title, navigation}) =>  {
    const{setProduct, userInfo, addOrDeletefavorite} = useContext(AppContext)
    const[url, setUrl] = useState(null)
    useEffect(() => {
            const starsRef = ref(storage, image);
            console.log(image)
            setProduct(title)

            // Get the download URL
            getDownloadURL(starsRef).then((urll) => {
                setUrl(urll)
                console.log(urll)
            }).catch(e => console.log(e))
    }, [])
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={() => {
            setProduct(title)
            navigation.navigate('Product')
        }} style={styles.wrapper}>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image resizeMode="contain" source={{uri: url}} style={styles.image}/>
            <Text>{title}</Text>

            </View>

            <View style={{height: '100%', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => addOrDeletefavorite(title, image)}>
                {userInfo[0].favorites.includes(title) ? 
                <MaterialIcons name="favorite" color='red' size={30}/>: <MaterialIcons name="favorite-outline" color='red' size={30}/>}
            </TouchableOpacity>
            <Text>{count}</Text>
            </View>
            
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        backgroundColor: 'white',
        borderBottomWidth: 0.5
    },
    image: {
        margin: 0,
        width: 140,
        height: 150,
        borderRadius: 20
    }
})