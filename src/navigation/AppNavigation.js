import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NoSNavigation } from "./NoSNavigation";

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="NoS" component={NoSNavigation} />
        </Stack.Navigator>
    );
}