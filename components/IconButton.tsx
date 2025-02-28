import {Pressable, StyleSheet, Text} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

type IconButtonProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress?: () => void,
}

const IconButton = ({onPress, label, icon}: IconButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.iconBtn}>
            <MaterialIcons name={icon} size={24} color="white"/>
            <Text style={styles.iconBtnLabel}>{label}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    iconBtn: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconBtnLabel: {
        color: 'white',
        marginTop: 12
    }
})

export default IconButton;