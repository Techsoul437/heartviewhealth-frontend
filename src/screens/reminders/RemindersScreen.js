import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonHeader from '../../components/CommonHeader';
import ImagesPath from '../../constants/ImagesPath';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';

const RemindersScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  useContext(LanguageContext);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <CommonHeader
        title={i18n.t('reminders')}
        subTitle={i18n.t('addRemindersDecs')}
        headerStyles={{ marginBottom: RFValue(15) }}
      />
      <View style={{justifyContent:'center',flex:1}}>
        <Image source={ImagesPath.reminder} style={styles.reminderImg} />
        <Text style={[styles.nothing,{color:theme.text}]}>{i18n.t('nothingHereYet')}</Text>
        <Text style={[styles.reminderNote,{color:theme.gray,marginTop:RFValue(10)}]}>{i18n.t('noRemindersAdded')}</Text>
        <Text style={[styles.reminderNote,{color:theme.gray}]}>{i18n.t('startAddingReminders')}</Text>
        <TouchableOpacity
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
          onPress={()=>navigation.navigate('AddMedication')}
        >
          <View
            style={[
              styles.innerContainer,
              {
                backgroundColor: theme.innerBackground,
                borderColor: theme.inputBorder,
                marginTop:RFValue(20)
              },
            ]}
          >
            <View style={styles.addReminderContiner}>
                <View style={[styles.reminderPill,{backgroundColor:COLORS.blue + '70'}]}>
                    <Image source={ImagesPath.pill} style={styles.reminderIcon}/>
                </View>
                <View>
                  <Text style={[styles.reminderHeader,{color:theme.text}]}>{i18n.t('medications')}</Text>
                  <Text style={[styles.reminderdecs,{color:theme.gray}]}>{i18n.t('medicationsDesc')}</Text>
                </View>
            </View>
            <Image source={ImagesPath.plus} style={[styles.plusIcon,{tintColor:theme.inputBorder}]}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
          onPress={()=>navigation.navigate('AddLabsAppointment')}
        >
          <View
            style={[
              styles.innerContainer,
              {
                backgroundColor: theme.innerBackground,
                borderColor: theme.inputBorder,
              },
            ]}
          >
            <View style={styles.addReminderContiner}>
                <View style={[styles.reminderPill,{backgroundColor:COLORS.yellow + '20'}]}>
                    <Image source={ImagesPath.lab} style={styles.labIcon}/>
                </View>
                <View>
                  <Text style={[styles.reminderHeader,{color:theme.text}]}>{i18n.t('labs')}</Text>
                  <Text style={[styles.reminderdecs,{color:theme.gray}]}>{i18n.t('labsDesc')}</Text>
                </View>
            </View>
            <Image source={ImagesPath.plus} style={[styles.plusIcon,{tintColor:theme.inputBorder}]}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
          onPress={()=>navigation.navigate('AddDoctorAppointment')}
        >
          <View
            style={[
              styles.innerContainer,
              {
                backgroundColor: theme.innerBackground,
                borderColor: theme.inputBorder,
              },
            ]}
          >
            <View style={styles.addReminderContiner}>
                <View style={[styles.reminderPill,{backgroundColor:COLORS.lightGreen.slice(0, 7) + '20'}]}>
                    <Image source={ImagesPath.stethoscope} style={styles.stethoscope}/>
                </View>
                <View>
                  <Text style={[styles.reminderHeader,{color:theme.text}]}>{i18n.t('doctorVisits')}</Text>
                  <Text style={[styles.reminderdecs,{color:theme.gray}]}>{i18n.t('doctorVisitsDesc')}</Text>
                </View>
            </View>
            <View >
                <Image source={ImagesPath.plus} style={[styles.plusIcon,{tintColor:theme.inputBorder}]}/>
            </View>
            
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RemindersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(12),
  },

  innerContainer: {
    borderRadius: RFValue(10),
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(12),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderImg:{
    height:RFValue(100),
    width:RFValue(200),
    resizeMode:'contain',
    alignSelf:'center'
  },
  
  nothing:{
    fontFamily:FONTS.BOLD,
    fontSize:RFValue(18),
    textAlign:'center',
    marginTop:RFValue(10)
  },
  reminderNote:{
    fontFamily:FONTS.REGULAR,
    fontSize:RFValue(12),
    textAlign:'center',
    
  },
  addReminderContiner:{
    flexDirection:'row',
    alignItems:'center',
    gap:RFValue(10),
  },
  reminderPill:{
    height:RFValue(40),
    width:RFValue(40),
    borderRadius:RFValue(10),
    justifyContent:'center',
    alignItems:'center'
  },
  reminderIcon:{
    height:RFValue(15),
    width:RFValue(15),
    resizeMode:'contain'
  },
  labIcon:{
    height:RFValue(20),
    width:RFValue(20),
    resizeMode:'contain'
  },
  stethoscope:{
    height:RFValue(20),
    width:RFValue(20),
    resizeMode:'contain'
  },
  reminderHeader:{
    fontFamily:FONTS.REGULAR,
    fontSize:RFValue(14)
  },
  reminderdecs:{
     fontFamily:FONTS.REGULAR,
    fontSize:RFValue(10),
    marginTop:RFValue(3)
  },
  plusIcon:{
    height:RFValue(15),
    width:RFValue(15),
    resizeMode:'contain'
  }
});
