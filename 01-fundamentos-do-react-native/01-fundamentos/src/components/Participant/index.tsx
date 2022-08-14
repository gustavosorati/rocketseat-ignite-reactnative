import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParcipantProps = {
    name: string
    onRemove: () => void
}

export function Participant({name, onRemove}: ParcipantProps) {
    return(
        <View style={styles.container}>
            <Text>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}