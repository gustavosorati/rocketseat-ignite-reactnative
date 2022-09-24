import { useState } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Task } from "./components/Tasks";
import { styles } from "./styles";

export interface ITask {
    id: number;
    text: string;
    status: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<ITask []>([]);

    function addTask(text: string) {
        if(tasks.length) {
            const lastId = tasks[tasks.length - 1].id;

            setTasks(state => [...state, {
                id: lastId + 1,
                text,
                status: false
            }]);
        } else {
            setTasks(state => [...state, {
                id: 0,
                text,
                status: false
            }]);
        }
    }

    function deleteTask(id: number) {
        const taskupdated = tasks.filter(task => task.id !== id);
        setTasks(taskupdated);
    }

    function updateText(id: number, status: boolean) {
        console.log('status que está chegando é' + status)
        const taskupdated = tasks.map(task => {
            if(task.id === id) {
                task.status = status
            }

            return task;
        });
        setTasks(taskupdated)
    }

    const tasksCompleted = tasks.filter(task => task.status === true).length;

    return (
        <View style={{ backgroundColor: '#191919', flex: 1 }}>

            <Header />

            <View style={styles.container}>                
                <Input addTask={addTask}/>

                {/* TaskList */}
                <View style={styles.taskContainer}>
                    
                    {/* header */}
                    <View style={styles.taskHeader}>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.title, {color: "#4EA8DE"}]}>Criadas</Text>
                            
                            <View style={styles.span}>
                                <Text style={styles.spanText}>{tasks.length}</Text>
                            </View>
                        </View>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.title, {color: "#8284FA"}]}>Concluídas</Text>
                            
                            <View style={styles.span}>
                                <Text style={styles.spanText}>{tasksCompleted}</Text>
                            </View>
                        </View>
                    </View>

                    {/* separator */}
                    <View style={{ 
                        width: '100%', 
                        height: 1, 
                        backgroundColor: '#333', 
                        margin: 15
                    }}/>
                    

                    {/* list of tasks */}
                    {tasks.length ? (
                        <FlatList
                            style={{ width: "100%", height: 450 }}
                            data={tasks}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({item}) => {
                                return (
                                    <Task 
                                        id={item.id} 
                                        text={item.text} 
                                        status={item.status} 
                                        deleteTask={deleteTask}
                                        updateTask={updateText}
                                    />
                                )
                            }}
                            
                        />
                    ) : (
                        <View style={{ top: 60, alignItems: "center" }}>
                            <Image source={require("../../../assets/components/task.png")} style={{ marginBottom: 12 }} />
                            <Text style={{color: "#808080", fontWeight: "bold"}}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={{color: "#808080"}}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}