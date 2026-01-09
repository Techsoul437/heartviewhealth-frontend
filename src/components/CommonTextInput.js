import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants/Fonts';
import { COLORS } from '../constants/Colour';

const CommonTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  containerStyle,
  inputStyle,
  labelStyle,
  error,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle, { color: theme.text }]}>
          {label}
        </Text>
      )}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.inputBorder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          inputStyle,
          {
            borderColor: isFocused ? COLORS.cyanGreen : theme.inputBorder,
            color: theme.text,
          },
        ]}
        {...props}
      />
      {error ? <Text style={[styles.errorText,{color: COLORS.softRed,}]}>{error}</Text> : null}
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(12),
  },
  label: {
    marginBottom: RFValue(10),
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  errorText: {
    marginTop: RFValue(4),
    fontSize: RFValue(10),
    fontFamily: FONTS.REGULAR,
  },
});
