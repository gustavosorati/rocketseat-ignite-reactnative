import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    
    taskContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    taskHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: "bold",
        marginRight: 6,
    },
    span: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: 2,
        paddingBottom: 3,
        paddingRight: 10,
        paddingLeft: 10,

        backgroundColor: '#333',
        borderRadius: 20
    },
    spanText: {
        color: '#d9d9d9',
        fontWeight: "bold",
    }
})