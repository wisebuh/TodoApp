import { View, Text } from 'react-native';
import { createSettingsStyles } from '@/assets/settings.styles';
import useTheme from '@/hooks/useTheme';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressStats() {
    const {colors} = useTheme();
    const settingStyle = createSettingsStyles(colors);
    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos? todos.length: 0;
    const completedTodos = todos? todos.filter((todo)=> todo.isCompleted).length :0;
    const activeTodos = totalTodos - completedTodos;
  return (
    <LinearGradient
    colors={colors.gradients.surface} style={settingStyle.section}>
        <Text style={settingStyle.sectionTitle}>Progress Stats</Text>

        {/* Total Todos */}
        <View style={settingStyle.statsContainer}>
            <LinearGradient 
        colors={colors.gradients.background}
        style={[settingStyle.statCard, {borderLeftColor: colors.primary}]}>
            <View style={settingStyle.statIconContainer}>
              <LinearGradient
              colors={colors.gradients.primary}
              style={settingStyle.statIcon}>
                 <Ionicons name='list' size={20} color="#fff"/>
                </LinearGradient>  
            </View>
            <View>
                <Text style={settingStyle.statNumber}>{totalTodos}</Text>
                <Text style={settingStyle.statLabel}>Total Todos</Text>
            </View>
           
        </LinearGradient>
        </View>

        <View style={settingStyle.statContainer}>
            {/* Completed */}
            <LinearGradient
            colors={colors.gradients.background}
            style={[settingStyle.statCard, {borderLeftColor: colors.success}]}>
                <View style={settingStyle.statIconContainer}>
                    <LinearGradient colors={colors.gradients.success}
                    style={settingStyle.statIcon}>
                        <Ionicons name="checkmark-circle" size={20} color="#fff"/>
                    </LinearGradient>
                </View>
                <View>
                    <Text style={settingStyle.statNumber}>{completedTodos}</Text>
                    <Text style={settingStyle.statLabel}>Completed</Text>
                </View>
            </LinearGradient>
        </View>

        <View style={settingStyle.statContainer}>
            {/* Active */}
            <LinearGradient colors={colors.gradients.background}
            style={[settingStyle.statCard, {borderLeftColor: colors.warning}]}>
                <View style={settingStyle.statIconContainer}>
                    <LinearGradient colors={colors.gradients.warning}
                    style={settingStyle.statIcon}>
                        <Ionicons name="time" size={20} color="#fff" />
                    </LinearGradient>
                </View>
                <View>
                    <Text style={settingStyle.statNumber}>{activeTodos}</Text>
                    <Text style={settingStyle.statLabel}>Active</Text>
                </View>
            </LinearGradient>
        </View>
        
            
    </LinearGradient>
  )
}