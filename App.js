import React from 'react';
import { SplashScreen } from 'expo';
import { View, Text } from 'react-native';
import Navigator from './src/navigation/';
import { globalStyles } from './src/styles';
import { Provider } from 'react-redux';
import store, { createPersist } from './src/store/createStore';
import { appOperations } from './src/modules/app';


class App extends React.Component {
  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
  }  

  async componentDidMount() {
    console.disableYellowBox = true
    await createPersist(store);
    await store.dispatch(appOperations.init());
    SplashScreen.hide();
  }

  render() {
    return (  
      <View style={globalStyles.fillAll}> 
        <Provider store={store}>
          <Navigator />
        </Provider>                      
      </View>
    );
  }
}


export default App;