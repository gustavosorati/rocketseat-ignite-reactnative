import { useState } from "react";
import { TouchableOpacity, TextInput, View, Image, Text } from "react-native";
import { styles } from "./styles";

export function Input(){
    const [isFocus, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function handleSubmit(a: any){
        
    }


    return (
        <View style={styles.container}>
            <TextInput 
                style={[styles.input, isFocus && {borderColor: '#5E60CE', color: 'white' }]} 
                placeholder="Adicione uma nova tarefa" 
                placeholderTextColor={"#808080"}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Image 
                    style={styles.btnImage}
                    source={require('../../../../assets/components/plus.png')} 
                />
            </TouchableOpacity>
        </View>
    )
}