import { createSettingsStyles } from "@/assets/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressStats from "@/components/ProgressStats";
import Preferences from "@/components/Preferences";
import DangerZone from "@/components/DangerZone"

const settingsScreen = () => {
const {colors} = useTheme();
const settingStyle = createSettingsStyles(colors)
  return (
    <LinearGradient
    colors={colors.gradients.background}
    style={settingStyle.container}>
      <SafeAreaView style={settingStyle.safeArea}>
        {/* Header */}
        <View style={settingStyle.header}>
          <View style={settingStyle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary}
            style={settingStyle.iconContainer}>
              <Ionicons name="settings" size={28} color="#fff"/>
            </LinearGradient>
            <Text style={settingStyle.title}>Settings</Text>
          </View>
        </View>

        <ScrollView 
        style={settingStyle.scrollView}
        contentContainerStyle={settingStyle.content}
        showsVerticalScrollIndicator={false}
        >
          <ProgressStats />

          {/* PREFERENCE */}
          <Preferences />

          {/* DANGER ZONE */}

          <DangerZone />

        </ScrollView>




        {/* <ScrollViewComponent
        style={settingStyle.scrollView}
        contentContainerStyle={settingStyle.content}
        showsVerticalScrollIndicator={false}/> */}

        
      </SafeAreaView>
    </LinearGradient>
  )
}

// const styles = {
//     context:{
//         color:"blue"
//     }
// }

export default settingsScreen;