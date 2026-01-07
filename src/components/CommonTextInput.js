// // components/CommonTextInput.js
// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import { useTheme } from '../theme/ThemeContext';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { FONTS } from '../constants/Fonts';

// const CommonTextInput = ({
//   label,
//   value,
//   onChangeText,
//   placeholder,
//   containerStyle,
//   inputStyle,
//   labelStyle,
//   ...props
// }) => {
//     const { theme } = useTheme();
//   return (
//     <View style={[styles.container, containerStyle]}>
//       {label ? <Text style={[styles.label, labelStyle,{color:theme.text}]}>{label}</Text> : null}

//       <TextInput
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor={theme.inputBorder}
//         style={[styles.input, inputStyle,{borderColor: theme.inputBorder,color:theme.text}]}
//         {...props}
//       />
//     </View>
//   );
// };

// export default CommonTextInput;

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 16,
//   },
//   label: {
//     marginBottom: 6,
//     fontSize: RFValue(12),
//     fontFamily:FONTS.MEDIUM
    
//   },
//   input: {
//     borderWidth: 1,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants/Fonts';

const CommonTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  containerStyle,
  inputStyle,
  labelStyle,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            labelStyle,
            { color: theme.text },
          ]}
        >
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
            borderColor: isFocused ? '#15615D' : theme.inputBorder,
            color: theme.text,
          },
        ]}
        {...props}
      />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
});
