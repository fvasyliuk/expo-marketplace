import SettingsScreen from './SettingsScreenView';
import { compose, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { NavigationServices } from '../../services';
import { authOperations } from '../../modules/auth';

const mapDispatchToProps = {
    logout: authOperations.logout,
};

const enhancer = compose(
    connect(undefined, mapDispatchToProps),
    withHandlers({
        handleLogout: (props) => () => {
            Alert.alert(
                'Logout',
                'Are you sure you want to logout?',
                [
                    {text: 'OK', onPress: () => {
                        props.logout();
                        NavigationServices.navigateToLogin();
                    }},
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                ],
            );
            
        }
    }),
);

export default hoistStatics(enhancer)(SettingsScreen);