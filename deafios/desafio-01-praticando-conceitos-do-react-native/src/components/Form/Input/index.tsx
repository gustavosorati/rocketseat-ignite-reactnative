import { Text, TextInput, TouchableOpacityBase, View } from "react-native";
import { styles } from "./styles";

export function Input(){
    return (
        <View style={styles.container}>
           <TextInput style={styles.input} />

           <Text style={styles.button}>+</Text>
        </View>
    )
}