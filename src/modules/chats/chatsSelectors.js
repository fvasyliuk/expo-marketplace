import { createSelector } from 'reselect';
import { ProductList, UserList } from '../../api/schemas';
import { normalize } from 'normalizr';

const getChatsEntities = (state) => state.entities.chats;
const getChatEntiti = (state, id) => state.entities.chats[id];
const getUsersEntities = (state) => {     
    return state.entities.users
};
const getMessagesEntities = (state) => state.entities.messages;
const getProductsEntities = (state) => state.entities.products;
const getIds = (state) => state.chats.items;

export const getChats = createSelector(
    [getChatsEntities, getIds],
    (entities, ids) => ids.map((id) => entities[id])
);

export const getChatsWithLastMessage = createSelector(
    [getChats, getMessagesEntities],
    (items, messages) => items.map( item => ({
        ...item,
        lastMessage: messages[item.lastMessage],
    }))
);

export const getTitleChats = createSelector(
    [getChats, getProductsEntities],
    (chats, productsEntities) => {
        
    const productList = chats.map( chat => productsEntities[chat.productId])
    
    const { entities } = normalize(productList, ProductList)

    return entities.products;
    }
);

export const getUsersChats = createSelector(
    [getChats, getUsersEntities],
    (chats, usersEntities) => {    
    const usersList = chats.map( chat => usersEntities[chat.participants[0]])
    
    const { entities } = normalize(usersList, UserList)



    return entities.users;
    }
);

export const getUserWithChatId = createSelector(
    [getChatEntiti, getUsersEntities],
    (chat, userEntities) => {
        if ( !chat || !chat.participants) {
            return undefined;
        }
        
        return userEntities[chat.participants[0]]
    }
);
