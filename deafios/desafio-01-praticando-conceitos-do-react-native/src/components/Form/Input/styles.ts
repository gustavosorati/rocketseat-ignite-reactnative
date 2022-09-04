import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
        top: -42,
    },
    input: {        

        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#0D0D0D',
        padding: 8,
        color: '#808080',
        flex: 1,        
    },
    button: {
        marginLeft: 12,

        width: 48,
        height: 48,

        backgroundColor: '#1E6F9F',
        borderRadius: 8,

        color: '#fff',
        fontSize: 24,
        fontWeight: "400",
        textAlignVertical: "center",
        textAlign: "center"
    }
})