import * as actions from './appActions';
import Api, { SocketApi } from '../../api';
import { viewerOperations } from '../viewer';
import { messagesOperations } from '../messages';
import { NavigationServices } from '../../services';


export function subscribeToSockets() {
    return async function subscribeToSocketsThunk(dispatch) {
        SocketApi.handleMessages((message => dispatch(messagesOperations.handleMessageRealtime(message))))
    }
};

export function init() {
    return async function initThunk(dispatch, getState) {
        try {
            dispatch(actions.initialization.start());

            const token = await Api.init()
            if (!token) {
                throw new Error('No token exists');
            };
            const { user } = getState().viewer;            
            if (!user) {
                throw new Error('No user exists');
            }

            dispatch(actions.initialization.success());
            NavigationServices.navigateToApp();            

            await dispatch(viewerOperations.fetchViewer());           
            
            dispatch(subscribeToSockets());
        } catch (err) {
            NavigationServices.navigateToAuth();
            console.log(err);
            dispatch(actions.initialization.error({ message: err.message }))
        }
    }
};