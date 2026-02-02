import { View, Text, Switch } from 'react-native'
import { useState } from 'react'
import  useTheme  from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Preferences() {

    const [isAutoSync, setIsAutoSunc] = useState(true);
    const [isNotificationEnabled, setisNotificationEnable] = useState(true);
    const {isDarkMode, toggleDarkMode, colors} = useTheme();
    const settingStyle = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.surface}
    style={settingStyle.section}>
        <Text style={settingStyle.sectionTitle}>Preferences</Text>
        {/* Dark Mode */}
        <View style={settingStyle.settingItem}>
            <View style={settingStyle.settingLeft}>
                <LinearGradient colors={colors.gradients.primary}
                style={settingStyle.settingIcon}>
                    <Ionicons name="moon" size={18} color="#fff"/>
                </LinearGradient>
                <Text style={settingStyle.settingText}>Dark Mode</Text>
            </View>
            <Switch 
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={"#fff"}
            trackColor={{false: colors.border, true:colors.primary}}
            ios_backgroundColor={"red"}/>
        </View>

        {/* Notifications */}
        <View style={settingStyle.settingItem}>
            <View style={settingStyle.settingLeft}>
                <LinearGradient colors={colors.gradients.warning}
                style={settingStyle.settingIcon}>
                    <Ionicons name="notifications" size={18} color="#fff"/>
                </LinearGradient>
                <Text style={settingStyle.settingText}>Notifications</Text>
            </View>
            <Switch 
            value={isNotificationEnabled}
            onValueChange={()=>setisNotificationEnable(!isNotificationEnabled)}
            thumbColor={"#fff"}
            trackColor={{false: colors.border, true:colors.warning}}
            ios_backgroundColor={colors.border}/>
        </View>

        {/* Auto Sync */}
        <View style={settingStyle.settingItem}>
            <View style={settingStyle.settingLeft}>
                <LinearGradient colors={colors.gradients.success}
                style={settingStyle.settingIcon}>
                    <Ionicons name="sync" size={18} color="#fff"/>
                </LinearGradient>
                <Text style={settingStyle.settingText}>Auto Sync</Text>
            </View>
            <Switch 
            value={isAutoSync}
            onValueChange={()=>setIsAutoSunc(!isAutoSync)}
            thumbColor={"#fff"}
            trackColor={{false: colors.border, true:colors.success}}
            ios_backgroundColor={"red"}/>
        </View>
    </LinearGradient>
  )
}