import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import * as SecureStore from 'expo-secure-store';
import { diffClamp } from "react-native-reanimated";


export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [productsGroup, setProductsGroup] = useState(null)
    const [product, setProduct] = useState(null)
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState({})
    const [userBankInfo, setUserBankInfo] = useState(null)
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [chats, setChats] = useState([])
    const [favorites, setFavourites] = useState([])
    
    // Function to open the bottom sheet 
    const handleOpenBottomSheet = () => {
      setIsBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
      setIsBottomSheetOpen(false);
    };

    const changeNick = (nick) => {
      const ref = doc(database, 'users', userInfo[0].id)
      updateDoc(ref, {
        nickName: nick
      })
    }

    const updateChats = async(chat, name, userId, userName) => {
      const ref = doc(database, 'users', userInfo[0].id)
      const ref2 = doc(database, 'users', userId)
      const docSnap = getDoc(ref2)
      console.log(chat, name)
      updateDoc(ref, {
        chats: [...userInfo[0].chats, {chat, name}]
      })
      updateDoc(ref2, {
        chats: [...(await docSnap).data().chats, {chat, name: userName }]
      })
    }

    const updateBasket = (id, count, image) => {
      console.log(id, count)
      const ref = doc(database, 'users', userInfo[0].id)
      updateDoc(ref, {
        basket: [...userInfo[0].basket, {id_: Date.now(), id, count, image}]
      })
    }

    const deleteBasket = async() => {
      const ref = doc(database, 'users', userInfo[0].id)
      await updateDoc(ref, {
        basket: []
      })
    }

    const addOrDeletefavorite = async (id, image) => {
      if (userInfo[0].favorites.includes(id)) {
        const ref = doc(database, 'users', userInfo[0].id)
      await updateDoc(ref, {
        favorites: [...userInfo[0].favorites.filter((e)=>{ e !== id})]
      })
      setFavourites([...userInfo[0].favorites.filter((e)=>{ e !== id})])
      } else{
        const ref = doc(database, 'users', userInfo[0].id)
      await updateDoc(ref, {
        favorites: [...userInfo[0].favorites, id]
      })
      setFavourites([...userInfo[0].favorites, {id, image}])
      }
      
    }

    const addFavorite = (id) => {
      const ref = doc(database, 'users', userInfo[0].id)
      updateDoc(ref, {
        favorites: [...userInfo[0].favorites, id]
      })
    }

    const doPurchase = (id, count, image, sum = 5000) => {
      console.log(id, count)
      const ref = doc(database, 'users', userInfo[0].id)
      updateDoc(ref, {
        orders: [...userInfo[0].orders, {id_: Date.now(), id, count, image, sum}]
      })
    }

    const f = () => {
        let usersRef = collection(database, "users");
        let q = query(usersRef, where("userId", "==", auth.currentUser.uid));
        onSnapshot(q, (snapshot) => {
          setUserInfo(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              basket: doc.data().basket,
              favorites: doc.data().favorites,
              orders: doc.data().orders,
              userId: doc.data().userId,
              birthday: doc.data().birthday
            }))
          );
        }
        )
        usersRef = collection(database, "bank");
        q = query(usersRef, where("studentId", "==", auth.currentUser.uid));
        onSnapshot(q, (snapshot) => {
          setUserBankInfo(
            snapshot.docs.map((doc) => ({
              bankScore: doc.data().bankScore,
              studyPay: doc.data().studyPay,
            }))
          );
        }
        )
        }
    
        const setLocalEmail = async(email, password) => {
          await SecureStore.setItemAsync('email', email);
          await SecureStore.setItemAsync('password', password);
        }
    
        // const deleteLocalEmail = async() => {
        //   SetEmail(null)
        //   SetPassword(null)
        //   await SecureStore.deleteItemAsync('email');
        //   await SecureStore.deleteItemAsync('password');
        // }

        const deleteLocalEmail = async() => {
          SecureStore.deleteItemAsync('email');
          SecureStore.deleteItemAsync('password');
        }
    
        const getLocalEmail = async() => {
          
          const email = await SecureStore.getItemAsync("email")
          const password =  await SecureStore.getItemAsync("password")
          return {email, password}
        }

            
    return(
        <AppContext.Provider value={{user, userInfo, setUser, setUserInfo, doPurchase, addOrDeletefavorite, favorites, setFavourites, userBankInfo, addFavorite, f, setLocalEmail, getLocalEmail, deleteLocalEmail, changeNick, isBottomSheetOpen, handleCloseBottomSheet, handleOpenBottomSheet, updateChats, deleteBasket, productsGroup, setProductsGroup, product, setProduct, updateBasket}}>
            {children}
        </AppContext.Provider>
    )
}