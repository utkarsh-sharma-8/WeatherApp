import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './HomeScreen';
const Stack=createStackNavigator();
const AppNavigator=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;