import {Image, ImageSource} from "expo-image";
import {StyleSheet} from "react-native";

type ImageViewerProps = {
    imageSource: ImageSource
}
const ImageViewer = ({imageSource}: ImageViewerProps) => {
    return <Image source={imageSource} style={styles.image}/>
}
const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})

export default ImageViewer;