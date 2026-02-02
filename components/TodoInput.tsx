import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { createHomeStyles } from '@/assets/home.styles';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


export default function TodoInput() {
    const {colors} = useTheme();
    const homeStyles = createHomeStyles(colors);
    const [newTodo, setNewTodod] = useState("");
    const addTodo = useMutation(api.todos.addTodo);

    const handleAddTodo = async ()=>{
        if (newTodo.trim()){
            try{
                await addTodo({text:newTodo.trim()})
                setNewTodod("")
            }catch(error){
                console.log("Error adding Todo", error)
                Alert.alert("Error", "Failed to add todo")
            }
        }
    };
  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
        style={homeStyles.input}
        placeholder='What needs to be done'
        value={newTodo}
        onChangeText={setNewTodod}
        onSubmitEditing={handleAddTodo}
        //multiline
        placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
            <LinearGradient colors={newTodo.trim()? colors.gradients.primary: colors.gradients.muted}
            style = {[homeStyles.addButton, !newTodo.trim() && homeStyles.addButtonDIsabled]}>
                <Ionicons name='add' size={24} color="#fff"/>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};