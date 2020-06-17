import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import Icons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../api/helperServices/language';
import { PrimaryColor } from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import DefaultText from '../../components/DefaultText';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};
const cards = {
  text: 'Card One',
  name: 'One',
  image: require('./img/swiper-2.png'),
};
var windowSize = Dimensions.get('window');
class VewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 0,
          CardNumber: "C951-52D2-D491-807B",
          Policy: 'GRX-5835',
          ValidDate: "14-10-2020",
          GodId: "784-189-313039-5",
          Category: "CAT A",
          Yob: '1982',
          Hadd: '30089',
          StaffID: "201800001",
          name: 'BIBIN PRATHAP ABRAHAM PRATAP',
          Company: 'TECH MAHENDRA LTD-ABU'
        },
        {
          id: 1,
          CardNumber: "D952-62D2-D491-807B",
          status: 'Not Used',
          Policy: 'GRX-5835',
          ValidDate: "14-12-2020",
          GodId: "884-289-313039-6",
          Category: "CAT B",
          Yob: '2001',
          Hadd: '33089',
          StaffID: "202000001",
          name: 'MY SELF',
          Company: 'TECH MAHENDRA LTD-ABU'
        },
      ],
    };
  }

  renderItem = item => {
    let dataItem = item.item;
    const { language } = this.props;
    return (
      // <View>
      //   <View style={{ flexDirection: 'row', marginTop: 10 }}>

      //     <Text
      //       style={{
      //         textAlign: 'left',
      //         fontWeight: 'bold',
      //         fontSize: normalizeFont(14),
      //         color: '#000000',
      //         paddingBottom: hp('1'),
      //       }}>
      //       {dataItem.name}
      //     </Text>
      //     <Icons
      //       size={hp('2.5')}
      //       style={{ position: 'absolute', right: 0 }}
      //       name="file-download"
      //       color= {PrimaryColor}
      //     />
      //   </View>
      //   <Image style={{ height: 320, width: windowSize.width, flex: 1 }} source={dataItem.image} />
      // </View>


      <View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: normalizeFont(14),
              color: '#000000',
              paddingBottom: hp('1'),
            }}>
            {dataItem.name}
          </Text>
          <Icons
            size={hp('2.5')}
            style={{position: 'absolute', right: 0}}
            name="file-download"
            color={PrimaryColor}
          />
        </View>

        <View style={styles.renderItem}>

          <View style={{ width: 2, height: '80%', backgroundColor: '#ccc' }} />
          <View style={{ flex: 0.8 }}>
            <View style={styles.valueContainer}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: normalizeFont(17),
                  color: '#FFA500',
                }}>
                {dataItem.name}
              </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <View style={styles.valueContain}>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 5, fontWeight: 'bold', marginTop: 15 }}>
                    {' '}
                    {'Policy#:'}
                  </Text>


                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 15
                    }}>
                    {dataItem.Policy}
                  </Text>
                </View>
              </View>
              <View style={styles.cardContain}>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 5, fontWeight: 'bold', marginTop: 10 }}>
                    {' '}
                    {'Card#:'}
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 10,
                    }}>
                    {dataItem.CardNumber}
                  </Text>
                </View>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 65, fontWeight: 'bold', marginTop: 10 }}>
                    {' '}
                    {'Valid Until:'}
                  </Text>


                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 10
                    }}>
                    {dataItem.ValidDate}
                  </Text>
                </View>
              </View>
              <View style={styles.cardContain}>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 5, fontWeight: 'bold', marginTop: 10 }}>
                    {' '}
                    {'Gov Id:'}
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 10
                    }}>
                    {dataItem.GodId}
                  </Text>
                </View>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 65, fontWeight: 'bold', marginTop: 10 }}>
                    {' '}
                    {'Category:'}
                  </Text>


                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 10
                    }}>
                    {dataItem.Category}
                  </Text>
                </View>
              </View>
              <View style={styles.cardContain}>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 5, fontWeight: 'bold', marginTop: 10 }}>
                    {' '}
                    {'YOB:'}
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 10
                    }}>
                    {dataItem.Yob}
                  </Text>
                </View>
                <View style={styles.keyValue}>
                  <Text style={{ paddingLeft: 65, fontWeight: 'bold', marginTop: 10 }}>
                    {' '}
                    {'HADD #:'}
                  </Text>


                  <Text
                    style={{
                      color: 'grey',
                      fontSize: normalizeFont(12),
                      fontFamily: 'Roboto-Light',
                      marginTop: 10
                    }}>
                    {dataItem.Hadd}
                  </Text>
                </View>
              </View>
              <View style={styles.keyValue}>
                <Text style={{ paddingLeft: 12, fontWeight: 'bold' , marginTop: 10}}>
                  {' '}
                  {'StaffID:'}
                </Text>


                <Text
                  style={{
                    color: 'grey',
                    fontSize: normalizeFont(12),
                    fontFamily: 'Roboto-Light',
                    marginTop: 10
                  }}>
                  {dataItem.StaffID}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10, paddingLeft: 12 }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: normalizeFont(15),
                    color: '#40E0D0',
                  }}>
                  {dataItem.Company}
                </Text>
              </View>

            </View>
          </View>
        </View>
      </View>
    );
  };
  render() {
    const {language} = this.props;
    return (
      <View style={styles.screen}>
        <Header
          Back
          navigation={this.props.navigation}
          Heading={strings({key: 'ViewECard', language})}
        />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.headerView}>
            <View style={{flex: 0.8}}>
              <Text style={styles.BeneficiaryText}>
                {strings({key: 'PolicyNumber', language})}
              </Text>
            </View>

            <View style={styles.RightView}>
              <Text style={[styles.textObj, {paddingRight: hp('1')}]}>
                GRX-5835
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.9,
              justifyContent: 'space-between',
              backgroundColor: '#F7F7F7',
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#F7F7F7',
                paddingHorizontal: hp('2'),
                paddingTop: 10,
              }}>
              <FlatList
                data={
                  language === 'English'
                    ? this.state.dataSource
                    : this.state.dataSourceAR
                }
                keyExtractor={(item, index) => item.id}
                renderItem={itemDtata => this.renderItem(itemDtata)}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
  headerView: {
    flex: 0.1,
    backgroundColor: PrimaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp('1'),
  },
  BeneficiaryText: {
    color: '#fff',
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  RightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.3,
    paddingRight: hp('1'),
  },
  textObj: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
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
    height: hp('6'),
    backgroundColor: 'white',
    marginTop: hp(-'3'),
    marginHorizontal: hp('2'),
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    borderRadius: 5,
    elevation: 4,
    paddingLeft: 5,
  },
  renderItem: {
    height: hp('28'),
    width: '97%',
    backgroundColor: '#fff',
    margin: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dateText: {
    textAlign: 'center',
    color: PrimaryColor,
    fontSize: normalizeFont(30),
  },
  valueContainer: {
    flex: 0.1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  topView: {
    height: hp('1'),
    width: hp('1'),

    borderRadius: hp('1'),
    marginRight: hp('1'),
  },
  valueContain: {
    height: hp('2.5'),
    width: '100%',
    marginBottom: 5,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  cardContain: {
    height: hp('3.5'),
    width: '100%',
    marginBottom: 5,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  keyValue: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
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

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(VewCard);
