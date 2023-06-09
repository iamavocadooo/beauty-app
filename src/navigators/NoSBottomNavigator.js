import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutColledgeScreen } from '../screens/AboutColledgeScreen';
import { SubmitAppScreen } from '../screens/SubmitAppScreen';
import { SignInScreen } from '../screens/SignInScreen';
import {Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons'
import { CatalogScreen } from '../screens/CatalogScreen';
import { BasketScreen } from '../screens/BasketScreen';
import { FavouritesScreen } from '../screens/FavouritesScreen';
import { ProductsNavigation } from '../navigation/ProductsNavigation';
import { FavoritesNavigation } from '../navigation/FavoritesNavigation';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProfileNavigation } from '../navigation/ProfileNavigation';
import { BasketNavigation } from '../navigation/BasketNavigation';

const Tab = createBottomTabNavigator();

export const NoSBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 65, backgroundColor: 'white'},
        tabBarShowLabel: true,
        // tabBarInactiveBackgroundColor: '#b61111b3',
        // tabBarActiveBackgroundColor: '#b61111b3',
        tabBarActiveTintColor: "#EE4C7C",
        tabBarItemStyle: {marginBottom: 5},

      }}
    >
      <Tab.Screen
        name="CG"
        component={AboutColledgeScreen}
        options={{
          headerShown: false,
          title: 'Главная',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="A"
        component={ProductsNavigation}
        options={{
          headerShown: false,
          title: 'Каталог',
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" size={26} color={color} />
          ),
        }}
      />
            <Tab.Screen
        name="B"
        component={BasketNavigation}
        options={{
          headerShown: false,
          title: 'Корзина',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="basket" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="C"
        component={FavoritesNavigation}
        options={{
          headerShown: false,
          title: 'Избранное',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="asd"
        component={ProfileNavigation}
        options={{
          headerShown: false,
          title: 'Кабинет',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" size={26} color={color} />
          ),
        }}
      />

      
    </Tab.Navigator>
  );
}