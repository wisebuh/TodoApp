import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createHomeStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    actionButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 8,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: "500",
      color: colors.text,
    },
    header: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    titleTextCointainer: {
      flex: 1,
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      letterSpacing: -1,
      marginBottom: 4,
      color: colors.text,
    },
    subtitle: {
      fontSize: 17,
      fontWeight: "500",
      color: colors.textMuted,
    },
    progressContainer: {
      marginTop: 8,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.surface,
    },
    progressBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    progressBar: {
      flex: 1,
      height: 8,
      backgroundColor: colors.border,
      borderRadius: 4,
      overflow: "hidden",
    },
    progressFill: {
      height: "100%",
      borderRadius: 4,
    },
    progressText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
      minWidth: 40,
    },
    addButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: "center",
      alignItems: "center",
    },
    addButtonDIsabled: {
      opacity: 0.5,
    },
    input: {
      flex: 1,
      fontSize: 17,
      fontWeight: "300",
      backgroundColor: colors.backgrounds.input,
      borderColor: colors.border,
      color: colors.text,
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 16,
      borderWidth: 1,
    },
    inputFocused: {
      borderColor: colors.primary,
      borderWidth: 2,
    },
    inputSection: {
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    todoList: {
      flex: 1,
    },
    todoListContent: {
      paddingHorizontal: 24,
      paddingBottom: 100,
    },
    emptyListContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    todoItemWrapper: {
      marginVertical: 6,
    },
    todoItem: {
      color: colors.primary,
    },
    todoText: {
      fontSize: 17,
      fontWeight: "500",
      color: colors.text,
      flex: 1,
      lineHeight: 24,
    },
    todoActions: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    todoItems: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    todoTextContainer: {
      flex: 1,
      paddingVertical: 16,
      paddingRight: 20,
    },
    checkbox: {
      marginRight: 16,
      marginLeft: 20,
      marginTop: 16,
    },
    checkboxInner: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    editContainer: {
      flex: 1,
      paddingVertical: 16,
      paddingRight: 20,
    },
    editInput: {
      fontSize: 17,
      fontWeight: "500",
      color: colors.text,
      backgroundColor: colors.backgrounds.editInput,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 12,
      minHeight: 80,
      textAlignVertical: "top",
    },
    editButtons: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    editButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
      gap: 6,
    },
    editButtonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "600",
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 60,
    },
    emptyIconConatiner: {
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
    },
    emptyText: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 8,
      color: colors.text,
    },
    emptySubtext: {
      fontSize: 17,
      textAlign: "center",
      paddingHorizontal: 40,
      lineHeight: 24,
      color: colors.textMuted,
    },
  });
  return styles;
};