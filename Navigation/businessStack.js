import { createStackNavigator } from "react-navigation-stack";
import BusinessCategory from "../Components/BusinessCategory";
import ArticleDetail from "../Components/ArticleDetail";


const businessStack = createStackNavigator({
    BusinessCategory: {
        screen: BusinessCategory,
        navigationOptions: {
            title: 'Economie'
        }
    },
    ArticleDetail: {
        screen: ArticleDetail
    }
    
})

export default businessStack;