import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: -42,
        height: 50, 
    },
    input: { 
        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#262626',

        paddingTop: 8,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 8,
        flex: 1, 
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,

        width: 48,
        height: '100%',

        backgroundColor: '#1E6F9F',
        borderRadius: 8,

        color: '#fff',
        fontSize: 24,
        fontWeight: "400",
        textAlignVertical: "center",
        textAlign: "center"
    },
    btnImage: {
        width: 15,
        height: 15,
    }
})