import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Components/Home';
import ArticleDetail from '../Components/ArticleDetail';
import Search from '../Components/Search';

const HomeStack = createStackNavigator({
  Home: {
    screen:  Home,
    navigationOptions: {
      title: 'Actualité',
    }
  },
  ArticleDetail:  {
    screen: ArticleDetail
  }
});



export default HomeStack;
