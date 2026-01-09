import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { COLORS } from '../../constants/Colour';
import { RFValue } from 'react-native-responsive-fontsize';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { FONTS } from '../../constants/Fonts';
import { useTheme } from '../../theme/ThemeContext';
import ImagesPath from '../../constants/ImagesPath';

const RiskCard = () => {
  useContext(LanguageContext);
  const { theme } = useTheme();
  return (
    <View style={styles.card}>
      <View style={styles.cardStatus}>
        <View>
             <Text style={styles.riskStatusNote}>{i18n.t('Heart_Risk_Status')}</Text>
             <Text style={styles.riskStatus}>{i18n.t('Low_Risk')}</Text>
        </View>
        <View style={styles.heartCard}>
            <Image source={ImagesPath.heart} style={styles.heartIcon}/>
        </View>
      </View>
      <Text style={styles.status_Decs}>{i18n.t('Risk_Status_Decs')}</Text>
    </View>
  );
};

export default RiskCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.brightGreen,
    borderRadius: RFValue(10),
    marginTop: RFValue(15),
    padding: RFValue(20),
    
  },
  riskStatusNote: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    color: COLORS.white,
  },
  cardStatus:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  riskStatus:{
    marginTop:RFValue(3),
    fontFamily:FONTS.BOLD,
    fontSize:RFValue(20),
    color:COLORS.white
  },
  heartCard:{
    height:RFValue(45),
    width:RFValue(45),
    backgroundColor:COLORS.softGreen,
    borderRadius:RFValue(30),
    alignItems:'center',
    justifyContent:'center'
  },
  heartIcon:{
    height:RFValue(20),
    width:RFValue(20),
    resizeMode:'contain',
    tintColor:COLORS.white
  },
  status_Decs:{
    marginTop:RFValue(15),
    fontFamily:FONTS.REGULAR,
    fontSize:RFValue(14),
    color:COLORS.white
  }
});
