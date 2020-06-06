import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';

import Icons from 'react-native-vector-icons/MaterialIcons';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_visible: false,
      expanded: false,
      animationValue: new Animated.Value(40),
      viewState: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({is_visible: true});
    }, 100);
  }

  toggleAnimation = () => {
    if (this.state.viewState == true) {
      Animated.timing(this.state.animationValue, {
        toValue: 40,
        timing: 0,
      }).start(() => {
        this.setState({viewState: false});
      });
    } else {
      Animated.timing(this.state.animationValue, {
        toValue: this.props.maxItem,
        timing: 0,
      }).start(this.setState({viewState: true}));
    }
  };

  toggleValue = () => {
    console.log('Hello');
    this.setState({viewState: false});
  };

  render() {
    const animatedStyle = {
      height: this.state.animationValue,
    };

    return (
      <TouchableWithoutFeedback style={{padding: 10}}>
        <Animated.View style={[styles.animatedBox, animatedStyle]}>
          <TouchableOpacity
            onPress={this.toggleAnimation}
            activeOpacity={1}
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              alignItems: 'center',
            }}>
            <Text style={styles.text}>{this.props.header}</Text>

            <Icons
              size={30}
              name={
                !this.state.viewState
                  ? 'keyboard-arrow-down'
                  : 'keyboard-arrow-up'
              }
              color="#ddd"
            />
          </TouchableOpacity>

          {this.state.viewState && (
            <View
              style={{
                flex: 1,
                width: '100%',
                paddingTop: 5,
              }}>
              {this.props.children}
            </View>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    paddingLeft: 5,
    fontFamily: 'UberMoveText-Light',
  },
  buttonImage: {
    width: 30,
    height: 25,
  },
  animatedBox: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
});

Panel.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  onPress: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Panel;
