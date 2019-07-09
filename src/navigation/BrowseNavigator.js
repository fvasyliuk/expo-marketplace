import { createStackNavigator } from 'react-navigation';
import BrowseScreen from '../screens/Browse/BrowseScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
import OwnerScreen from '../screens/Owner/OwnerScreenContainer';
import SearchScreen from '../screens/Search/SearchScreenContainer';
import screens from './screens';

const routes = {   
    [screens.Browse]: BrowseScreen,   
    [screens.Product]: ProductScreen,
    [screens.Owner]: OwnerScreen,
    [screens.Search]: SearchScreen,
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',
});

