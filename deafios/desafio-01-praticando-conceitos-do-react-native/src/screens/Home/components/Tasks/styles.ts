import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        minHeight: 64,
        backgroundColor: '#262626',
        borderRadius: 8,
        padding: 20,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 6
    },
    taskCompleted: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4EA8DE',

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    task: {
        flex: 1,
        marginLeft: 14,
        color: '#F2F2F2'
    },
})