import React, {useContext, useState} from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { CustomButton } from "../ui/CustomButton";
import { CustomInput } from "../ui/CustomInput";
import { GoSignIn } from "./GoSignIn";
import { AppContext } from "../ContextApi/context";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";


export const SignUp = ({navigation}) => {
    const {f, setLocalEmail} = useContext(AppContext)
    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    const[nameValue, setNameValue] = useState('')
    const[error, setError] = useState(false)
    const[confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const minNumberofChars = 7;
    const maxNumberofChars = 20;
    const regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const handleSignUp = (email, password) => {
    
      if (nameValue === ' ' && nameValue === '') {
        setError(true)
          return false
      }
    
    if (passwordValue !== confirmPasswordValue) {
      setError(true)
        return false
    }
    if(passwordValue.length < minNumberofChars || password.length > maxNumberofChars){
      setError(true)
      return false
    }
    if(!regularExpression.test(passwordValue)) {
        setError(true)
        return false
    }
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        setError(false)
        addDoc(collection(database, "users"), {
          userId: auth.currentUser.uid,
          name: nameValue,
          favorites: [],
          basket: [],
          orders: [],
          discount: false,
          bonus: 0,
        })
        f()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }



    return (
      <View style={styles.wrapper}>
        <CustomInput
          value={loginValue}
          setValue={setLoginValue}
          placeholder={"логин"}
          secureTextEntry={false}
        />
        <CustomInput
          value={nameValue}
          setValue={setNameValue}
          placeholder={"ФИО"}
          secureTextEntry={false}
        />
        <CustomInput
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder={"пароль"}
          secureTextEntry={true}
        />
        <CustomInput
          value={confirmPasswordValue}
          setValue={setConfirmPasswordValue}
          placeholder={"подтвердите пароль"}
          secureTextEntry={true}
        />
        {
          error ? <Text style={styles.error}>
          Пароль должен быть не меньше 8 символов, содержать 1 специальный символ!
        </Text> : false
        }
        <CustomButton
          style={styles.button}
          text="Регистрация"
          onPress={() => {
            handleSignUp(loginValue, passwordValue);
          }}
        />

        <GoSignIn navigation={navigation} />
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        height:230,
        maxWidth: 350,
        borderWidth: 0,
    },
    error: {
      color: 'red',
      fontSize: 11,
      marginBottom: 20,
    }
})