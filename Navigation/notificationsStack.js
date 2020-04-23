import { createStackNavigator } from "react-navigation-stack";
import Notifications from "../Components/Notifications";

const NotificationsStack = createStackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            title: 'Notifications',
        }
    }
})

export default NotificationsStack