import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { TouchableHighlight, TextInput, View } from "react-native";
import { styles } from "./styles";

interface InputProps {
    addTask: (text: string) => void;
}

export function Input({ addTask }: InputProps){
    const [text, setText] = useState('');
    const [isFocus, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function handleSubmit(){
        addTask(text);
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={[styles.input, isFocus && {borderColor: '#5E60CE', color: 'white' }]} 
                placeholder="Adicione uma nova tarefa" 
                placeholderTextColor={"#808080"}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                onChangeText={setText}
                value={text}
            />
            <TouchableHighlight 
                style={[styles.button]} 
                onPress={handleSubmit}
                underlayColor={"#4EA8DE"}
            >
                <PlusCircle color="white" size={20} />
            </TouchableHighlight>
        </View>
    )
}