import { handleActions } from '@letapp/redux-actions';
import * as actions from './persistActions';

const INITIAL_STATE = {
    location: {
        items: [],
    },

    keyword: {
        items: [],
    },
}

export default handleActions({
    [actions.addKeyword]: (state, actions) => ({
        ...state,
        keyword: {
            ...state.keyword,
            items: state.keyword.items.concat(actions.payload)
        },        
    }),
    [actions.addLocation]: (state, actions) => ({
        ...state,
        location: {
            ...state.location,
            items: state.location.items.concat(actions.payload)
        },        
    }),
}, INITIAL_STATE);