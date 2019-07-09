import { createStackNavigator } from 'react-navigation';
import CreateChatScreen from '../screens/CreateChat/CreateChatScreenContainer';
import screens from './screens';

const routes = {    
    [screens.CreateChatScreen]: CreateChatScreen,
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',
});

