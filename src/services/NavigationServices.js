import { NavigationActions } from 'react-navigation';
import screen from '../navigation/screens';

class NavigationServices {
    constructor() {
        this.navigation = null;
    }

    init(ref) {
        if (this.navigation) return;

        this.navigation = ref;
    }

    navigate(route) {        
        this.navigation.dispatch(NavigationActions.navigate(route));
    }

    navigateToHome() {
        this.navigate({routeName: screen.Home});
    }

    navigateToAuth() {
        this.navigate({routeName: screen.Auth});
    }

    navigateToRegister() {
        this.navigate({routeName: screen.Register});
    }

    navigateToLogin() {
        this.navigate({routeName: screen.Login});
    }

    navigateToProfile() {
        this.navigate({ routeName: screen.Profile });
    }
        
    navigateToApp() {
        this.navigate({routeName: screen.MainApp});
    }

    navigateToNewItemModal() {
        this.navigate({routeName: screen.NewItemModal});
    }

    navigateToFiltersModal(params) {
        this.navigate({routeName: screen.FiltersModal, params});
    }

    goBack() {
        this.navigation.dispatch(NavigationActions.back());
    }

    navigateToSettings() {
        this.navigate({routeName: screen.Settings});
    }

    navigateToLocation(params) {
        this.navigate({routeName: screen.Location, params: {...params}});
    }

    navigateToBrowse() {
        this.navigate({routeName: screen.Browse});
    }

    navigateToProduct(id) {
        this.navigate({
            routeName: screen.Product, 
            params: {
                id,
            },
        });
    }

    navigateToChat(id) {
        this.navigate({
            routeName: screen.ChatScreen, 
            params: {
                id,
            },
        });
    }

    navigateToCreateChat(params) {
        this.navigate({
            routeName: screen.CreateChatScreen, 
            params,
        });
    }

    navigateToOwner(id) {
        this.navigate({
            routeName: screen.Owner, 
            params: {
                id,
            },
        });
    }

    navigateToSearch(query) {
        this.navigate({
            routeName: screen.Search, 
            params: {
                query,
            },
        });
    }
}

export default new NavigationServices();