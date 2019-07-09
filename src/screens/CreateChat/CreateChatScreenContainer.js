import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, hoistStatics, withState } from 'recompose';
import { chatsOperations, chatsSelectors } from '../../modules/chats';
import { messagesOperations, messagesSelectors } from '../../modules/messages';
import { productsSelectors } from '../../modules/products';
import ChatView from './CreateChatScreenView';
import { NavigationServices } from '../../services';




const mapStateToProps = (state, { navigation }) => {
   
    const productId = navigation.state.params.productId;
    const userId = navigation.state.params.userId;
    return {
        productId,        
        user: productsSelectors.getUser(state, userId),
        viewer: state.viewer.user,
        isLoading: state.chats.createChat.isLoading,
    }
};

const mapDispatchToProps = {
    createChat: chatsOperations.createChat,
    sendMessages: messagesOperations.sendMessage,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        sendMessage: props => async () => {
            
            chatId = await props.createChat(props.productId);
            
            await props.sendMessages(chatId, props.text);
            
            props.setText('');
            NavigationServices.navigateToChat(chatId)
        },
    }),
    lifecycle({
        componentDidMount() {            
            this.props.navigation.setParams({viewer: this.props.viewer})            
        },
    })
);

export default hoistStatics(enhancer)(ChatView);