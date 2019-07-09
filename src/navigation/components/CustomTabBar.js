import React from 'react';
import T from 'prop-types';
import { BottomTabBar } from 'react-navigation-tabs';
import { compose, withHandlers } from 'recompose';
import { NavigationServices } from '../../services';
import screens from '../screens';

const TabBarBottomCustom = ({
    customJumpToIndex,
    ...props
}) => (
    <BottomTabBar
        {...props}
        onTabPress={customJumpToIndex} 
    />
);

TabBarBottomCustom.propTypes = {
    customJumpToIndex: T.func,
};

const enhancer = compose(
    withHandlers({
        customJumpToIndex: props => (route) => {
            if (route.route.key === screens.TabCreateItem) {
                props.navigation.navigate({routeName: screens.NewItemModal});
            } else {
                props.jumpTo(route.route.key);
            }
        },
    }),
);

export default enhancer(TabBarBottomCustom);
