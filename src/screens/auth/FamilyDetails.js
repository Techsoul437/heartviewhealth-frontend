// import {
//   KeyboardAvoidingView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useTheme } from '../../theme/ThemeContext';
// import { useNavigation } from '@react-navigation/native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { FONTS } from '../../constants/Fonts';
// import { COLORS } from '../../constants/Colour';

// import CommonTextInput from '../../components/CommonTextInput';
// import CommonDropdown from '../../components/CommonDropdown';
// import GradientButton from '../../components/GradientButton';
// import ImagesPath from '../../constants/ImagesPath';

// const FamilyDetails = () => {
//   const { theme } = useTheme();
//   const navigation = useNavigation();
//   const MAX_MEMBERS = 3;

//   const [members, setMembers] = useState([
//     {
//       id: Date.now(),
//       name: '',
//       phone: '',
//       relation: null,
//     },
//   ]);

//   const addMember = () => {
//     if (members.length >= MAX_MEMBERS) return;

//     setMembers(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         phone: '',
//         relation: null,
//       },
//     ]);
//   };

//   const removeMember = id => {
//     setMembers(prev => prev.filter(item => item.id !== id));
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           keyboardShouldPersistTaps="handled"
//           contentContainerStyle={{ flexGrow: 1 }}
//         >
//           <View style={{ flex: 1 }}>
//             <View
//               style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
//             >
//               <View
//                 style={[
//                   styles.innerContainer,
//                   { backgroundColor: theme.innerBackground },
//                 ]}
//               >
//                 <TouchableOpacity
//                   style={styles.headerBack}
//                   onPress={() => navigation.goBack()}
//                 >
//                   <Image
//                     source={ImagesPath.leftArrow}
//                     style={styles.leftIcon}
//                   />
//                   <Text style={[styles.back, { color: theme.text }]}>Back</Text>
//                 </TouchableOpacity>

//                 <Text style={[styles.title, { color: theme.text }]}>
//                   Family Details
//                 </Text>

//                 {members.map((item, index) => (
//                   <View key={item.id} style={styles.memberBlock}>
//                     {index !== 0 && (
//                       <View style={styles.memberHeader}>
//                         <Text
//                           style={[styles.memberTitle, { color: theme.text }]}
//                         >
//                           Member {index + 1}
//                         </Text>

//                         <TouchableOpacity onPress={() => removeMember(item.id)}>
//                           <Text style={{ color: COLORS.softRed }}>✕</Text>
//                         </TouchableOpacity>
//                       </View>
//                     )}

//                     <CommonTextInput
//                       label="Name"
//                       placeholder="Enter full name"
//                       value={item.name}
//                       onChangeText={text => {
//                         const updated = [...members];
//                         updated[index].name = text;
//                         setMembers(updated);
//                       }}
//                     />

//                     <CommonTextInput
//                       label="Phone Number"
//                       placeholder="Enter phone number"
//                       keyboardType="phone-pad"
//                       value={item.phone}
//                       onChangeText={text => {
//                         const updated = [...members];
//                         updated[index].phone = text;
//                         setMembers(updated);
//                       }}
//                     />

//                     <CommonDropdown
//                       label="Relation"
//                       value={item.relation}
//                       setValue={val => {
//                         const updated = [...members];
//                         updated[index].relation = val;
//                         setMembers(updated);
//                       }}
//                       items={[
//                         { label: 'Spouse', value: 'spouse' },
//                         { label: 'Parent', value: 'parent' },
//                         { label: 'Child', value: 'child' },
//                         { label: 'Sibling', value: 'sibling' },
//                         { label: 'Grandparent', value: 'grandparent' },
//                         { label: 'Friend', value: 'friend' },
//                         { label: 'Caregiver', value: 'caregiver' },
//                       ]}
//                       placeholder="Select relation"
//                     />
//                   </View>
//                 ))}

//                 {members.length < MAX_MEMBERS && (
//                   <TouchableOpacity
//                     onPress={addMember}
//                     style={styles.addMemberBtn}
//                   >
//                     <Text style={{ color: COLORS.cyanGreen }}>
//                       + Add Family Member
//                     </Text>
//                   </TouchableOpacity>
//                 )}

