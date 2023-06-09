import React from "react";
import { AuthScreen, SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CatalogScreen } from "../screens/CatalogScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { Product } from "../components/Product";
import { FavouritesScreen } from "../screens/FavouritesScreen";

const Stack = createNativeStackNavigator()

export const FavoritesNavigation = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Favorites" component={FavouritesScreen} />
          <Stack.Screen name="Product" component={Product} />
          
          
        </Stack.Navigator>
    );
}