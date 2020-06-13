import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.navigation.navigate('Language');
  };

  render() {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </SafeAreaView>
    );
  }
}

export default AuthLoadingScreen;
