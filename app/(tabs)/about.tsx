import {StyleSheet, Text, View} from "react-native";
import BasicStyles from "@/utils/BasicStyles";


export default function AboutScreen(){
    return (
        <View style={BasicStyles.container}>
            <Text style={styles.text}>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        color: "white",
    }
})