import React from "react";
import { AuthScreen, SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens/ProfileScreen";
import { OrdersScreen } from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator()

export const ProfileNavigation = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
          
        </Stack.Navigator>
    );
}