//                 <GradientButton
//                   title="Continue"
//                   onPress={() => {
//                     console.log('Family Members:', members);
//                     navigation.goBack(); // change screen if needed
//                   }}
//                   style={{ marginBottom: RFValue(12) }}
//                 />
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };

// export default FamilyDetails;

// const styles = StyleSheet.create({
//   shadowWrapper: {
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 5,
//     elevation: 3,
//     marginTop: RFValue(20),
//     marginHorizontal: 10,
//   },

//   innerContainer: {
//     borderRadius: RFValue(35),
//     paddingTop: RFValue(16),
//     paddingHorizontal: RFValue(20),
//   },

//   title: {
//     fontFamily: FONTS.BOLD,
//     fontSize: RFValue(20),
//     marginBottom: RFValue(12),
//   },

//   memberBlock: {
//     marginBottom: RFValue(16),
//   },

//   memberHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: RFValue(8),
//   },

//   memberTitle: {
//     fontFamily: FONTS.MEDIUM,
//     fontSize: RFValue(14),
//   },

//   addMemberBtn: {
//     borderWidth: 1,
//     borderStyle: 'dashed',
//     borderColor: COLORS.cyanGreen,
//     borderRadius: 10,
//     paddingVertical: RFValue(12),
//     alignItems: 'center',
//     marginBottom: RFValue(20),
//   },
//   headerBack: {
//     flexDirection: 'row',
//     marginBottom: RFValue(12),
//     alignItems: 'center',
//     gap: RFValue(4),
//   },
//   leftIcon: {
//     height: RFValue(10),
//     width: RFValue(10),
//     resizeMode: 'contain',
//   },
//   back: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: RFValue(12),
//   },
// });

import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';

import CommonTextInput from '../../components/CommonTextInput';
import CommonDropdown from '../../components/CommonDropdown';
import GradientButton from '../../components/GradientButton';
import ImagesPath from '../../constants/ImagesPath';

