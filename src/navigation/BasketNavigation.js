import React from "react";
import { AuthScreen, SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CatalogScreen } from "../screens/CatalogScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { Product } from "../components/Product";
import { FavouritesScreen } from "../screens/FavouritesScreen";
import { BasketScreen } from "../screens/BasketScreen";

const Stack = createNativeStackNavigator()

export const BasketNavigation = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Favorites" component={BasketScreen} />
          <Stack.Screen name="Product" component={Product} />
          
          
        </Stack.Navigator>
    );
}