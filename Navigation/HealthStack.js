import {createStackNavigator} from 'react-navigation-stack';
import ArticleDetail from '../Components/ArticleDetail';
import HealthCategory from '../Components/HealthCategory';

const HealthStack = createStackNavigator({
  Health: {
    screen:  HealthCategory,
    navigationOptions: {
      title: 'Sante',
    }
  },
  ArticleDetail:  {
    screen: ArticleDetail
  }
});



export default HealthStack;
