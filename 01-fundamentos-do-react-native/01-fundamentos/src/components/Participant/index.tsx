import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParcipantProps = {
    name: string
}

export function Participant({name}: ParcipantProps) {
    return(
        <View style={styles.container}>
            <Text>{name}</Text>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}