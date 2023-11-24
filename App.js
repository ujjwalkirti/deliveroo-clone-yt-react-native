import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import {Provider} from 'react-redux'
import { store } from "./store";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <stack.Navigator>
          <stack.Screen name="Home" component={HomeScreen} />
          <stack.Screen name="Restaurant" component={RestaurantScreen} />
        </stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
