import { Image, Text, View } from "react-native";
import { styles } from "./styles";
// import Logo from '../../../assets/logo.svg';

export function Header(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/rocket.png')} style={styles.logo} />
            <Text style={styles.title}>
                to<Text style={styles.span}>do</Text>  
            </Text>
        </View>
    )
}