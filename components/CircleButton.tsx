import {Pressable, StyleSheet, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

type CircleButtonProps = {
    onPress?: () => void
}

const CircleButton = (props: CircleButtonProps) => {
    const {onPress} = props;
    return (
        <View style={styles.circleBtnContainer}>
            <Pressable onPress={onPress} style={styles.circleBtn}>
                <MaterialIcons name="add" size={38} color="#25292e"/>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    circleBtnContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3
    },
    circleBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: 'white',
    }
})

export default CircleButton;