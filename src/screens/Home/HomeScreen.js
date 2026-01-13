import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { COLORS } from '../../constants/Colour';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import CommonHeader from '../../components/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import RiskCard from './RiskCard';
import HealthCard from './HealthCard';
import ImagesPath from '../../constants/ImagesPath';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { FONTS } from '../../constants/Fonts';
import HealthLineChart from './HealthLineChart';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { width } = Dimensions.get('window');
  useContext(LanguageContext);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <CommonHeader
        title={i18n.t('welcome')}
        subTitle={i18n.t('health_overview')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RiskCard />
        <HealthCard />
        <View style={styles.addReportContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddHealthData')
            }
          >
            <View
              style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
            >
              <View
                style={[
                  styles.innerContainer,
                  {
                    backgroundColor: theme.innerBackground,
                    borderColor: theme.inputBorder,
                    width: width / 2.3,
                  },
                ]}
              >
                <Image
                  source={ImagesPath.plus}
                  style={[styles.plusIcon, { tintColor: theme.text }]}
                />
                <Text style={[styles.addHealth, { color: theme.text }]}>
                  {i18n.t('addHealthData')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
              navigation.navigate('UploadScreen')
            }>
            <View
              style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
            >
              <View
                style={[
                  styles.innerContainer,
                  {
                    backgroundColor: theme.innerBackground,
                    borderColor: theme.inputBorder,
                    width: width / 2.3,
                  },
                ]}
              >
                <Image
                  source={ImagesPath.document}
                  style={[styles.plusIcon, { tintColor: theme.text }]}
                />
                <Text style={[styles.addHealth, { color: theme.text }]}>
                  {i18n.t('scanLabReport')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <HealthLineChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
  addReportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(15),
    // marginHorizontal: 10,
  },

  innerContainer: {
    borderRadius: RFValue(10),
    paddingVertical: RFValue(10),
    // paddingHorizontal: RFValue(8),

    flexDirection: 'row',
    gap: RFValue(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  plusIcon: {
    height: RFValue(15),
    width: RFValue(15),
    resizeMode: 'contain',
  },
  addHealth: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
});
