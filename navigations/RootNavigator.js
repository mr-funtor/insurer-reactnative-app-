import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/HomeScreen";
//import Addition from "../screens/AdditionScreen";
import BottomTab from "./bottomNavigator"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottom nav'>
        <Stack.Screen name='bottom nav' options={{headerShown:false}} component={BottomTab} />
        <Stack.Screen name='Add to Valuables' options={{headerShown:false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//<Stack.Screen name='Add to Valuables' options={{headerShown:false}} component={Addition} />