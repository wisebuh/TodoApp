import { createHomeStyles } from "@/assets/home.styles";
import { useState } from "react";
import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const {toggleDarkMode, colors} = useTheme()
  const homeStyles = createHomeStyles(colors);
  const [text, setText] = useState('');
  return (
    <SafeAreaView
    style={homeStyles.safeArea} >
      <Text>Hi</Text>
      <Text>Today is Good</Text>
      <TextInput 
      onChangeText={setText}
      value={text}
      placeholder="Enter your nam" />
      
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>     
    </SafeAreaView>
  );
}


// const createStyles = (colors:ColorScheme)=>{
//   const styles = {
//     container:{ flex: 1,
//        alignItems:"center", 
//        justifyContent: "center",
//        backgroundColor: colors.bg,
//       },
       

//       Content:{
//         fontSize:20,
//         fontFamily:"Arial",
//         color:"red",
//         BackgroundColor: colors.bg
//       },
//       btn:{
//         color:"#888",
//         padding:10,
//         fontSize: 10
//       }
      
// }
// return styles
// }

