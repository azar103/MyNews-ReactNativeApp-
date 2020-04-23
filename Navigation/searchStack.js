import { createStackNavigator } from "react-navigation-stack";
import Search from "../Components/Search";
import ArticleDetail from '../Components/ArticleDetail'

const SearchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    },
    ArticleDetail: {
        screen: ArticleDetail
    }
})

export default SearchStack