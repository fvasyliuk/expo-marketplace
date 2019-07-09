import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, hoistStatics, withState } from 'recompose';
import { chatsOperations, chatsSelectors } from '../../modules/chats';
import InboxView from './InboxScreenView';



const mapStateToProps = (state) => ({
    isLoading: state.chats.fetchChats.isLoading,
    items: chatsSelectors.getChatsWithLastMessage(state),
    products: chatsSelectors.getTitleChats(state),
    users: chatsSelectors.getUsersChats(state),
    viewer: state.viewer.user,
});

const mapDispatchToProps = {
    fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('isEmptyView', 'setIsEmptyView', false),
    withHandlers({
        createChatItems: (props) => () => {
            if (!props.items || !props.users || !props.products) {
                return undefined;
            }
            const chatItems = props.items.map((chat) => {
                let lastMessage = null;
                let userLastMessage = null;
                
                if (chat.lastMessage) {
                    lastMessage = chat.lastMessage.text;
                    // визначаємо кому належить останє повідомлення 
                    userLastMessage = chat.lastMessage.ownerId === props.viewer.id && 'You: ';
                        
                }
                
                return {
                    userName: props.users[chat.participants[0]].fullName,
                    title: props.products[chat.productId].title,
                    userLastMessage,
                    lastMessage,
                    avatar: props.users[chat.participants[0]].avatar,
                    chatId: chat.id,
                };
            })
            return chatItems;            
        },
    }),
    lifecycle({
        async componentDidMount() {
            const countChats = await this.props.fetchChats();
            this.props.setIsEmptyView(!countChats)         
        }
    })
);

export default hoistStatics(enhancer)(InboxView);