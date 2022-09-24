import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        minHeight: 64,
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 20,
        flexDirection: 'row',
        alignItems: "center",
    },
    taskCompleted: {
        width: 18,
        height: 18,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4EA8DE'
    },
    task: {
        marginLeft: 14,
        color: '#F2F2F2'
        
    }

})