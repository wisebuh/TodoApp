import { createHomeStyles } from "@/assets/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import useTheme from "@/hooks/useTheme";

const EmptyState =()=>{
    const {colors} = useTheme();
    const homeStyles = createHomeStyles(colors);

    return(
        <View style={homeStyles.emptyListContainer}>
            <LinearGradient colors={colors.gradients.empty}
            style={homeStyles.emptyIconConatiner}>
                <Ionicons name="clipboard-outline"
                size={60} color={colors.textMuted} />
            </LinearGradient>
            <Text style={homeStyles.emptyText}>No todos yet</Text>
            <Text style={homeStyles.emptySubtext}>Add your first  todo above to get started!</Text>
        </View>
    )
}

export default EmptyState;