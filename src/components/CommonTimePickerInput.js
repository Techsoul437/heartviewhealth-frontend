import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useTheme } from '../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants/Fonts';
import { COLORS } from '../constants/Colour';
import ImagesPath from '../constants/ImagesPath';

const CommonTimePickerInput = ({
  label = 'Time',
  value,
  onChange,
  placeholder = 'Select Time',
  error,
  containerStyle,
}) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const isError = !!error;

  const formatTime = date => {
    if (!date) return '';

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>
          {label}
        </Text>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpen(true)}
        style={[
          styles.input,
          {
            borderColor: isError ? COLORS.softRed : theme.inputBorder,
          },
        ]}
      >
        <Image
          source={ImagesPath.clock}
          style={[
            styles.icon,
            {
              tintColor: value ? theme.text : theme.inputBorder,
            },
          ]}
        />

        <Text
          style={{
            color: value ? theme.text : theme.inputBorder,
            fontFamily: FONTS.MEDIUM,
          }}
        >
          {value ? formatTime(value) : placeholder}
        </Text>
      </TouchableOpacity>

      {isError && (
        <Text style={[styles.errorText, { color: COLORS.softRed }]}>
          {error}
        </Text>
      )}

      <DatePicker
        modal
        open={open}
        date={value || new Date()}
        mode="time"
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default CommonTimePickerInput;

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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  errorText: {
    marginTop: RFValue(4),
    fontSize: RFValue(10),
    fontFamily: FONTS.REGULAR,
  },
  icon: {
    height: RFValue(20),
    width: RFValue(20),
  },
});
