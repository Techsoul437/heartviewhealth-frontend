import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../theme/ThemeContext';

const Setting = () => {
  const { theme, toggleTheme } = useTheme();
  return (
   <View style={[styles.container, { backgroundColor: theme.background }]}>
         <Text style={{ color: theme.text, fontSize: 18 }}>
           {theme.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
         </Text>
   
         <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 20 }}>
           <Text style={{ color: theme.text }}>Toggle Theme</Text>
         </TouchableOpacity>
       </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})