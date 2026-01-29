import { ColorScheme } from '@/hooks/useTheme'
import useTheme from '@/hooks/useTheme'
import React from 'react'
import { ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Study = () => {
  const {toggleDarkMode, colors} = useTheme()
  const styles = createStyles(colors);
  return (
   <SafeAreaView style={styles.backgroundStyles}>
    <StatusBar 
    
    backgroundColor="yellow"
    />
    <ScrollView 
    contentInsetAdjustmentBehavior='automatic'
    style={styles.backgroundStyles}>
        <View style={{padding:24}}>
            <Text >Step One</Text>
            <TextInput  />
             
        </View>
        
    </ScrollView>
   </SafeAreaView>
  )

}
const createStyles = (colors:ColorScheme)=>{
const styles= {
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    backgroundStyles:{
        backgroundColor: "blue"
    },
    title:{
        fontSize:24,
        fontWeight: '600'
    }
   
}
 return styles
}



export default Study;
