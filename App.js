import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Exersize from "./src/screens/ExersiceComponent"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exersize: Exersize
  },
  {
    initialRouteName: "Exersize",
    defaultNavigationOptions: {
      title: "My App"
    }
  }
);

export default createAppContainer(navigator);
