import { createStackNavigator } from 'react-navigation';
import InboxScreen from '../screens/Inbox/InboxScreenContainer';
import screens from './screens';

const routes = {
    [screens.Inbox]: InboxScreen,   
    
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',
});

