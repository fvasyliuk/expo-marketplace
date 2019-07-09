import { createStackNavigator } from 'react-navigation';
import FiltersScreen from '../screens/Filters/FiltersScreenContainer';
import LocationScreen from '../screens/Location/LocationScreenContainer';
import screens from './screens';

const routes = {
    [screens.FiltersScreen]: FiltersScreen,
    [screens.Location]: LocationScreen,
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',
    initialRouteName: screens.FiltersScreen,
});

