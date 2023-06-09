import React, { useContext } from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native" 
import { CATALOG } from "../../catalog";
import { AppContext } from "../ContextApi/context";

export const CatalogScreen = ({navigation}) => {
    const{setProductsGroup} = useContext(AppContext)
    return(
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>Уходовая косметика</Text>
            <TouchableOpacity onPress={() => {setProductsGroup('Базовый уход'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Базовый уход</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setProductsGroup('Умывание'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Умывание</Text>

                </View>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => {setProductsGroup('Тоники и мисты'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Тоники и мисты</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setProductsGroup('Средства глубокого действия'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Средства глубокого действия</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setProductsGroup('Кремы и эмульсииы'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Кремы и эмульсииы</Text>

                </View>
            </TouchableOpacity>
            <Text style={styles.headerText}>Декоративная косметика</Text>
            <TouchableOpacity onPress={() => {setProductsGroup('Для глаз'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Для глаз</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setProductsGroup('Для губ'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Для губ</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setProductsGroup('Для кожи'); navigation.navigate('Products')}}>
                <View style={styles.item}>
                    <Text style={styles.productText}>Для кожи</Text>

                </View>
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40
    },
    headerText: {
        fontSize: 30,
        marginLeft: 15,
        color: "#9A1750",
        fontWeight: '300'
    },
    item: {
        // borderTopWidth: 0.9,
        borderBottomWidth: 0.5,
        borderColor: "#E3AFBC",
        height: 50,
        justifyContent: "center"
    },
    productText: {
        fontWeight: '300',
        color: "#E3AFBC",
        marginLeft: 30,
        fontSize: 20
    }
})