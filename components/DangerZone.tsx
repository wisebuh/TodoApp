import { View, Text, Alert, TouchableOpacity } from 'react-native'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/settings.styles';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function DangerZone() {
    const {colors} = useTheme();
    const settingStyle = createSettingsStyles(colors);
    const clearAllTodos = useMutation(api.todos.clearAllTodos);

    const handleResetApp =  async ()=>{
        Alert.alert("Reset App",
            "⚠️ This will delete your todos permanently. This action cannot be undone.",
            [
                {text:"Cancel", style:"cancel"},
                {
                    text:"Detele All",
                    style:"destructive",
                    onPress: async ()=>{
                        try{
                            const result = await clearAllTodos();
                            Alert.alert("App Reset",
                                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1? ""
                                :"S"}, Your app has been reset.`
                            );
                        }catch(error){
                            console.log("Error deleting all todos", error)
                            Alert.alert("Error", "Failed to reset app")
                        }
                    }
                }
            ]
        )
    };
  return (
    <LinearGradient colors={colors.gradients.surface} style={settingStyle.section}>
    <Text style={settingStyle.sectionTitleDanger}>Danger Zone</Text>

    <TouchableOpacity
    style={[settingStyle.actionButton, {borderBottomWidth:0}]}
    onPress={handleResetApp}
    activeOpacity={0.7}>
        <View style={settingStyle.actionLeft}>
            <LinearGradient
            colors={colors.gradients.danger}
            style={settingStyle.actionIcon}>
                <Ionicons name="trash" size={18} color="#FFF"/>
            </LinearGradient>
            <Text style={settingStyle.actionTextDanger}>Reset App</Text>

        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </TouchableOpacity>
    </LinearGradient>
  )
}