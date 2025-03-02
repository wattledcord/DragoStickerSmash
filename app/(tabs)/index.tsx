import {Platform, StyleSheet, View} from "react-native";
import BasicStyles from "@/utils/BasicStyles";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import {useRef, useState} from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import {ImageSource} from "expo-image";
import EmojiSticker from "@/components/EmojiSticker";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library"
import {captureRef} from "react-native-view-shot";
import domtoImage from 'dom-to-image';

const PlaceholderImage = require('@/assets/images/background-image.png')
const Index = () => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [isModelVisible, setIsModelVisible] = useState<boolean>(false);
    const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | undefined>(undefined);
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const imageRef = useRef<View>(null);

    if (status === null) {
        requestPermission();
    }

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

    const onSaveImage = async () => {
        if (Platform.OS !== 'web') {
            try {
                const localUrl = await captureRef(imageRef, {
                    height: 440,
                    quality: 1
                });
                await MediaLibrary.saveToLibraryAsync(localUrl);
                if (localUrl) {
                    alert("Saved!");
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            if (imageRef.current !== null) {
                try {

                    // @ts-ignore
                    const defaultUrl = await domtoImage.toJpeg(imageRef.current, {
                        quality: 0.95,
                        height: 440,
                        width: 320
                    });

                    let link = document.createElement("a");
                    link.download = 'drago-sticker-smash.jpeg';
                    link.href = defaultUrl;
                    link.click();
                } catch (e) {
                    console.log(e)
                }
            }

        }
    }

    return (
        <GestureHandlerRootView style={BasicStyles.container}>
            <View style={styles.imageContainer}>
                <View collapsable={false} ref={imageRef}>
                    <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
                    {selectedEmoji && <EmojiSticker stickerSource={selectedEmoji} imageSize={40}/>}
                </View>
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
        </GestureHandlerRootView>
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