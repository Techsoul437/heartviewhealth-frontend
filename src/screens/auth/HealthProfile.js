import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
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

const HealthProfile = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [sugar, setSugar] = useState('');
  const [history, setHistory] = useState('');
  const [smoking, setSmoking] = useState('');

  const [heightError, setHeightError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [bloodPressureError, setBloodPressureError] = useState('');
  const [sugarError, setSugarError] = useState('');
  const [historyError, setHistoryError] = useState('');
  const [smokingError, setSmokingError] = useState('');

  const onContinue = () => {
     navigation.navigate('FamilyDetails'); 
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

    navigation.navigate('FamilyDetails'); 
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
          contentContainerStyle={{ flexGrow: 1 }}
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
                  <Text style={[styles.back, { color: theme.text }]}>Back</Text>
                </TouchableOpacity>
                <Text style={[styles.profileText, { color: theme.text }]}>
                  Health Profile
                </Text>

                <CommonTextInput
                  label="Height (cm)"
                  placeholder="e.g., 175 cm"
                  value={height}
                  onChangeText={text => {
                    setHeight(text);
                    setHeightError('');
                  }}
                  error={heightError}
                />

                <CommonTextInput
                  label="Weight (kg)"
                  placeholder="e.g., 55 kg"
                  value={weight}
                  onChangeText={text => {
                    setWeight(text);
                    setWeightError('');
                  }}
                  error={weightError}
                />

                <CommonRadioGroup
                  label="Do you have blood pressure concerns?"
                  value={bloodPressure}
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  onChange={val => {
                    setBloodPressure(val);
                    setBloodPressureError('');
                  }}
                  error={bloodPressureError}
                />

                <CommonRadioGroup
                  label="Do you have blood sugar concerns?"
                  value={sugar}
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  onChange={val => {
                    setSugar(val);
                    setSugarError('');
                  }}
                  error={sugarError}
                />

                <CommonRadioGroup
                  label="Heart problem history?"
                  value={history}
                  options={[
                    { label: 'Self', value: 'self' },
                    { label: 'Family', value: 'family' },
                    { label: 'None', value: 'none' },
                  ]}
                  onChange={val => {
                    setHistory(val);
                    setHistoryError('');
                  }}
                  error={historyError}
                />

                <CommonRadioGroup
                  label="Smoking/Tobacco use?"
                  value={smoking}
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    { label: 'Past', value: 'past' },
                  ]}
                  onChange={val => {
                    setSmoking(val);
                    setSmokingError('');
                  }}
                  error={smokingError}
                />

                <GradientButton
                  title="Continue"
                  onPress={onContinue}
                  style={{ marginBottom: RFValue(12), marginTop: RFValue(4) }}
                />

                <TouchableOpacity style={{ marginBottom: 10 }}>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    By continuing, you agree to HeartView's{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Terms Privacy Policy
                    </Text>{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default HealthProfile;

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
