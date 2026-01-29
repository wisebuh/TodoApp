import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

import React from 'react'

export const createHomeStyles = (colors:ColorScheme)=> {
  const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    safeArea:{
        flex:1,
    },
    loadingContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText:{
        marginTop:20,
        fontSize: 18,
        fontWeight: "500",
        color: colors.text
    },
    header:{

    },
    titleTextCointainer:{

    },
    title:{
        fontSize: 32,
        fontWeight: "700",
        letterSpacing:-1,
        marginBottom:4,
        color:colors.text,
    },
    subtitle:{
        fontSize: 17,
        fontWeight:"500",
        color: colors.textMuted,
    },
    addButton:{
        alignItems:"center"
    },
    progressContainer:{
        marginTop: 8,
    },
    progressBarContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:16,
    },
    addButtonDIsabled:{
        opacity:0.5,
    },
    todoList:{
        flex: 1,
    },
    todoListContent:{
        paddingHorizontal: 24,
        paddingBottom: 100,
    },
    emptyListContainer:{
        flexGrow:1,
        justifyContent:"center",
    },
    todoItemWrapper:{
        marginVertical:12,
    },
    todoItem:{
        color: colors.primary
    },
    todoItems:{
        flexDirection:"row",
        alignItems:"center",
        padding: 20,
        borderRadius:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height: 4,
        },
        shadowOpacity:0.1,
        shadowRadius:8,
        elevation:8
    },
    checkbox:{
        marginRight: 16,
        marginTop: 2
    },
    checkboxInner:{
        width: 32
    },
    emptyText:{
        fontSize:24,
        fontWeight:"700",
        marginBottom:8,
        color:colors.text
    },
    emptySubtext:{
        fontSize:17,
        textAlign: "center",
        paddingHorizontal:40,
        lineHeight:24,
        color:colors.textMuted,
    }
  })
  return styles
}