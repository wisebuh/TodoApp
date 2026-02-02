import { ColorScheme } from '@/hooks/useTheme'
import useTheme from '@/hooks/useTheme'
import { createStudyStyles } from '@/assets/study.styles'
import { LinearGradient } from 'expo-linear-gradient';
import LoadingSpinner from '@/components/LoadingSPinner';
import { ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';


const Event = () => {
  const {toggleDarkMode, colors} = useTheme()
  const eventStyle = createStudyStyles(colors);
  const today = new Date().toISOString().split('T')[0];
  const [selected, setSelected] = useState('');
  return (
   <LinearGradient
    colors={colors.gradients.background}
    style={eventStyle.container}>
      <SafeAreaView style={eventStyle.safeArea}>
        {/* Header */}
        <View style={eventStyle.header}>
          <View style={eventStyle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary}
            style={eventStyle.iconContainer}>
              <Ionicons name="time" size={28} color="#fff"/>
            </LinearGradient>
            <Text style={eventStyle.title}>Event Planner</Text>
          </View>
        </View>

        <View>
           <Calendar
  current={today}
  onDayPress={day => {
    console.log('selected day', day);

  }}
  markedDates={{
[selected]: {
selected: true,
disableTouchEvent: true,
selectedColor:"orange",
selectedTextColor:"blue",

}
}}
/>


        </View>
   </SafeAreaView>
  
  </LinearGradient>
)
}
// const createStyles = (colors:ColorScheme)=>{
// const styles= {
//     container:{
//         flex: 1,
//         alignItems:"center",
//         justifyContent: "center"
//     },
//     backgroundStyles:{
//         backgroundColor: "blue"
//     },
//     title:{
//         fontSize:24,
//         fontWeight: '600'
//     }
   
// }
//  return styles
// }



export default Event;
