import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'react-native'


const settingsScreen = () => {
  return (
    <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
      <Text style={styles.context}>Big Shot fish </Text>
      <Link href="/(tabs)/study">Loans page2</Link>
      <Image src=''></Image>
      
      
    </View>
  )
}

const styles = {
    context:{
        color:"blue"
    }
}

export default settingsScreen