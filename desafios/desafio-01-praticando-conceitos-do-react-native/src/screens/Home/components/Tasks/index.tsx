import { useState } from "react";
import { Image, Text, TouchableWithoutFeedback, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native';
import { ITask } from "../..";

interface TaskProps extends ITask {
    deleteTask: (taskId: number) => void;
    updateTask: (taskId: number, status: boolean) => void;
}

export function Task({id, status, text, deleteTask, updateTask}: TaskProps) {
    const [isCompleted, setIsCompleted] = useState(status);
    const [isbtnDeletePressed, setIsBtnDeletePressed] = useState(false)

    function handleDeleteTask() {
        deleteTask(id);
    }

    function handleUpdateStatusTask() {
        updateTask(id, !isCompleted);
        setIsCompleted(!isCompleted);
    }

    return (
        <View style={styles.taskContainer} >
            {/* Button to mark as completed */}
            <TouchableWithoutFeedback 
                onPress={handleUpdateStatusTask}
            >
                <View style={[styles.taskCompleted, isCompleted && {backgroundColor: '#5E60CE', borderColor: '#5E60CE'}]}>
                    {isCompleted && (
                        <View>
                            <Check size={12} color={"white"} />
                        </View>    
                    ) }
                </View>

            </TouchableWithoutFeedback>

            <Text style={[styles.task, isCompleted && {textDecorationLine: 'line-through', color: '#808080'}]}>{text}</Text>

            <TouchableHighlight
                onPress={() => {
                    handleDeleteTask();
                }}
                underlayColor={"#333333"}
                style={{marginLeft: 16, borderRadius: 4, backgroundColor: "transparent", padding: 3 }}
            >
                <View style={[{borderRadius: 4}]}>
                    <Trash size={18} color={isbtnDeletePressed ? "#E25858" : "#808080"} />
                </View>    
            </TouchableHighlight>
        </View>
    )
}