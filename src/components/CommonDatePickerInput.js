import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useTheme } from '../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants/Fonts';
import { COLORS } from '../constants/Colour';
import ImagesPath from '../constants/ImagesPath';

const CommonDatePickerInput = ({
  label = 'Date of Birth',
  value,
  onChange,
  placeholder = 'Select Date',
  error,
  containerStyle,
}) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const isError = !!error;

  const formatDate = date => {
    if (!date) return '';
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpen(true)}
        style={[
          styles.input,
          {
            borderColor: theme.inputBorder,
          },
        ]}
      >
        <Image
          source={ImagesPath.calendar}
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
          {value ? formatDate(value) : placeholder}
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
        mode="date"
        // maximumDate={new Date()} 
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default CommonDatePickerInput;

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
    // justifyContent: 'center',
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
