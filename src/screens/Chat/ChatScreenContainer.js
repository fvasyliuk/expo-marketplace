import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, hoistStatics, withState } from 'recompose';
import { chatsOperations, chatsSelectors } from '../../modules/chats';
import { messagesOperations, messagesSelectors } from '../../modules/messages';
import ChatView from './ChatScreenView';



const mapStateToProps = (state, { navigation }) => {
    
    const chatId = navigation.state.params.id;
    return {
        chatId,
        isLoading: state.messages.fetchMessages.isLoading,
        items: messagesSelectors.getMessages(state, chatId),
        user: chatsSelectors.getUserWithChatId(state, chatId),
        viewer: state.viewer.user,
    }
};

const mapDispatchToProps = {
    fetchChats: chatsOperations.fetchChats,
    fetchMessages: messagesOperations.fetchMessages,
    sendMessages: messagesOperations.sendMessage,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        sendMessage: props => () => {
            props.sendMessages(props.chatId, props.text);
            props.setText('');
        },
    }),
    lifecycle({
        componentDidMount() {
            if (!this.props.items.length) {
                this.props.fetchMessages(this.props.chatId);
            };
            if (!this.props.user) {
                this.props.fetchChats();
            };
            this.props.navigation.setParams({viewer: this.props.viewer})
        },
    })
);

export default hoistStatics(enhancer)(ChatView);