import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { FONTS } from '../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../theme/ThemeContext';

const CommonOtpInput = ({ label = 'Enter OTP', digits = 6, onChange }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.otpWrapper}>
      <Text style={[styles.otpLabel, { color: theme.text }]}>{label}</Text>

      <OtpInput
        numberOfDigits={digits}
        autoFocus
        onTextChange={onChange}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: [
            styles.pinCodeContainer,
            { borderColor: theme.inputBorder },
          ],
          pinCodeTextStyle: [styles.pinCodeText,{color:theme.text}],
          focusedPinCodeContainerStyle: [
            styles.focusedPin,
            { borderColor: '#15615D' },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpLabel: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
    marginBottom: 12,
  },
  otpContainer: {
    justifyContent: 'space-between',
  },
  pinCodeContainer: {
    width: 46,
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pinCodeText: {
    fontSize: RFValue(18),
    fontFamily:FONTS.MEDIUM
  },
});

export default CommonOtpInput;
