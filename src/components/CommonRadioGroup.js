import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../theme/ThemeContext';
import { FONTS } from '../constants/Fonts';
import { COLORS } from '../constants/Colour';

const CommonRadioGroup = ({
  label,
  options = [], // [{ label: 'Male', value: 'male' }]
  value,
  onChange,
  containerStyle,
  error
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>
          {label}
        </Text>
      )}

      <View style={styles.optionsWrapper}>
        {options.map(item => {
          const selected = value === item.value;

          return (
            <TouchableOpacity
              key={item.value}
              activeOpacity={0.8}
              onPress={() => onChange(item.value)}
              style={styles.option}
            >
              <View
                style={[
                  styles.outerCircle,
                  {
                    borderColor: selected
                      ? COLORS.cyanGreen
                      : theme.inputBorder,
                  },
                ]}
              >
                {selected && <View style={styles.innerCircle} />}
              </View>

              <Text
                style={[
                  styles.optionLabel,
                  {
                    color: theme.text,
                  },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {error ? (
        <Text style={[styles.errorText, { color: COLORS.softRed }]}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default CommonRadioGroup;

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(12),
  },
  label: {
    marginBottom: RFValue(10),
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  optionsWrapper: {
    flexDirection: 'row',
    gap: RFValue(20),
    flexWrap: 'wrap',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerCircle: {
    width: RFValue(18),
    height: RFValue(18),
    borderRadius: RFValue(9),
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(8),
  },
  innerCircle: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(5),
    backgroundColor: COLORS.cyanGreen,
  },
  optionLabel: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  errorText: {
    marginTop: RFValue(4),
    fontSize: RFValue(10),
    fontFamily: FONTS.REGULAR,
  },
});
