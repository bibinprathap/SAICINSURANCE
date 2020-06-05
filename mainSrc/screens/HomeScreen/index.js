import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Animated,
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import {PrimaryColor} from '../../config';
import Icons from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OctIcon from 'react-native-vector-icons/Octicons';
import RoundButton from '../../components/RotateButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
const normalizeFont = size => {
  return size * (width * 0.0025);
};

const NAVBAR_HEIGHT = 40;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 0,
          title: 'Hospital',
          icon: 'domain',
        },
        {
          id: 1,
          title: 'Clinc & Daycare Centers',
          icon: 'record-voice-over',
        },
        {
          id: 2,
          title: 'Labs & Diagnostics Centers',
          icon: 'free-breakfast',
        },
        {
          id: 3,
          title: 'Pharmacies',
          icon: 'streetview',
        },
        {
          id: 4,
          title: 'Ambulance',
          icon: 'airport-shuttle',
        },
        {
          id: 5,
          title: 'Home Health care',
          icon: 'store-mall-directory',
        },
      ],

      moreItem: [
        {
          id: 0,
          title: 'My Documents',
          icon: 'date-range',
        },
        {
          id: 1,
          title: 'Policy Benefits',
          icon: 'filter-vintage',
        },
        {
          id: 2,
          title: 'View More',
          icon: 'featured-play-list',
        },
      ],
    };
  }

  renderItem = item => {
    let dataItem = item.item;
    return (
      <View style={styles.renderContainer}>
        <View style={styles.imageView}>
          <Icons
            size={hp('3.5')}
            style={{alignSelf: 'center'}}
            name={dataItem.icon}
            color={PrimaryColor}
          />
        </View>

        <Text style={[styles.middleText, {color: '#000'}]}>
          {dataItem.title}
        </Text>
      </View>
    );
  };

  renderMore = item => {
    let dataItem = item.item;
    let dataIndex = item.index;
    return (
      <View
        style={[
          styles.moreContainer,
          {
            backgroundColor: dataIndex % 2 == 0 ? '#4F107B' : PrimaryColor,
          },
        ]}>
        <View style={{flex: 0.7, justifyContent: 'space-around'}}>
          <View>
            <Icons
              size={hp('4')}
              style={{alignSelf: 'flex-start'}}
              name={dataItem.icon}
              color="#fff"
            />
          </View>
          <Text style={[styles.middleText, {textAlign: 'left', color: '#fff'}]}>
            {dataItem.title}
          </Text>
        </View>
        <View style={styles.moreNextView}>
          <Icons
            size={hp('3')}
            style={{alignSelf: 'center'}}
            name="arrow-forward"
            color="white"
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <Header
          {...this.props}
          navigation={this.props.navigation}
          Heading="MySAIC"
          profile
        />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.headerView}>
            <View style={styles.headerItem}>
              <Text style={styles.titleObj}>Hello Salah</Text>
              <Text style={styles.description}>How can we help you ?</Text>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.headerIcon}>
                <View style={{flex: 1, marginBottom: hp('1')}}>
                  <Icons
                    size={hp('4')}
                    style={{alignSelf: 'center'}}
                    name="card-membership"
                    color="white"
                  />
                  <Text style={styles.changePolicy}>Change Policy</Text>
                </View>
                <View style={{flex: 1}}>
                  <Icons
                    size={hp('3.5')}
                    style={{alignSelf: 'center'}}
                    name="featured-play-list"
                    color="white"
                  />
                  <Text style={styles.changePolicy}>View E-Card</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 0.9, backgroundColor: '#F7F7F7'}}>
            <View style={styles.middleContainer}>
              <View style={styles.middleItem}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Claim')}>
                  <Icons
                    size={hp('4')}
                    style={{alignSelf: 'center'}}
                    name="assignment"
                    color={PrimaryColor}
                  />
                  <Text style={styles.middleText}>CLAIMS</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.middleItem}>
                <Icons
                  size={hp('4')}
                  style={{alignSelf: 'center'}}
                  name="card-membership"
                  color={PrimaryColor}
                />
                <Text style={styles.middleText}>POLICY</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icons
                  size={hp('4')}
                  style={{alignSelf: 'center'}}
                  name="add-alert"
                  color={PrimaryColor}
                />
                <Text style={styles.middleText}>NOTIFICATION</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View style={styles.mainContainer}>
                <View style={{flex: 0.1, paddingVertical: hp('0.5')}}>
                  <Text style={styles.providerText}>Providers Network</Text>
                </View>

                <View style={styles.locationContainer}>
                  <Icons
                    size={hp('3.5')}
                    style={{alignSelf: 'center'}}
                    name="place"
                    color={PrimaryColor}
                  />
                  <Text
                    style={[
                      styles.middleText,
                      {
                        color: 'black',
                        paddingTop: 5,
                        fontFamily: 'Roboto-Medium',
                      },
                    ]}>
                    IRAQ
                  </Text>
                </View>

                <View style={styles.searchContainer}>
                  <Icons
                    size={hp('4')}
                    style={{alignSelf: 'center'}}
                    name="search"
                    color="#d1ccc0"
                  />
                  <TextInput placeholder="Search for hospitals and pharmacies" />
                </View>
                <View
                  style={{flex: 0.8, padding: hp('1'), marginTop: hp('0.6')}}>
                  <FlatList
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.id}
                    renderItem={itemdata => this.renderItem(itemdata)}
                  />
                </View>
              </View>
              <View style={styles.bottomContainer}>
                <View>
                  <Text style={styles.moreText}>More</Text>
                </View>
                <View style={{flex: 1}}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.state.moreItem}
                    keyExtractor={(item, index) => item.id}
                    renderItem={itemData => this.renderMore(itemData)}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <Animated.View style={styles.addButton}>
          <RoundButton>
            <OctIcon name="comment" size={hp('4')} color="#FFFFFF" />
          </RoundButton>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerView: {
    flex: 0.2,
    backgroundColor: PrimaryColor,
    flexDirection: 'row',
  },
  headerItem: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: hp('2'),
    paddingTop: hp('1'),
  },
  titleObj: {
    fontSize: normalizeFont(19),
    fontFamily: 'Lora-Bold',
    color: 'white',
  },
  description: {
    fontSize: normalizeFont(15),
    fontFamily: 'Roboto-Bold',
    color: 'white',
    paddingTop: 10,
  },
  headerIcon: {
    flex: 1,
    flexDirection: 'row',
  },
  changePolicy: {
    paddingHorizontal: hp('1.5'),
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  middleContainer: {
    flex: 0.15,
    backgroundColor: 'white',
    marginTop: hp(-'4'),
    marginHorizontal: hp('2'),
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    borderRadius: 10,
    elevation: 4,
  },
  middleItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: PrimaryColor,
  },
  middleText: {
    textAlign: 'center',
    color: PrimaryColor,
    fontFamily: 'Roboto-Medium',
  },
  addButton: {
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? NAVBAR_HEIGHT + 20 : NAVBAR_HEIGHT + 10,
    right: 20,
    height: hp('7'),
    width: hp('7'),
    backgroundColor: PrimaryColor,
    borderRadius: hp('4'),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderContainer: {
    height: hp('13'),
    width: '33%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageView: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: hp('7'),
    height: hp('7'),
    borderRadius: hp('4'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreContainer: {
    height: hp('10'),
    width: hp('20'),
    marginRight: hp('1'),
    justifyContent: 'space-around',
    paddingLeft: hp('1'),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',
    paddingRight: 10,
    elevation: 4,
  },
  moreNextView: {
    flex: 0.3,
    paddingTop: hp('3'),
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 0.7,
    marginHorizontal: hp('2'),
    backgroundColor: 'white',
    marginTop: hp('1.5'),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 4,
  },
  providerText: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: normalizeFont(17),
    paddingTop: hp('1'),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.1,
    paddingBottom: hp('1'),
  },
  searchContainer: {
    flex: 0.12,
    flexDirection: 'row',
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    paddingVertical: hp('1'),
  },
  bottomContainer: {
    flex: 0.25,
    marginHorizontal: hp('2'),
    paddingHorizontal: hp('1'),
    paddingVertical: hp('1'),
  },
  moreText: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: normalizeFont(17),
    paddingTop: hp('1'),
    paddingBottom: hp('1'),
  },
});

export default HomeScreen;
