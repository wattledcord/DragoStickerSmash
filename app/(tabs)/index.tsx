import {StyleSheet, View} from "react-native";
import BasicStyles from "@/utils/BasicStyles";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require('@/assets/images/background-image.png')
const Index = () => {
    return (
        <View style={BasicStyles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={PlaceholderImage}/>
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choose a photo" theme="primary"/>
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