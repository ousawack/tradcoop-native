import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import CoopScreen from "../../screens/CoopScreen";
import CoopListScreen from "../../screens/CoopListScreen";
import CategoriesScreen from "../../screens/CategoriesScreen";
import FAQScreen from "../../screens/FAQScreen";
import UserDetailsScreen from "../../screens/UserDetailsScreen";
import UserOrdersScreen from "../../screens/UserOrdersScreen";
import UserAddressBookScreen from "../../screens/UserAddressBookScreen";
import UserPaymentMethodsScreen from "../../screens/UserPaymentMethodsScreen";
import CheckoutScreen from "../../screens/CheckoutScreen";
import PaymentScreen from "../../screens/PaymentScreen";
import BasketScreen from "../../screens/BasketScreen";
import ProductListScreen from "../../screens/ProductListScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen";
import UserNotificationsScreen from "../../screens/UserNotificationsScreen";
import UserProfileScreen from "../../screens/UserProfileScreen";
import RugsBasedProductScreen from "../../screens/categories/RugsBasedProductScreen";
import ArganOilBasedProductScreen from "../../screens/categories/ArganOilBasedProductScreen";
import CouscousBasedProductScreen from "../../screens/categories/CoucousBasedProductScreen";
import LeatherBasedProductScreen from "../../screens/categories/LeatherBasedProductScreen";
import HoneyBasedProductScreen from "../../screens/categories/HoneyBasedProductScreen";
import JewerlyBasedProductScreen from "../../screens/categories/JewerlyBasedProductScreen";

import { Provider } from "react-redux";
import { store } from "../store";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <Provider store={store}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Coop" component={CoopScreen} />
        <MainStack.Screen name="CoopList" component={CoopListScreen} />
        <MainStack.Screen name="Categories" component={CategoriesScreen} />
        <MainStack.Screen name="UserProfile" component={UserProfileScreen} />
        <MainStack.Screen name="UserDetails" component={UserDetailsScreen} />
        <MainStack.Screen name="UserOrders" component={UserOrdersScreen} />
        <MainStack.Screen
          name="UserAddressBook"
          component={UserAddressBookScreen}
        />
        <MainStack.Screen
          name="UserPaymentMethods"
          component={UserPaymentMethodsScreen}
        />
        <MainStack.Screen
          name="UserNotifications"
          component={UserNotificationsScreen}
        />
        <MainStack.Screen name="FAQ" component={FAQScreen} />
        <MainStack.Screen name="Checkout" component={CheckoutScreen} />
        <MainStack.Screen name="Payment" component={PaymentScreen} />
        <MainStack.Screen name="Basket" component={BasketScreen} />
        <MainStack.Screen name="ProductList" component={ProductListScreen} />
        <MainStack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        />
        <MainStack.Screen
          name="RugsBasedProduct"
          component={RugsBasedProductScreen}
        />
        <MainStack.Screen
          name="ArganOilBasedProduct"
          component={ArganOilBasedProductScreen}
        />
        <MainStack.Screen
          name="CouscousBasedProduct"
          component={CouscousBasedProductScreen}
        />
        <MainStack.Screen
          name="LeatherBasedProduct"
          component={LeatherBasedProductScreen}
        />
        <MainStack.Screen
          name="HoneyBasedProduct"
          component={HoneyBasedProductScreen}
        />
        <MainStack.Screen
          name="JewerlyBasedProduct"
          component={JewerlyBasedProductScreen}
        />
      </MainStack.Navigator>
    </Provider>
  );
};

export default Main;
