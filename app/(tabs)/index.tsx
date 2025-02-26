import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import BasicStyles from "@/utils/BasicStyles";

export default function Index() {
    return (
        <View style={BasicStyles.container}>
            <Text style={styles.text}> Home Screen</Text>
            <Link href="/about" style={BasicStyles.routeBtn}>Go to About</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    },
})