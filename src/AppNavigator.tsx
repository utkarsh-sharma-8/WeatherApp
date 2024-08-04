import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";
import HomeScreen from './HomeScreen';
const Stack=createStackNavigator();
const AppNavigator=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;