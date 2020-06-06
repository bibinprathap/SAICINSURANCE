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
import {PersistGate} from 'redux-persist/es/integration/react';

import alertsHelper from './mainSrc/api/helperServices/alerts';
import {store, persistor} from './mainSrc/store';
import {SAICAlert} from './mainSrc/components/SAICAlert';
import NavigationService from './mainSrc/navigation/NavigationService';
import {StyleSheet, SafeAreaView} from 'react-native';
import {PrimaryColor} from './mainSrc/config';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
      <PersistGate loading={null} persistor={persistor}>
        
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
         <SAICAlert ref={ref => alertsHelper.setAlertProviderNew(ref)} />
         </PersistGate>
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
