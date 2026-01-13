import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeContext';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../../components/CommonHeader';
import ImagesPath from '../../constants/ImagesPath';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';

const HealthScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  useContext(LanguageContext);
  const HealthData = [
    {
      name: 'bloodsugar',
      status: 'stable',
      value: '95 mg/dl',
      statusData: 'normal',
    },
    {
      name: 'bloodPressure',
      status: 'stable',
      value: '120/80',
      statusData: 'normal',
    },
    {
      name: 'weight',
      status: 'down',
      value: '72 kg',
      statusData: 'normal',
    },
    {
      name: 'cholesterol',
      status: 'stable',
      value: '180 mg/dL',
      statusData: 'normal',
    },
    {
      name: 'hba1c',
      status: 'up',
      value: '5.4%',
      statusData: 'normal',
    },
  ];
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <CommonHeader
        title={i18n.t('healthSignals')}
        subTitle={i18n.t('trackVitalHealthMetrics')}
        headerStyles={{ marginBottom: RFValue(15) }}
      />
      <FlatList
        data={HealthData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
              onPress={() =>
                navigation.navigate('HealthDetail', {
                  item: item,
                })
              }
            >
              <View
                style={[
                  styles.innerContainer,
                  {
                    backgroundColor: theme.innerBackground,
                    borderColor: theme.inputBorder,
                  },
                ]}
              >
                <View>
                  <View style={styles.helthDetail}>
                    <Text style={[styles.helthTitle, { color: theme.text }]}>
                      {i18n.t(item.name)}
                    </Text>
                    <View
                      style={[
                        styles.statusContiner,
                        {
                          backgroundColor:
                            item.status === 'up'
                              ? COLORS.yellow + '20'
                              : COLORS.brightGreen.slice(0, 7) + '20',
                        },
                      ]}
                    >
                      {item.status === 'stable' && (
                        <Image
                          source={ImagesPath.horizontalLine}
                          style={[styles.statusIcon, { width: RFValue(10) }]}
                        />
                      )}

                      {item.status === 'up' && (
                        <Image
                          source={ImagesPath.chartUp}
                          style={[
                            styles.statusIcon,
                            { tintColor: COLORS.yellow },
                          ]}
                        />
                      )}

                      {item.status === 'down' && (
                        <Image
                          source={ImagesPath.chartDown}
                          style={styles.statusIcon}
                        />
                      )}
                      <Text
                        style={[
                          styles.status,
                          {
                            color:
                              item.status === 'up'
                                ? COLORS.yellow
                                : COLORS.green,
                          },
                        ]}
                      >
                        {i18n.t(item.status)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.helthDetail}>
                    <Text style={[styles.value, { color: theme.text }]}>
                      {item.value}
                    </Text>
                    <Text
                      style={[
                        styles.statusData,
                        {
                          color:
                            item.status === 'up' ? COLORS.yellow : COLORS.green,
                        },
                      ]}
                    >
                      {i18n.t(item.statusData)}
                    </Text>
                  </View>
                </View>

                <Image
                  source={ImagesPath.rightArrow}
                  style={[styles.rightIcon, { tintColor: theme.inputBorder }]}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HealthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(10),
  },

  innerContainer: {
    borderRadius: RFValue(10),
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(12),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  helthTitle: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
  helthDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
  },
  statusContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(3),
    paddingVertical: RFValue(2),
    paddingHorizontal: RFValue(5),
    borderRadius: RFValue(10),
  },
  status: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(10),
  },
  statusIcon: {
    height: RFValue(15),
    width: RFValue(15),
    resizeMode: 'contain',
    tintColor: COLORS.green,
  },
  value: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(16),
    marginTop: RFValue(5),
  },
  statusData: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(11),
    marginTop: RFValue(5),
  },
});
