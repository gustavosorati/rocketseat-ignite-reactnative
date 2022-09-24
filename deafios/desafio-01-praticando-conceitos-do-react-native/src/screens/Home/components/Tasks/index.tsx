import { useState } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import { Check } from 'phosphor-react-native';


export function Task() {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <View style={styles.taskContainer} >
            <TouchableWithoutFeedback 
                onPress={() => setIsCompleted(!isCompleted)}
            >
                <View style={[styles.taskCompleted, isCompleted && {backgroundColor: '#5E60CE'}]}>
                    {isCompleted && (
                        <View>
                            <Check />
                        </View>    
                    ) }
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.task}>sf</Text>
        </View>
    )
}