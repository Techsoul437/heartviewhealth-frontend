import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonHeader from '../../components/CommonHeader';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';
import ImagesPath from '../../constants/ImagesPath';

const SettingScreen = () => {
  const navigation = useNavigation();
  const { setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useTheme();
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => {
    const newValue = !isHindi;
    setIsHindi(newValue);
    setLanguage(newValue ? 'hi' : 'en');
  };
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <CommonHeader
        title={i18n.t('settings')}
        subTitle={i18n.t('managePreferences')}
        headerStyles={{ marginBottom: RFValue(15) }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
          onPress={toggleTheme}
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
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              {i18n.t('appearance')}
            </Text>
            <View style={styles.modeBox}>
              <View>
                <Text style={[styles.theme, { color: theme.text }]}>
                  {i18n.t('theme')}
                </Text>
                <Text style={[styles.modeText, { color: COLORS.softGray }]}>
                  {theme.mode === 'dark'
                    ? i18n.t('darkMode')
                    : i18n.t('lightMode')}
                </Text>
              </View>
              <Image
                source={
                  theme.mode === 'dark'
                    ? ImagesPath.darkMode
                    : ImagesPath.lightMode
                }
                style={styles.modeIcon}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
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
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              {i18n.t('language')}
            </Text>
            <View style={styles.switchRow}>
              <Text style={[styles.itemText, { color: theme.text }]}>
                {isHindi ? 'हिन्दी' : 'English'}
              </Text>

              <Switch
                value={isHindi}
                onValueChange={toggleLanguage}
                trackColor={{ false: '#ccc', true: '#4CAF50' }}
                thumbColor="#fff"
              />
            </View>
          </View>
        </View>
        <View
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
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
            <Text
              style={[
                styles.sectionTitle,
                { color: theme.text, marginBottom: RFValue(0) },
              ]}
            >
              {i18n.t('profile')}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('editProfile')}
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.horizontalLine,
                { borderTopColor: theme.inputBorder },
              ]}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('EditHealthProfile')}>
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('healthProfile')}
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.horizontalLine,
                { borderTopColor: theme.inputBorder },
              ]}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('EditFamilyDetails')}>
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('familyMembers')}
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.horizontalLine,
                { borderTopColor: theme.inputBorder },
              ]}
            />
            <TouchableOpacity>
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('emergencyContacts')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
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
            <Text
              style={[
                styles.sectionTitle,
                { color: theme.text, marginBottom: RFValue(0) },
              ]}
            >
              {i18n.t('about')}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')}>
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('privacyPolicy')}
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.horizontalLine,
                { borderTopColor: theme.inputBorder },
              ]}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('TermsOfService')}>
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('termsOfService')}
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.horizontalLine,
                { borderTopColor: theme.inputBorder },
              ]}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('SupportScreen')}>
              <Text style={[styles.profileText, { color: theme.text }]}>
                {i18n.t('helpSupport')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}> {i18n.t('logout')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

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
    marginTop: RFValue(12),
  },

  innerContainer: {
    borderRadius: RFValue(10),
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(12),
    borderWidth: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  sectionTitle: {
    fontSize: RFValue(14),
    fontFamily: FONTS.MEDIUM,
    // marginTop: RFValue(20),
    marginBottom: RFValue(15),
  },
  theme: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  modeText: {
    fontSize: RFValue(11),
    fontFamily: FONTS.REGULAR,
  },
  modeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modeIcon: {
    height: RFValue(40),
    width: RFValue(40),
    resizeMode: 'contain',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 12,
  },
  itemText: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  profileText: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
    marginTop: RFValue(15),
  },
  horizontalLine: {
    borderTopWidth: 1,
    marginTop: RFValue(10),
  },
  logoutBtn: {
    borderWidth: 2,
    borderColor: COLORS.softRed,
    borderRadius: RFValue(15),
    // paddingVertical: RFValue(10),
    height: RFValue(40),
    marginTop: RFValue(12),
    justifyContent: 'center',
  },
  logoutText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(12),
    color: COLORS.softRed,
    textAlign: 'center',
  },
});
