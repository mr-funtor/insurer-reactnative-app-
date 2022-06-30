import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import InsuranceScreen from '../screens/InsuranceScreen'
import SearchScreen from '../screens/SearchScreen'
import MenuScreen from '../screens/MenuScreen'
import ValuableScreen from '../screens/ValuableScreen'

const Tab = createBottomTabNavigator();

const MyTabs=()=>{
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName='Inventory'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Insurance" component={InsuranceScreen} />
      <Tab.Screen name="Inventory" component={ValuableScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
