import { Text, View } from "react-native";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Task } from "./components/Tasks";
import { styles } from "./styles";


export function Home() {
    return (
        <View>

            <Header />

            <View style={styles.container}>                
                <Input />

                {/* TaskList */}
                <View style={styles.taskContainer}>
                    
                    {/* header */}
                    <View style={styles.taskHeader}>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.title, {color: "#4EA8DE"}]}>Criadas</Text>
                            
                            <View style={styles.span}>
                                <Text style={styles.spanText}>4</Text>
                            </View>
                        </View>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.title, {color: "#4EA8DE"}]}>Criadas</Text>
                            
                            <View style={styles.span}>
                                <Text style={styles.spanText}>4</Text>
                            </View>
                        </View>
                    </View>
                
                    <View style={{ 
                        width: '100%', 
                        height: .5, 
                        backgroundColor: '#333', 
                        margin: 15
                    }}/>

                    <Task />
                </View>
            </View>
        </View>
    )
}