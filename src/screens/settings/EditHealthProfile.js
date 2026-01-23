import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/Fonts';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import ImagesPath from '../../constants/ImagesPath';
import CommonTextInput from '../../components/CommonTextInput';
import CommonRadioGroup from '../../components/CommonRadioGroup';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/Colour';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';

const EditHealthProfile = () => {
  const { theme } = useTheme();
  useContext(LanguageContext);
  const navigation = useNavigation();
  const [height, setHeight] = useState('175cm');
  const [weight, setWeight] = useState('55kg');
  const [bloodPressure, setBloodPressure] = useState('no');
  const [sugar, setSugar] = useState('no');
  const [history, setHistory] = useState('none');
  const [smoking, setSmoking] = useState('no');

  const [heightError, setHeightError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [bloodPressureError, setBloodPressureError] = useState('');
  const [sugarError, setSugarError] = useState('');
  const [historyError, setHistoryError] = useState('');
  const [smokingError, setSmokingError] = useState('');

  const onContinue = () => {
     navigation.goBack()
    let valid = true;

    if (!height.trim()) {
      setHeightError('Please enter your height');
      valid = false;
    } else if (isNaN(height) || Number(height) <= 0) {
      setHeightError('Enter a valid height');
      valid = false;
    }

    if (!weight.trim()) {
      setWeightError('Please enter your weight');
      valid = false;
    } else if (isNaN(weight) || Number(weight) <= 0) {
      setWeightError('Enter a valid weight');
      valid = false;
    }

    if (!bloodPressure) {
      setBloodPressureError('Please select an option');
      valid = false;
    }

    if (!sugar) {
      setSugarError('Please select an option');
      valid = false;
    }

    if (!history) {
      setHistoryError('Please select an option');
      valid = false;
    }

    if (!smoking) {
      setSmokingError('Please select an option');
      valid = false;
    }

    if (!valid) return;

    navigation.goBack()
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 ,marginBottom:50}}
          
        >
          <View style={{ flex: 1 }}>
            <View
              style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
            >
              <View
                style={[
                  styles.innerContainer,
                  { backgroundColor: theme.innerBackground },
                ]}
              >
                <TouchableOpacity
                  style={styles.headerBack}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={ImagesPath.leftArrow}
                    style={styles.leftIcon}
                  />
                  <Text style={[styles.back, { color: theme.text }]}>{i18n.t('back')}</Text>
                </TouchableOpacity>
                <Text style={[styles.profileText, { color: theme.text }]}>
                 {i18n.t('editHealthProfile')}
                </Text>

                <CommonTextInput
                  label={i18n.t('height')}
                  placeholder={i18n.t('heightExample')}
                  value={height}
                  onChangeText={text => {
                    setHeight(text);
                    setHeightError('');
                  }}
                  error={heightError}
                />

                <CommonTextInput
                  label={i18n.t('weightkg')}
                  placeholder={i18n.t('weightExample')}
                  value={weight}
                  onChangeText={text => {
                    setWeight(text);
                    setWeightError('');
                  }}
                  error={weightError}
                />

                <CommonRadioGroup
                  label={i18n.t('bloodPressureConcern')}
                  value={bloodPressure}
                  options={[
                    { label: (i18n.t('yes')), value: 'yes' },
                    { label: (i18n.t('no')), value: 'no' },
                  ]}
                  onChange={val => {
                    setBloodPressure(val);
                    setBloodPressureError('');
                  }}
                  error={bloodPressureError}
                />

                <CommonRadioGroup
                  label={i18n.t('bloodSugarConcern')}
                  value={sugar}
                  options={[
                     { label: (i18n.t('yes')), value: 'yes' },
                    { label: (i18n.t('no')), value: 'no' },
                  ]}
                  onChange={val => {
                    setSugar(val);
                    setSugarError('');
                  }}
                  error={sugarError}
                />

                <CommonRadioGroup
                  label={i18n.t('heartProblemHistory')}
                  value={history}
                  options={[
                    { label: (i18n.t('self')), value: 'self' },
                    { label: (i18n.t('family')), value: 'family' },
                    { label: (i18n.t('none')), value: 'none' },
                  ]}
                  onChange={val => {
                    setHistory(val);
                    setHistoryError('');
                  }}
                  error={historyError}
                />

                <CommonRadioGroup
                  label={i18n.t('smokingTobacco')}
                  value={smoking}
                  options={[
                     { label: (i18n.t('yes')), value: 'yes' },
                    { label: (i18n.t('no')), value: 'no' },
                    { label: (i18n.t('past')), value: 'past' },
                  ]}
                  onChange={val => {
                    setSmoking(val);
                    setSmokingError('');
                  }}
                  error={smokingError}
                />

                <GradientButton
                  title={i18n.t('saveChanges')}
                  onPress={onContinue}
                  style={{ marginBottom: RFValue(15), marginTop: RFValue(4) }}
                />

                {/* <TouchableOpacity style={{ marginBottom: 10 }}>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    By continuing, you agree to HeartView's{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Terms Privacy Policy
                    </Text>{' '}
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditHealthProfile;

const styles = StyleSheet.create({
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
    marginHorizontal: 10,
  },

  innerContainer: {
    borderRadius: RFValue(35),
    paddingTop: RFValue(16),
    paddingHorizontal: RFValue(20),
  },
  profileText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
    marginBottom: RFValue(12),
  },
  headerBack: {
    flexDirection: 'row',
    marginBottom: RFValue(12),
    alignItems: 'center',
    gap: RFValue(4),
  },
  leftIcon: {
    height: RFValue(10),
    width: RFValue(10),
    resizeMode: 'contain',
  },
  back: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
  signup: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    marginBottom: RFValue(8),
    textAlign: 'center',
  },
});
