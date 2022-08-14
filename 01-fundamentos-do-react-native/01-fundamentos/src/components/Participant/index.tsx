import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Participant() {
    return(
        <View style={styles.container}>
            <Text>Gustavo Sorati</Text>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}