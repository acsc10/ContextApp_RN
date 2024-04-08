import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { BottonTabNavigator } from "./presentation/navigators/BottonTabNavigator"

export const Main = () => {
  return (
    <NavigationContainer>
        <BottonTabNavigator/>
    </NavigationContainer>
   
  )
}
