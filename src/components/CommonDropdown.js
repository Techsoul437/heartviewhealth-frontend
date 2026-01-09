import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../theme/ThemeContext';
import { FONTS } from '../constants/Fonts';
import { COLORS } from '../constants/Colour';
import ImagesPath from '../constants/ImagesPath';

const CommonDropdown = ({
  label,
  items = [], // [{label:'Spouse', value:'spouse'}]
  value,
  setValue,
  placeholder = 'Select option',
  error,
  containerStyle,
}) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>
          {label}
        </Text>
      )}

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={placeholder}
        listMode='SCROLLVIEW'
        style={[
          styles.dropdown,
          {
            borderColor: theme.inputBorder,
            backgroundColor: 'transparent',
          },
        ]}
        dropDownContainerStyle={[
          styles.dropdownContainer,
          {
            backgroundColor: theme.background,
            borderColor: theme.inputBorder,
            // maxHeight: RFValue(120)
          },
        ]}
        textStyle={{
          color: theme.text,
          fontFamily: FONTS.MEDIUM,
          fontSize: RFValue(12),
        }}
        placeholderStyle={{
          color: theme.inputBorder,
          fontFamily: FONTS.MEDIUM,
        }}
        selectedItemLabelStyle={{
          color: theme.text,
          fontFamily: FONTS.MEDIUM,
        }}
        modalContentContainerStyle={{
          backgroundColor: theme.background,
        }}
        ArrowDownIconComponent={() => (
        //   <Text style={{ color: theme.text, fontSize: 14 }}>⌄</Text>
        <Image source={ImagesPath.downArrow} style={styles.arrow}/>
        )}
        ArrowUpIconComponent={() => (
        //   <Text style={{ color: theme.text, fontSize: 14 }}>⌃</Text>
        <Image source={ImagesPath.upArrow} style={styles.arrow}/>
        )}
      />

      {error && (
        <Text style={[styles.errorText, { color: COLORS.softRed }]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default CommonDropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(12),
    zIndex: 1000, // IMPORTANT for dropdown overlap
  },
  label: {
    marginBottom: RFValue(10),
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    minHeight: 48,
  },
  dropdownContainer: {
    borderWidth: 1,
  },
  errorText: {
    marginTop: RFValue(4),
    fontSize: RFValue(10),
    fontFamily: FONTS.REGULAR,
  },
  arrow:{
    height:RFValue(20),
    width:RFValue(20),
    resizeMode:'contain'
  }
});
