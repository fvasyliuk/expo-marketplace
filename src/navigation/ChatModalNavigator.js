import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import ChatScreen from '../screens/Chat/ChatScreenContainer';
import CreateChatScreen from '../screens/CreateChat/CreateChatScreenContainer';
import screens from './screens';

const routes = {
    [screens.ChatScreen]: ChatScreen, 
    //[screens.CreateChatScreen]: CreateChatScreen,
       
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',    
});

