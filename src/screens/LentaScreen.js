import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { ref } from "firebase/storage";
import { CardList } from "../components/CardList";
import { View } from "react-native";
import { AppContext } from "../ContextApi/context";

export const LentaScreen = () => {
    const {f} = useContext(AppContext)
    useEffect(()=>{
        f()
    }, [])
    return(
        <View>
            <CardList/>
        </View>
    )
}