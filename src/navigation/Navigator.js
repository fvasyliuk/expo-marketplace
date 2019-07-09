import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import NewItemModalNavigator from './NewItemModalNavigator';
import ChatModalNavigator from './ChatModalNavigator';
import EmptyScreenView from '../screens/Empty';
import FiltersModalNavigator from './FiltersModalNavigator.1';
import CreateChatModalNavigator from './CreateChatModalNavigator';
import screens from './screens';


const routes = {
    [screens.Empty]: EmptyScreenView,
    [screens.Main]: MainNavigator,
    [screens.NewItemModal]: NewItemModalNavigator,
    [screens.FiltersModal]: FiltersModalNavigator,
    [screens.ChatModal]: ChatModalNavigator,
    [screens.CreateChatModal]: CreateChatModalNavigator,
}

export default createStackNavigator(routes, {
    headerMode: 'none',
    mode: 'modal',
});

