import { createStackNavigator } from "react-navigation-stack";
import SportsCategory from "../Components/SportsCategory";
import ArticleDetail from '../Components/ArticleDetail'

const sportsStack = createStackNavigator({
    SportsCategory: {
        screen: SportsCategory,
        navigationOptions: {
            title: 'Sport'
        }
    },
    ArticleDetail:  {
      screen: ArticleDetail
    }
})

export default sportsStack;