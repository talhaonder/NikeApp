import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";

import Icon from 'react-native-vector-icons/FontAwesome'; // Örnek olarak FontAwesome kütüphanesini kullanıyorum, gerçek kütüphanenizi buraya eklemelisiniz
import { Pressable, Text } from "react-native";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white'}}}>
                <Stack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: "row"}}>
                                <Icon name="shopping-cart" size={21}/>
                                <Text style={{marginLeft: 5, fontWeight: '500'}}>1</Text>
                            </Pressable>
                        )
                    })} />
                <Stack.Screen
                    name="Product Details"
                    component={ProductDetailsScreen}
                    options={{ presentation: "modal" }} />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;