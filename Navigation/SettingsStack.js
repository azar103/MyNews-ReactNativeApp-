import { createStackNavigator } from "react-navigation-stack";
import Settings from "../Components/Settings";




const SettingsStack = createStackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Paramétres'
        }
    }
})

export default SettingsStack