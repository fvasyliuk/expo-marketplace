import { compose, lifecycle, withHandlers, hoistStatics, withState } from 'recompose';
import { connect } from 'react-redux';
import { persistOperations } from '../../modules/persist';
import KeywordView from './KeywordView';

function mapStateToProps(state) {  
    return {
        items: state.persist.keyword.items,
    };
};


const enhancer = compose(
    //connect(mapStateToProps), 

);

export default enhancer(KeywordView);