import {StyleSheet, View} from "react-native";
import BasicStyles from "@/utils/BasicStyles";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";

const PlaceholderImage = require('@/assets/images/background-image.png')
const Index = () => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
         setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image');
        }
    }

    return (
        <View style={BasicStyles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
                <Button label="Use this photo"/>
            </View>
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
    }
})

export default Index;