const FamilyDetails = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const MAX_MEMBERS = 3;

  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: '',
      phone: '',
      relation: '', // empty string so selected value shows
    },
  ]);

  const [errors, setErrors] = useState({});

  // Add new member
  const addMember = () => {
    if (members.length >= MAX_MEMBERS) return;

    setMembers(prev => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        phone: '',
        relation: '',
      },
    ]);
  };

  // Remove member
  const removeMember = id => {
    setMembers(prev => prev.filter(item => item.id !== id));
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  // Validate members
  const validateMembers = () => {
    let valid = true;
    const newErrors = {};

    members.forEach(member => {
      const memberErrors = {};

      if (!member.name.trim()) {
        memberErrors.name = 'Name is required';
        valid = false;
      }

      if (!member.phone.trim()) {
        memberErrors.phone = 'Phone number is required';
        valid = false;
      } else if (!/^\d{10}$/.test(member.phone)) {
        memberErrors.phone = 'Enter valid 10-digit phone number';
        valid = false;
      }

      if (!member.relation) {
        memberErrors.relation = 'Please select relation';
        valid = false;
      }

      if (Object.keys(memberErrors).length > 0) {
        newErrors[member.id] = memberErrors;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
            >
              <View
                style={[
                  styles.innerContainer,
                  { backgroundColor: theme.innerBackground },
                ]}
              >
                {/* Back button */}
                <TouchableOpacity
                  style={styles.headerBack}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={ImagesPath.leftArrow}
                    style={styles.leftIcon}
                  />
                  <Text style={[styles.back, { color: theme.text }]}>Back</Text>
                </TouchableOpacity>

                <Text style={[styles.title, { color: theme.text }]}>
                  Family Details
                </Text>

                {/* Members List */}
                {members.map((item, index) => (
                  <View key={item.id} style={styles.memberBlock}>
                    {index !== 0 && (
                      <View style={styles.memberHeader}>
                        <Text
                          style={[styles.memberTitle, { color: theme.text }]}
                        >
                          Member {index + 1}
                        </Text>

                        <TouchableOpacity onPress={() => removeMember(item.id)}>
                          <Text
                            style={{
                              color: COLORS.softRed,
                              fontSize: RFValue(16),
                            }}
                          >
                            ✕
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}

                    <CommonTextInput
                      label="Name"
                      placeholder="Enter full name"
                      value={item.name}
                      onChangeText={text => {
                        const updated = [...members];
                        updated[index].name = text;
                        setMembers(updated);
                        setErrors(prev => ({
                          ...prev,
                          [item.id]: { ...prev[item.id], name: '' },
                        }));
                      }}
                      error={errors[item.id]?.name}
                    />

                    <CommonTextInput
                      label="Phone Number"
                      placeholder="Enter phone number"
                      keyboardType="phone-pad"
                      value={item.phone}
                      onChangeText={text => {
                        const updated = [...members];
                        updated[index].phone = text;
                        setMembers(updated);
                        setErrors(prev => ({
                          ...prev,
                          [item.id]: { ...prev[item.id], phone: '' },
                        }));
                      }}
                      error={errors[item.id]?.phone}
                    />

                    <CommonDropdown
                      label="Relation"
                      value={item.relation}
                      setValue={callback => {
                        // callback can be function or object
                        const val =
                          typeof callback === 'function'
                            ? callback(item.relation)
                            : callback.value;
                        const updated = [...members];
                        updated[index].relation = val;
                        setMembers(updated);

                        setErrors(prev => ({
                          ...prev,
                          [item.id]: { ...prev[item.id], relation: '' },
                        }));
                      }}
                      items={[
                        { label: 'Spouse', value: 'spouse' },
                        { label: 'Parent', value: 'parent' },
                        { label: 'Child', value: 'child' },
                        { label: 'Sibling', value: 'sibling' },
                        { label: 'Grandparent', value: 'grandparent' },
                        { label: 'Friend', value: 'friend' },
                        { label: 'Caregiver', value: 'caregiver' },
                      ]}
                      placeholder="Select relation"
                      error={errors[item.id]?.relation}
                    />
                  </View>
                ))}

                {/* Add member button */}
                {members.length < MAX_MEMBERS && (
                  <TouchableOpacity
                    onPress={addMember}
                    style={styles.addMemberBtn}
                  >
                    <Text style={{ color: COLORS.cyanGreen }}>
                      + Add Family Member
                    </Text>
                  </TouchableOpacity>
                )}

                {/* Continue button */}
                <GradientButton
                  title="Continue"
                  onPress={() => {
                    if (validateMembers()) {
                      console.log('Family Members:', members);
                      navigation.replace('Main'); 
                    }
                  }}
                  style={{ marginBottom: RFValue(12) }}
                />

                <TouchableOpacity style={{ marginBottom: 10 }}>
                                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                                    By continuing, you agree to HeartView's{' '}
                                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                                      Terms Privacy Policy
                                    </Text>{' '}
                                  </Text>
                                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default FamilyDetails;

const styles = StyleSheet.create({
  shadowWrapper: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
    marginHorizontal: 10,
  },

  innerContainer: {
    borderRadius: RFValue(35),
    paddingTop: RFValue(16),
    paddingHorizontal: RFValue(20),
  },

  title: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
    marginBottom: RFValue(12),
  },

  memberBlock: {
    marginBottom: RFValue(16),
  },

  memberHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(8),
  },

  memberTitle: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
  },

  addMemberBtn: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.cyanGreen,
    borderRadius: 10,
    paddingVertical: RFValue(12),
    alignItems: 'center',
    marginBottom: RFValue(20),
  },

  headerBack: {
    flexDirection: 'row',
    marginBottom: RFValue(12),
    alignItems: 'center',
    gap: RFValue(4),
  },

  leftIcon: {
    height: RFValue(10),
    width: RFValue(10),
    resizeMode: 'contain',
  },

  back: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },

  signup: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    marginBottom: RFValue(8),
    textAlign: 'center',
  },
});
