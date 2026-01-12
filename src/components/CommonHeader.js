import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { FONTS } from '../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../theme/ThemeContext';
import ImagesPath from '../constants/ImagesPath';
import { LanguageContext } from '../constants/LanguageContext';
import i18n from '../assets/i18n';

const CommonHeader = ({title,subTitle}) => {
  const { theme } = useTheme();
  useContext(LanguageContext);
  
  return (
    <View style={styles.headerContainer}>
      
      <View>
        <Text style={[styles.welcome, { color: theme.text }]}>
            {title}
        </Text>
        <Text style={[styles.headerDesc, { color: theme.text }]}>
           {subTitle}
        </Text>
      </View>

      
    
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  welcome: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
  },
  headerDesc: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
});
