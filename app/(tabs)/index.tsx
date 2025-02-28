import {StyleSheet, View} from "react-native";
import BasicStyles from "@/utils/BasicStyles";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import {ImageSource} from "expo-image";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require('@/assets/images/background-image.png')
const Index = () => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [isModelVisible, setIsModelVisible] = useState<boolean>(false);
    const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | undefined>(undefined);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image');
        }
    }
    const onReset = () => {
        setShowAppOptions(false);
    }

    const onAddSticker = () => {
        setIsModelVisible(true);
    }

    const onModalClose = () => {
        setIsModelVisible(false);
    }

    const onSaveImage = () => {

    }

    return (
        <View style={BasicStyles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
                {selectedEmoji && <EmojiSticker stickerSource={selectedEmoji} imageSize={40}/>}
            </View>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon="refresh" label="Reset" onPress={onReset}/>
                        <CircleButton onPress={onAddSticker}/>
                        <IconButton icon="save-alt" label="Save" onPress={onSaveImage}/>
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
                    <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
                </View>
            )}
            <EmojiPicker isVisible={isModelVisible} onClose={onModalClose}>
                <EmojiList onSelect={setSelectedEmoji} onCloseModal={onModalClose}/>
            </EmojiPicker>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
    },
    text: {
        color: "white",
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        alignItems: "center",
        flexDirection: "row",
    }
})

export default Index;