import { createHomeStyles } from "@/assets/home.styles";
import { useState } from "react";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import Header from "@/components/Header";
import { Doc, Id } from "@/convex/_generated/dataModel";
import {  Text, StatusBar, TouchableOpacity, FlatList, View, Alert, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import TodoInput from "@/components/TodoInput";
import { useMutation, useQuery } from "convex/react";
import LoadingSpinner from "@/components/LoadingSPinner";
import { Ionicons } from "@expo/vector-icons";
import EmptyState from "@/components/EmptyState"
// import { toggleTodo } from "@/convex/todos";

type Todo = Doc<"todos">

export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const [editingId, setEditingId] = useState<Id<"todos">| null>(null);
  const [editText, setEditText] = useState("");

  const homeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos)
  const [text, setText] = useState('');
  const isLoading = todos === undefined;
  const toggleTodo = useMutation(api.todos.toggleTodo)
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  if(isLoading) return <LoadingSpinner />

  const handleDeleteTodo = async (id: Id<"todos">)=>{
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {text:"Cancel", style:"cancel"},
      {text:"Delete", style:"destructive", onPress: ()=> deleteTodo({id})}
    ])
  }

  const handleToggleTodo = async (id:Id<"todos">)=>{
    try{
      await toggleTodo({id}) 
    }catch(error){
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo ")
    }
  }

  const handleEditTodo = (todo:Todo)=>{
    setEditText(todo.text)
    setEditingId(todo._id)
  }
const handleSaveEditTodo =async (todo:Todo)=>{
  if(editingId){
    try{
    await updateTodo({id:editingId, text:editText.trim()})
    setEditingId(null);
    setEditText("")
  }catch(error){
    console.log("Error updating todo", error)
    Alert.alert("Error", "Failed to update todo")
  }
  }
  
  }

  const handleCancelEditTodo = (todo:Todo)=>{
    setEditingId(null);
    setEditText("");
  }
  const renderTodoItem = ({item}: {item: Todo})=>{
    const isEditing = editingId === item._id
    return(
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
         colors={colors.gradients.surface}
        //  style={homeStyles.todoItem}
         start={{x:0, y:0}}
         end={{x:1, y:1}}
         >
          <TouchableOpacity 
          style={homeStyles.checkbox}
          activeOpacity={0.7}
          onPress={()=>handleToggleTodo(item._id)}>
            <LinearGradient 
            colors={item.isCompleted? colors.gradients.success : colors.gradients.muted}
            style={[homeStyles.checkboxInner, {borderColor: item.isCompleted? 
             "transparent":colors.border}]}>
              {item.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />}
             </LinearGradient>
          </TouchableOpacity>
          {isEditing? (
            <View style={homeStyles.editContainer}>
              <TextInput 
              style={homeStyles.editInput}
              value={editText}
              onChangeText={setEditText}
              autoFocus
              multiline
              placeholder="Edit your todo..."
              placeholderTextColor={colors.textMuted}
              />
              <View style={homeStyles.editButton}>
                <TouchableOpacity onPress={handleSaveEditTodo} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.success} style={homeStyles.editButton}>
                    <Ionicons name="checkmark" size={16} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancelEditTodo} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.muted} style={homeStyles.editButton}>
                    <Ionicons name="close" size={16} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ):(
            <View style={homeStyles.todoTextContainer}>
            <Text
            style={[homeStyles.todoText, item.isCompleted && {
              textDecorationLine:"line-through",color:colors.textMuted,
            opacity:0.6}, 
          ]}
            >
              {item.text}
            </Text>
            <View style={homeStyles.todoActions}>
              <TouchableOpacity onPress={()=>{handleEditTodo(item)}} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.warning} style=
                {homeStyles.actionButton}>
                  <Ionicons name="pencil" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleDeleteTodo(item._id)} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.warning} style=
                {homeStyles.actionButton}>
                  <Ionicons name="trash" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          )}
          </LinearGradient>
      </View>
    )
  }



  return (
    <LinearGradient colors={colors.gradients.background}
    style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView
    style={homeStyles.safeArea} >
      <Header />
      <TodoInput />
      <FlatList 
      data = {todos}
      renderItem={renderTodoItem}
      keyExtractor={item=> item._id} 
      style = {homeStyles.todoList}
      contentContainerStyle={homeStyles.todoListContent}
      ListEmptyComponent={<EmptyState />}
      showsHorizontalScrollIndicator={false}
      />

      {/* {todos?.map(todo =>{
        <Text key={todo._id}>{todo.text}</Text>
      })}
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity> */}
      
    </SafeAreaView>
    </LinearGradient>
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

