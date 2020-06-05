import React, {Component} from 'react';
// import Navigator from './src/navigator';
// import {AuthService} from './src/services';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     AuthService.init();
//   }

//   render = () => <Navigator />;
// }

import AppNavigator from './mainSrc/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './mainSrc/store';
import NavigationService from './mainSrc/navigation/NavigationService';
import {StyleSheet, SafeAreaView} from 'react-native';
import {PrimaryColor} from './mainSrc/config';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
});

export default App;
