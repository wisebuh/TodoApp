import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars';

export const createStudyStyles = (colors:ColorScheme)=>{
    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        safeArea:{
            flex: 1,
        },
        header:{
            paddingHorizontal:24,
            paddingVertical: 32,
            paddingBottom: 24,
        },
        titleContainer:{
            flexDirection: "row",
            alignItems:"center"
        },
        iconContainer:{
            width: 56,
            height: 56,
            borderRadius: 16,
            justifyContent: "center",
            alignItems:"center",
            marginRight:16,

        },
        title:{
            fontSize:32,
            fontWeight:"700",
            letterSpacing: -1,
            color: colors.text
        }

    });
    return styles
}