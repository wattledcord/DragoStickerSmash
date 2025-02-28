import {PropsWithChildren} from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

type EmojiPickerProps = PropsWithChildren<{
    isVisible: boolean,
    onClose: () => void,
}>

const styles = StyleSheet.create({
    modelContainer: {
        height:'25%',
        width:'100%',
        backgroundColor:'#25292e',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        position: 'absolute',
        bottom:0,
    },
    titleContainer: {
        height:'16%',
        backgroundColor:'#464C55',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
    },
    title: {
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    }
})

const EmojiPicker = ({isVisible, onClose, children}: EmojiPickerProps) => {

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modelContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a Sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="#fff"/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

export default EmojiPicker;