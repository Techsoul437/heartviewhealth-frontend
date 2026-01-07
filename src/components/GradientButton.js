import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS } from '../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../constants/Colour';

const GradientButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.darkBlue, COLORS.darkGreen]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} 
        style={[styles.button, style]}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  button: {
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
   color:COLORS.white
   
  },
});
