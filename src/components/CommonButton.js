import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS} from '../constants/Colour'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS } from '../constants/Fonts'

const CommonButton = ({label,btnStyles}) => {
  return (
    <View style={[styles.button,{...btnStyles}]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:COLORS.lightGreen,
        paddingVertical:RFValue(10),
        paddingHorizontal:RFValue(20),
        borderRadius:RFValue(10),
        alignItems:'center',
        justifyContent:'center'
    },
    label:{
        fontFamily:FONTS.MEDIUM,
        fontSize:RFValue(12),
        color:COLORS.white,
        textAlign:'center'
    }
})